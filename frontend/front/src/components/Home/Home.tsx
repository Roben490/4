import { FC, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";
import LogOut from "./LogOut/LogOut";
import ControlArea from "./ControlArea/ControlArea";

const Home: FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(userContext) ?? {};

  if (user) {
    return (
      <div>
        <LogOut />
        {user.role === "Admin" ? (
          <ControlArea />
        ) : (
          <button onClick={() => navigate("/Tasks")}>Show My Task</button>
        )}
      </div>
    );
  }
  if (!user) {
    return (
        <Navigate to="/login"/>
    )
  }
};

export { Home };
