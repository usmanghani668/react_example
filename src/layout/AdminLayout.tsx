import React, { PropsWithChildren } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = (props: PropsWithChildren) => {
  return (
    <>
      <Header />
      asas
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminLayout;
