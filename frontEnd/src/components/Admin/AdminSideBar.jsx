import React from "react";
import {
  FaBoxOpen,
  FaClipboardList,
  FaSignOutAlt,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router";

const AdminSideBar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
  };
  return (
    <div className="p-6">
      <div className="mb-6">
        <Link
          to="/admin"
          className="text-gray-500 hover:text-black uppercase text-sm font-medium"
        >
          Rabbit
        </Link>
      </div>
      <h2 className="text-xl font-medium mb-6 text-center">Admin Dashboard</h2>
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/admin/users"
          //   className={(isActive) =>
          //     isActive
          //      && "bg-red-700 text-white py-3 px-4 rounded flex items-center space-x-2 "

          //   }
          className={(isActive) =>
            isActive
              ? "bg-red-700 text-white py-3 px-4 rounded flex items-center space-x-2 "
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaUser size={24} />
          <span>Users</span>
        </NavLink>
        <NavLink
          to="/admin/products"
          //   className={(isActive) =>
          //     isActive
          //      && "bg-red-700 text-white py-3 px-4 rounded flex items-center space-x-2 "

          //   }
          className={(isActive) =>
            isActive
              ? "bg-red-700 text-white py-3 px-4 rounded flex items-center space-x-2 "
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaBoxOpen size={24} />
          <span>Products</span>
        </NavLink>
        <NavLink
          to=""
          //   className={(isActive) =>
          //     isActive
          //      && "bg-red-700 text-white py-3 px-4 rounded flex items-center space-x-2 "

          //   }
          className={(isActive) =>
            isActive
              ? "bg-red-700 text-white py-3 px-4 rounded flex items-center space-x-2 "
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaStore size={24} />
          <span>Shop</span>
        </NavLink>
      </nav>
      <div className="mt-6">
        <button
          className="bg-red-500 hover:bg-red-700 text-white flex space-x-2 items-center py-3 px-4 rounded w-full"
          onClick={handleLogOut}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSideBar;
