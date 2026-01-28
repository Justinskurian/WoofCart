import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "./CartContents";
import { useNavigate } from "react-router-dom";
import Checkout from "./Checkout";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    toggleCartDrawer();
    navigate("/Checkout");
  };

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:2-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Cart Content */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold md:-4">Your Cart</h2>

        {/* Cart components */}
        <CartContents />
      </div>
      <div className="p-4 bg-white sticky bottom-0">
        <button
          onClick={handleCheckout}
          className="w-full bg-black text-white py-3 rounded-2xl font-semibold hover:bg-[#2f6e33]"
        >
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, Taxes and Discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
