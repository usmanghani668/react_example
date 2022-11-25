import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ user }: any) => {
  return user ? <Outlet /> : <Navigate to="/login" />;
};
