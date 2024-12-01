import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


interface AdminProtectedRoutesProp {
  children: JSX.Element;
}

const AdminProtectedRoutes: React.FC<AdminProtectedRoutesProp> = ({ children }) => {
  const { User } = useContext(UserContext) ?? {};
  return (
    <>
    { User?.isAdmin ? children : <Navigate to="/register" /> }
    </>
);
};

export default AdminProtectedRoutes;