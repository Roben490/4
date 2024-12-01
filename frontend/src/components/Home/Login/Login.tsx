import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { loginUser } from "../../../services/logService";
import "./Login.style.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { setUser } = useContext(UserContext) ?? {
    setUser: (): void => {},
  };

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const UserData = await loginUser(username, password);
      if (UserData) {
        setUser(UserData);
        navigate("/");
      } else {
        console.error("Invalid username or password");
        navigate("/login");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={username}
            required
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="showPassword">Show Password</label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Sign Up</Link>
    </div>
  );
};

export default Login;
