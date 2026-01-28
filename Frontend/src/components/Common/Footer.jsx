import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#295840] text-white">
      {/* Main Footer */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-4 lg:px-0">
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Be the first to hear about our new products, exclusive events and
            online offers
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Sign up and get 10% off on your first order
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="
      w-full px-4 py-3 text-sm
      bg-white text-gray-800
      placeholder-gray-400
      rounded-l-md
      border border-white/30
      focus:outline-none
      focus:ring-2 focus:ring-green-400
      focus:border-transparent
    "
            />
            <button
              type="submit"
              className="
      bg-black text-white px-6 py-3 text-sm
      rounded-r-md
      hover:bg-gray-900
      transition
    "
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              "Health & Supplements",
              "Food & Treats",
              "Grooming & Care",
              "Toys & Fun",
            ].map((item) => (
              <li key={item}>
                <Link to="#" className="hover:text-white transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            {["Contact Us", "About Us", "FAQs", "Features"].map((item) => (
              <li key={item}>
                <Link to="#" className="hover:text-white transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex items-center space-x-4 mb-5 text-gray-300">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <RiTwitterXLine className="h-4 w-4" />
            </a>
          </div>

          <p className="text-gray-400 text-sm mb-1">Call Us</p>
          <p className="text-gray-300 text-sm">
            <FiPhoneCall className="inline-block mr-2" />
            0123-456-789
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/20 py-3">
        <p className="text-gray-400 text-xs text-center tracking-tight">
          © 2025 CompileTab. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
