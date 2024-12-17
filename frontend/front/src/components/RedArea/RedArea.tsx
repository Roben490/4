import { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { userContext } from "../../context/userContext";

const socket = io("http://localhost:4444", {
  withCredentials: true,
});

interface Message {
  userName: string;
  message: string;
  dateTime: string;
}
export default function RedArea() {
  const [currentRoom, setCurrentRoom] = useState("Boss");
  const [messageState, setMessageState] = useState<Message>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isForBoss, setIsForBoss] = useState<boolean>(false);

  const { user } = useContext(userContext) ?? {};
  useEffect(() => {
    socket.on("receiveMessage", (message: Message) => {
      setMessages((prevMessage) => [...prevMessage, message]);
    });
    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (messageState?.message.trim()) {
      setMessages([...messages, messageState]);
      socket.emit("sendMessage", messageState);
      messageState.message = "";
    }
  };

  const messageToRoom = {
    roomName: currentRoom,
    messageState: messageState?.message,
    userName: user?.name,
  };
  console.log(messageToRoom);

  const createMessage = (message: string) => {
    const msg: Message = {
      userName: user!.name,
      message: message,
      dateTime: new Date().toISOString(),
    };
    setMessageState(msg);
  };

  const sendMessageToRoom = () => {
    if (messageState?.message.trim() && currentRoom) {
      socket.emit("sendMessageToRoom", messageToRoom);
      messageState.message = "";
    }
  };

  const sendRoomName = () => {
    if (currentRoom.trim()) {
      socket.emit("joinRoom", currentRoom);
    } else {
      alert("Name of room is required");
    }
  };

  return (
    <div>
      <h3>Red Notification</h3>
      {!isForBoss ? (
        <div>
          {user && (
            <button
              onClick={() => {
                setIsForBoss(true);
                sendRoomName();
              }}
            >
              Send Message to Boss
            </button>
          )}
          <div>
            <ul>
              {messages.map((msg) => (
                <div style={{ borderRadius: "10px", background: "blue" }}>
                  <li>
                    <b>{msg.userName}</b>
                    <p>{msg.message}</p>
                    <p>{msg.dateTime}</p>
                  </li>
                </div>
              ))}
            </ul>
            <input
              type="text"
              value={messageState?.message}
              onChange={(e) => createMessage(e.target.value)}
              placeholder="Put here your message"
            />
            <button onClick={sendMessage}>Send Message</button>
          </div>
        </div>
      ) : (
        <div>
          {messages.map((msg) => (
            <div style={{ borderRadius: "10px", background: "blue" }}>
              <li>
                <b>{msg.userName}</b>
                <p>{msg.message}</p>
                <p>{msg.dateTime}</p>
              </li>
            </div>
          ))}
          <input
            type="text"
            value={messageState?.message}
            onChange={(e) => createMessage(e.target.value)}
          />
          <button onClick={sendMessageToRoom}>Send</button>
        </div>
      )}
    </div>
  );
}
