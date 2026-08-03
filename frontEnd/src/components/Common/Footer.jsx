import React from "react";
import { Link } from "react-router";
import { TbBrandMetabrainz } from "react-icons/tb";
import { PiInstagramLogoBold } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t p-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            News Letter
          </h3>
          <p className="text-gray-500 mb-4">
            {" "}
            Be the first to hear about new products, exclusive content and
            Online offers
          </p>
          <p>Sign up and get 10% off first order</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm
              mt-2
               border-t border-l border-b border-gray-500
                rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 
                transition-all"
              required
            />{" "}
            <button
              type="submit"
              className="bg-black text-white border
               px-6 py-3 text-sm rounded-r-md
                hover:bg-gray-800 transition-all     mt-2"
            >
              Subscribe
            </button>
          </form>
          <div> </div>
        </div>
        {/* Shop links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4 ">Shop</h3>
          <ul className="space-y-2 text-gray-800">
            <li>
              <Link
                to="/shop"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                Men's Top wear
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                Women's Top wear
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                Men's Bottom wear
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                Women's BOttom wear
              </Link>
            </li>
          </ul>
        </div>
        {/* Support Links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4 ">Support</h3>
          <ul className="space-y-2 text-gray-800">
            <li>
              <Link
                to="/shop"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                FAQ's
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                Features
              </Link>
            </li>
          </ul>
        </div>
        {/* Follow Us */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-4">
            <a
              href="http://www.facebook.com"
              target="_blank"
              rel="noropen norreferral"
              className="hover:text-gray-300"
            >
              <TbBrandMetabrainz className="h-5 w-5" />
            </a>
            <a
              href="http://www.facebook.com"
              target="_blank"
              rel="noropen norreferral"
              className="hover:text-gray-300"
            >
              <PiInstagramLogoBold className="h-5 w-5" />
            </a>

            <a
              href="http://www.facebook.com"
              target="_blank"
              rel="noropen norreferral"
              className="hover:text-gray-300"
            >
              <CiTwitter className="h-5 w-5" />
            </a>
          </div>
          <p className="text-gray-500">Call Us:</p>
          <p>
            <MdLocalPhone className="inline-block" /> +1 (234) 567890
          </p>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center">
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
