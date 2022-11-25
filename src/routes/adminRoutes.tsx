import React from "react";
import { Route } from "react-router-dom";
import NotFoundComponent from "../components/NotFound";
import AdminLayout from "../layout/AdminLayout";
import AdminDashboard from "../pages/Admin/Dashboard";
import { ProtectedRoute } from "./protectedRoute";

export const AdminRoutes = (user: string) => {
  return (
    <Route element={<ProtectedRoute user={user} />}>
      <Route element={<AdminLayout />}>
        {/* add admin routes here */}
        <Route element={<AdminDashboard />} path={"/dashboard"} />
        <Route path="*" element={<NotFoundComponent />} />
      </Route>
    </Route>
  );
};
