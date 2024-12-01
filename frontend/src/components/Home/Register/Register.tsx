import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { registerUser } from "../../../services/logService";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { setUser } = useContext(UserContext) ?? {
    setUser: (): void => {},
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const UserData = await registerUser(username, password, email);
      if (UserData) {
        setUser(UserData);
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Register failed:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="showPassword">Show Password</label>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <button type="submit">Register</button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default Register;
