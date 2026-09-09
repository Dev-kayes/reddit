import React from "react";
import { FaBars } from "react-icons/fa";

const AdminLayOut = () => {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);

  const toggleSideBarOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Content */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default AdminLayOut;
