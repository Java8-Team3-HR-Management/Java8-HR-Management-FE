import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthorized }) => {
  if (isAuthorized) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
  // return (isPublic || isAuthorized) ? <Outlet /> : <Navigate to='/login' />
};

export default ProtectedRoute;
