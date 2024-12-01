import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

interface ProtectedRoutesProp {
  children: JSX.Element;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProp> = ({ children }) => {
  const { User } = useContext(UserContext) ?? {};  
  return (
    <>
    { User ? children : <Navigate to="/login" /> }
    </>
);
};

export default ProtectedRoutes;