import { useContext, useState } from "react";
import { playerContext } from "../../context/playerContext";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { updatePlayerScore } from "../../services/playerService";

export default function ProfileDetails() {
  const [indexImage, setIndexImage] = useState(0);
  const [score, setScore] = useState(3);


  const { player, setPlayer } = useContext(playerContext) ?? {
    player: null,
    setPlayer: (): void => {},
  };

  const addScore = async () => {
    if (!player) return;
    try {
      const updatedPlayer = await updatePlayerScore(score);
      if (updatedPlayer) {
        setPlayer(updatedPlayer);
      }
    } catch (error) {
      console.error("Error updating score:", error);
    }
  };

  if (!player) return <p>Loading...</p>;

  if (player.winsImages) {
    if (indexImage === player.winsImages.length) {
      setIndexImage(0);
    }
    if (indexImage === -1) {
      setIndexImage(player.winsImages.length - 1);
    }
  }

  return (
    <div>
      <img src={player.img} alt="playerImg" />
      <h2>{player.username}</h2>
      <div>
        <h3>
          {player.score}
          <FaStar color="yellow" />
        </h3>
        <button onClick={addScore}>Add Score</button>
      </div>
      <p>{player.email}</p>
      <p>{player.isAdmin ? "Admin" : "User"}</p>
      <p>
        {player.lives}
        <FaHeart color="red" />
      </p>
      <input type="password" disabled value={player.password} />
      <div style={{ padding: "3px", background: "green", maxWidth: "500px" }}>
        {player.winsImages ? (
          <img src={player.winsImages[indexImage]} alt={`win ${indexImage}`} />
        ) : <></>}
      </div>
      <button onClick={() => setIndexImage(indexImage + 1)}>Next</button>
      <button onClick={() => setIndexImage(indexImage - 1)}>Prev</button>
    </div>
  );
}
