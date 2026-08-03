import React from "react";
import Header from "../Common/Header";
import Footer from "./../Common/Footer";
import { Outlet } from "react-router";

const UserLayoOut = () => {
  return (
    <header>
      {/* Header */}
      <Header />
      {/* Main */}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </header>
  );
};

export default UserLayoOut;
