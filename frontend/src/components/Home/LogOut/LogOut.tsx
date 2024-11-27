import { useContext } from "react";
import { playerContext } from "../../../context/playerContext";

export default function LogOut() {
    const { player, setPlayer } = useContext(playerContext) ?? {
        player: {}, 
        setPlayer: (): void => {}
    }
  return (
    <div>
        {player ? <button onClick={() => setPlayer(null)}>Log Out</button> : <></> }
    </div>
  );
}
