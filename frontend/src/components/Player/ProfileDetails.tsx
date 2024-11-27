import { useContext, useState } from "react";
import { playerContext } from "../../context/playerContext";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

export default function ProfileDetails() {
  const [indexImage, setIndexImage] = useState(0);
  const { player } = useContext(playerContext) ?? {};

  if (player) {
    if (player.winsImages) {
      if (indexImage === player.winsImages.length) {
        setIndexImage(0);
      }
      if (indexImage === -1) {
        setIndexImage(player.winsImages.length + 1);
      }
      return (
        <div>
          <img src={player.img} alt="playerImg" />
          <h2>{player.username}</h2>
          <h3>
            {player.score} <FaStar color="yellow" />
          </h3>
          <p>{player.email}</p>
          <p>{player.isAdmin}</p>
          <p>
            {player.lives} <FaHeart color="red" />
          </p>
          <input type="password" disabled value={player?.password} />
          {/* {player?.winsImages?.map((image) => 
            <div style={{padding: '3px', background: 'green', maxWidth: '500px'}}>
                <img src={image} alt="winsImage" />
            </div>
        )} */}
          <div
            style={{ padding: "3px", background: "green", maxWidth: "500px" }}
          >
            <img
              src={player.winsImages ? player.winsImages[indexImage] : ""}
              alt=""
            />
          </div>
          <button onClick={() => setIndexImage(indexImage + 1)}>Next</button>
          <button onClick={() => setIndexImage(indexImage - 1)}>Prev</button>
        </div>
      );
    }
  }
}
