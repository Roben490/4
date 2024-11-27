import { useContext } from "react"
import { playerContext } from "../../context/playerContext"
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";



export default function ProfileDetails() {
    const { player } = useContext(playerContext) ?? {}
    console.log(player);
    
  return (
    <div>
        <img src={player?.img} alt="playerImg"/>
        <h2>{player?.username}</h2>
        <h3>{player?.score} <FaStar color="yellow"/></h3>
        <p>{player?.email}</p>
        <p>{player?.isAdmin}</p>
        <p>{player?.lives} <FaHeart color="red"/></p>
        <input type="password" disabled value={player?.password}/>
        {player?.winsImages?.map((image) => 
            <div style={{padding: '3px', background: 'green'}}>
                <img src={image} alt="winsImage" />
            </div>
        )}
    </div>
  )
}
