import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Game from "./components/Game/Game";
import Register from "./components/Home/Register/Register";
import Login from "./components/Home/Login/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
};

export default App;
