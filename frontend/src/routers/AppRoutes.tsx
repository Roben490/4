import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Register from "../components/Home/Register/Register";
import Login from "../components/Home/Login/Login";
import ProtectedRoutes from "../components/ProtectedRoutes/ProtectedRoutes";
import ProfileDetails from "../components/User/ProfileDetails";
import AdminProtectedRoutes from "../components/ProtectedRoutes/AdminProtectedRoutes";
import ControlArea from "../components/Home/ControlArea/ControlArea";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<ProtectedRoutes><Home/></ProtectedRoutes>} />
      <Route path="/profileDetails" element={<ProtectedRoutes><ProfileDetails/></ProtectedRoutes>} />
      <Route path="/ControlArea" element={<AdminProtectedRoutes><ControlArea/></AdminProtectedRoutes>} />

    </Routes>
  )
}
