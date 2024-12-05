import { FC, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";
import LogOut from "./LogOut/LogOut";
import ControlArea from "./ControlArea/ControlArea";
import RedArea from "../RedArea/RedArea";

const Home: FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(userContext) ?? {};

  const [notificationStatus, setNotificationStatus] = useState("none");

  const showNotifications = () => {
    setNotificationStatus("block")
  };

  if (user) {
    return (
      <div>
        <LogOut />
        {user.role === "Admin" ? (
          <ControlArea />
        ) : (
          <button onClick={() => navigate("/Tasks")}>Show My Task</button>
        )}
        <div onClick={showNotifications} className="red-area-container">
          <h4>Notification</h4>
          <div style={{display: `${notificationStatus}`}} className="red-area">
            <RedArea />
          </div>
        </div>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
};

export { Home };
