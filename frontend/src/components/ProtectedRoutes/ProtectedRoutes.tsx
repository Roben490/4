import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { playerContext } from "../../context/playerContext";


interface ProtectedRoutesProp {
  children: JSX.Element;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProp> = ({ children }) => {
  const { player } = useContext(playerContext) ?? {};
  return (
    <>
    { player ? children : <Navigate to="/login" /> }
    </>
);
};

export default ProtectedRoutes;