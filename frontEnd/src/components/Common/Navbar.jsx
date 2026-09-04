import React, { useState } from "react";
import { Link } from "react-router";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);
  const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* left logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Kayes
          </Link>
        </div>
        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/collections/all"
            className="text-gray-500 hover:text-black uppercase text-sm font-medium"
          >
            Men
          </Link>
          <Link
            to={"#"}
            className="text-gray-500 hover:text-black uppercase text-sm font-medium"
          >
            Women
          </Link>
          <Link
            to={"#"}
            className="text-gray-500 hover:text-black uppercase text-sm font-medium"
          >
            Topwear
          </Link>
          <Link
            to={"#"}
            className="text-gray-500 hover:text-black uppercase text-sm font-medium"
          >
            Bottomwear
          </Link>
        </div>
        {/* Right - Icons */}
        <div className="flex items-center space-x-4">
          <Link to={"/profile"} className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 cursor-pointer" />
            <span className="absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>
          {/* Searchbar */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button
            onClick={toggleNavDrawer}
            className="md:hidden cursor-pointer"
          >
            <HiBars3BottomRight className="h-7 w-7  text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/1 md:w-1/3 h-full bg-white 
      shadow-lg transform transition-transform duration-300 z-50 
      ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"} `}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="w-6 h-6 bg-white" />
          </button>
        </div>
        <div className="p-4">
          <p className="font-semibold text-2xl mb-4">Menu</p>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Topwear
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Bottomwear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
