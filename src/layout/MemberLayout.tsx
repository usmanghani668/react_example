import React, { PropsWithChildren } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MemberLayout = (props: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MemberLayout;
