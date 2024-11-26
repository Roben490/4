import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Game from "./components/Game/Game";
import LoginComp from "./components/Home/Login/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/login" element={<LoginComp />} />
    </Routes>
  );
};

export default App;
