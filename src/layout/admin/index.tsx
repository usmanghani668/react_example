import React, { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const AdminLayout = (props: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminLayout;
