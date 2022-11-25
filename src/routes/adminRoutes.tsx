import React from "react";
import { Route } from "react-router-dom";
import AdminLayout from "../layout/admin";
import AdminDashboard from "../views/admin/dashboard";
import { ProtectedRoute } from "./protectedRoute";

export const AdminRoutes = (user: string) => {
  return (
    <Route
      element={
        <ProtectedRoute user={user}>
          <AdminLayout />
        </ProtectedRoute>
      }
    >
      <Route element={<AdminDashboard />} path={"/dashboard"} />
    </Route>
  );
};
