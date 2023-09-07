import { Outlet } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";
import React from "react";

const MainLayout = (props) => {
  return (
    <div>
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
