import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { playerContext } from "../../context/playerContext";


interface AdminProtectedRoutesProp {
  children: JSX.Element;
}

const AdminProtectedRoutes: React.FC<AdminProtectedRoutesProp> = ({ children }) => {
  const { player } = useContext(playerContext) ?? {};
  return (
    <>
    { player?.isAdmin ? children : <Navigate to="/register" /> }
    </>
);
};

export default AdminProtectedRoutes;