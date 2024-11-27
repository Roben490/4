import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { playerContext } from "../../../context/playerContext";
import './Login.style.css'

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { postFetch, data } = useFetch("http://localhost:3000/api/login");
  const { setPlayer } = useContext(playerContext) ?? {
    player: null,
    setPlayer: (): void => {},
  };
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await postFetch({ username, password });
      if (data) {
        setPlayer(data);
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
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
          <label htmlFor="showPassword">Show Password</label>
          <input
            type="checkbox"
            id=""
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <button type="submit">Login</button>
        </form>
        <Link to="/register">Sign Up</Link>
      </div>
    </>
  );
};

export default Login;
