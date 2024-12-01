import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";


interface AdminProtectedRoutesProp {
  children: JSX.Element;
}

const AdminProtectedRoutes: React.FC<AdminProtectedRoutesProp> = ({ children }) => {
  const { User } = useContext(UserContext) ?? {};
  return (
    <>
    { User?.role === "Admin" ? children : <Navigate to="/" /> }
    </>
);
};

export default AdminProtectedRoutes;