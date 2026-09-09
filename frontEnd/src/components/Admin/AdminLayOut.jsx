import React from "react";
import { FaBars } from "react-icons/fa";
import AdminSideBar from "./AdminSideBar";
import { Outlet } from "react-router";

const AdminLayOut = () => {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);

  const toggleSideBarOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Content */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button onClick={toggleSideBarOpen}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>
      {/* overlay */}
      {isSideBarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleSideBarOpen}
        ></div>
      )}
      {/* SideBar */}
      <div
        className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-20 md:translate-x-0 md:static`}
      >
        <AdminSideBar />
      </div>
      {/* Contents */}
      <div className="grow p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayOut;
