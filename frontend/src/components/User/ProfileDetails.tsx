import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { FaStar } from "react-icons/fa";

export default function ProfileDetails() {


  const { User } = useContext(UserContext) ?? {
    User: null,
  };

  if (!User) return <p>Loading...</p>;

  return (
    <div>
      <h2>{User.name}</h2>
      <div>
        <h3>
          {User.role}
          <FaStar color="yellow" />
        </h3>
      </div>
      <input type="password" disabled value={User.password} />
    </div>
  );
}
