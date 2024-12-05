import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4444", {
  withCredentials: true,
});
export default function RedArea() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [isForBoss, setIsForBoss] = useState<boolean>(false);

  useEffect(() => {
    socket.on("receiveMessage", (newMessage: string) => {
      setMessages((prevMessage) => [...prevMessage, newMessage]);
    });
    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", message);
      setMessage("");
    }
  };

  return (
    <div>
      <h3>Red Notification</h3>
      {!isForBoss ? (
        <div>
          <button onClick={() => setIsForBoss(true)}>Send Message to Boss</button>
          <div>
            <ul>
              {messages.map((msg) => (
                <div style={{ borderRadius: "10px", background: "blue" }}>
                  <li>{msg}</li>
                </div>
              ))}
            </ul>
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Put here your message"
          />
          <button onClick={sendMessage}>Send Message</button>
        </div>
      ) : (
        <>
            
        </>
      )}
    </div>
  );
}
