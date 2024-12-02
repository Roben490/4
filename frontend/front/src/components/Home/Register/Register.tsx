import { FC, useContext, useState } from "react";
import { userContext } from "../../../context/userContext";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/logService";

const Register: FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { setUser } = useContext(userContext) ?? {
    setUser: (): void => {},
  };

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
        const response = await registerUser(name, password, email);
        if (response) {
            setUser(response)
            navigate('/login')
        }
        else {
            //לזכור שצריך כאן לעבוד על סניק בר אולי...
            navigate('/register')
        }
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <button onClick={() => navigate('/login')}>Login</button>
    </div>
  );
};

export { Register }
