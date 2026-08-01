import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";
import CartDrawer from "../Layout/CartDrawer";

const Header = () => {
  return (
    <div className="border-b border-gray-200">
      {/*  Topbar */}
      <Topbar />
      {/* Navbar */}
      <Navbar />
      {/*  cart drawer */}
    </div>
  );
};

export default Header;
