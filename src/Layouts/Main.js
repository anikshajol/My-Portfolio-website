import React from "react";
import { Outlet } from "react-router-dom";
import SideMenubar from "../components/SideMenubar/SideMenubar";

const Main = () => {
  return (
    <div>
      <SideMenubar></SideMenubar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
