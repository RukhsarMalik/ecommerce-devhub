import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="w-full ">
      {/* Top Section */}
      <div className="w-full h-auto bg-white border-b border-gray-300 flex flex-col lg:flex-row justify-between items-start px-6 lg:px-20 py-8 gap-6 overflow-x-auto">
        {/* Brand Section */}
        <div className="w-[276px] flex flex-col gap-3">
          <div className="flex items-center gap-2">
            {/* Icon container */}
            <div className="w-[40px] h-[40px] bg-[#0D6EFD] rounded flex items-center justify-center text-white text-xl">
              <HiOutlineShoppingBag />
            </div>

            {/* Brand text */}
            <span className="text-2xl font-bold text-[#8CB7F5]">Brand</span>
          </div>

          <p className="text-sm text-gray-600">
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gray-400 text-white rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-500 transition"
                >
                  <Icon size={14} />
                </div>
              )
            )}
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">About</h3>
          {["About Us", "Find Store", "Categories", "Blogs"].map((item, i) => (
            <span
              key={i}
              className="text-sm text-gray-500 hover:text-black cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Partnership Section */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Partnership</h3>
          {["About Us", "Find Store", "Categories", "Blogs"].map((item, i) => (
            <span
              key={i}
              className="text-sm text-gray-500 hover:text-black cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Information Section */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Information</h3>
          {["Help Center", "Money Refund", "Shipping", "Contact Us"].map(
            (item, i) => (
              <span
                key={i}
                className="text-sm text-gray-500 hover:text-black cursor-pointer"
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* For Users Section */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">For Users</h3>
          {["Login", "Register", "Settings", "My Orders"].map((item, i) => (
            <span
              key={i}
              className="text-sm text-gray-500 hover:text-black cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Get App Section */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Get App</h3>

          {/* App Store Button */}
          <button className="flex items-center gap-3 bg-black text-white rounded-lg px-4 py-2 w-[180px] h-[60px] hover:opacity-80 transition">
            <FaApple className="text-3xl" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px]">Download on the</span>
              <span className="text-lg font-semibold">App Store</span>
            </div>
          </button>

          {/* Google Play Button */}
          <button className="flex items-center gap-3 bg-black text-white rounded-lg px-4 py-2 w-[180px] h-[60px] hover:opacity-80 transition">
            <FaGooglePlay className="text-3xl" />
            <div className="flex flex-col items-start leading-tight">
              <span className="text-[10px]">Get it on</span>
              <span className="text-lg font-semibold">Google Play</span>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full h-[68px] flex flex-col bg-gray-200 md:flex-row justify-between items-center px-6 lg:px-20 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <span>© 2023 Ecommerce</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <span>English</span>
          <IoIosArrowDown />
        </div>
      </div>
    </footer>
  );
}
