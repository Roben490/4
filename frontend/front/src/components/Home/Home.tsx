import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom"
import { userContext } from "../../context/userContext";
import LogOut from "./LogOut/LogOut";
import ControlArea from "./ControlArea/ControlArea";


const Home: FC = () => {
    const navigate = useNavigate();
    const { user } = useContext(userContext) ?? {};

    if (user) {
        return (
            <div>
                <h1>Welcome {user.name}</h1>
                {user.role === "Admin" ? <ControlArea/> : <button onClick={() => navigate('/Tasks')}>Show My Task</button> }
                {user ? <LogOut/> : <></> }
            </div>
        )
    }
};

export { Home }