import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../../services/logService";
import { IoAddCircle } from "react-icons/io5";
import { TiArrowBack } from "react-icons/ti";


const AddDriver: FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
        const response = await registerUser(name, password, email);
        if (response) {
            navigate('/')
        }
        else {
            //לזכור שצריך כאן לעבוד על סניק בר אולי...
            navigate('/AddDriver')
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
        <button type="submit"><IoAddCircle size='25px'/></button>
      </form>
      <button onClick={() => navigate('/')}>Back <TiArrowBack color="red" /></button>
    </div>
  );
};

export { AddDriver }
