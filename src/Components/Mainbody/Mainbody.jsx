import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Mainbody = () => {
  return (
    <div>
      <Navbar />
      <>
        <Outlet />
      </>
    </div>
  );
};

export default Mainbody;
