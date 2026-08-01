import React, { useState } from "react";
import { Link } from "react-router";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* left logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Reddit
          </Link>
        </div>
        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to={"#"}
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
          <button className="md:hidden cursor-pointer">
            <HiBars3BottomRight className="h-7 w-7  text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </>
  );
};

export default Navbar;
