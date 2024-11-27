import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Register from "../components/Home/Register/Register";
import Login from "../components/Home/Login/Login";
import ProtectedRoutes from "../components/ProtectedRoutes/ProtectedRoutes";
import Game from "../components/Game/Game";
import Profile from "../components/Player/Profile";
import AdminProtectedRoutes from "../components/ProtectedRoutes/AdminProtectedRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/game" element={<ProtectedRoutes><Game /></ProtectedRoutes>} />
      <Route path="/profile" element={<AdminProtectedRoutes><Profile/></AdminProtectedRoutes>} />
    </Routes>
  )
}
