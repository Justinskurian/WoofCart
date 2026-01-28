import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Cart/CartDrawer";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <>
      <nav className="bg-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Left - Logo */}
          <div>
            <Link
              to="/"
              className="text-2xl text-[#295840] font-bold tracking-wide"
            >
              WoofCart
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="health&supplements"
              className="text-[#2E2E2E] hover:text-[#295840] text-sm font-semibold uppercase"
            >
              Health & Supplements
            </Link>
            <Link
              to="food&treats"
              className="text-[#2E2E2E] hover:text-[#295840] text-sm font-semibold uppercase"
            >
              Food & Treats
            </Link>
            <Link
              to="grooming&care"
              className="text-[#2E2E2E] hover:text-[#295840] text-sm font-semibold uppercase"
            >
              Grooming & Care
            </Link>
            <Link
              to="toys&fun"
              className="text-[#2E2E2E] hover:text-[#295840] text-sm font-semibold uppercase"
            >
              Toys & Fun
            </Link>
          </div>

          {/* Right - Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="overflow-hidden">
              <SearchBar />
            </div>

            <Link to="/profile" className="hover:text-[#295840]">
              <HiOutlineUser className="h-6 w-6 text-[#2E2E2E]" />
            </Link>
            <button
              onClick={toggleCartDrawer}
              className="relative hover:text-black"
            >
              <HiOutlineShoppingBag className="h-6 w-6 text-[#2E2E2E]" />
              <span className="absolute -top-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                4
              </span>
            </button>
            <button onClick={toggleNavDrawer} className="md:hidden">
              <HiBars3BottomRight className="h-6 w-6 text-[#2E2E2E]" />
            </button>
          </div>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation */}
      <div
className={`fixed top-0 left-0 w-3/4 sm:w-1/3 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
  navDrawerOpen ? "translate-x-0" : "-translate-x-full"
}`}

      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
                        <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">
            Health & Supplements</Link>
            <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">
            Food & Treates</Link>
                        <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">
            Grooming & Care</Link>
                        <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">
            Toys & Fun</Link>

          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
