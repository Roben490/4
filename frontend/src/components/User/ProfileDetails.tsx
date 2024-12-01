import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { updateUserScore } from "../../services/UserService";

export default function ProfileDetails() {
  const [indexImage, setIndexImage] = useState(0);
  const [score, setScore] = useState(3);


  const { User, setUser } = useContext(UserContext) ?? {
    User: null,
    setUser: (): void => {},
  };

  const addScore = async () => {
    if (!User) return;
    try {
      const updatedUser = await updateUserScore(score);
      if (updatedUser) {
        setUser(updatedUser);
      }
    } catch (error) {
      console.error("Error updating score:", error);
    }
  };

  if (!User) return <p>Loading...</p>;

  if (User.winsImages) {
    if (indexImage === User.winsImages.length) {
      setIndexImage(0);
    }
    if (indexImage === -1) {
      setIndexImage(User.winsImages.length - 1);
    }
  }

  return (
    <div>
      <img src={User.img} alt="UserImg" />
      <h2>{User.username}</h2>
      <div>
        <h3>
          {User.score}
          <FaStar color="yellow" />
        </h3>
        <button onClick={addScore}>Add Score</button>
      </div>
      <p>{User.email}</p>
      <p>{User.isAdmin ? "Admin" : "User"}</p>
      <p>
        {User.lives}
        <FaHeart color="red" />
      </p>
      <input type="password" disabled value={User.password} />
      <div style={{ padding: "3px", background: "green", maxWidth: "500px" }}>
        {User.winsImages ? (
          <img src={User.winsImages[indexImage]} alt={`win ${indexImage}`} />
        ) : <></>}
      </div>
      <button onClick={() => setIndexImage(indexImage + 1)}>Next</button>
      <button onClick={() => setIndexImage(indexImage - 1)}>Prev</button>
    </div>
  );
}
