import React, { FC, useContext, useState } from "react";
import { userContext } from "../../../context/userContext";
import { Navigate, useNavigate } from "react-router-dom";
import { LoginDTO } from "../../../interface/LoginDTO";
import { loginUser } from "../../../services/logService";

const Login: FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, user } = useContext(userContext) ?? {
    setUser: (): void => {},
  };

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const userData: LoginDTO | null = await loginUser(name, password);
      if (userData?.foundUser) {
        setUser(userData.foundUser);
        navigate("/");
      } else {
        console.error("user Not Found");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    {!user ? 
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={name}
              required
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              />
          </div>
          <div>
            <input
              type="password"
              value={password}
              required
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <button type="submit">Login</button>
        </form>
        <div>
          <p>already have account?</p>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      </div>
 : <Navigate to='/'/>}
    </>
  );
};

export { Login };
