import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

export default function LogOut() {
    const { User, setUser } = useContext(UserContext) ?? {
        User: {}, 
        setUser: (): void => {}
    }
  return (
    <div>
        {User ? <button onClick={() => setUser(null)}>Log Out</button> : <></> }
    </div>
  );
}
