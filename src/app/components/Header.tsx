"use client";

import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaBoxOpen,
  FaShoppingCart,
  FaBars,
  FaChevronDown,
  FaTimes
} from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Header() {
  const [category, setCategory] = useState("All categories");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      {/* ====== Top Header Section ====== */}
      <div className="w-full border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto h-[86px] flex items-center justify-between px-6 lg:px-32">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-[40px] h-[40px] bg-[#0D6EFD] rounded flex items-center justify-center text-[#8CB7F5] text-xl">
              <HiOutlineShoppingBag />
            </div>
            <span className="text-2xl font-bold text-[#8CB7F5]">Brand</span>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center w-full max-w-[500px] mx-4 flex-grow">
            <input
              type="text"
              placeholder="Search"
              className="border border-[#127FFF] h-[40px] rounded-l-md px-3 w-full outline-none"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border-t border-b border-[#127FFF] h-[40px] px-3 outline-none text-sm"
            >
              <option>All categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Books</option>
            </select>
            <button className="bg-blue-600 text-white text-[13px] w-[100px] h-[40px] rounded-r-md flex items-center justify-center">
              Search
            </button>
          </div>

          {/* Icons Section */}
          <div className="hidden md:flex text-[#8B96A5] items-center gap-6">
            <div className="flex flex-col items-center text-sm cursor-pointer">
              <FaUser className="text-lg" />
              <span>Profile</span>
            </div>
            <div className="flex flex-col items-center text-sm cursor-pointer">
              <FaEnvelope className="text-lg" />
              <span>Messages</span>
            </div>
            <div className="flex flex-col items-center text-sm cursor-pointer">
              <FaBoxOpen className="text-lg" />
              <span>Orders</span>
            </div>
            <div className="flex flex-col items-center text-sm cursor-pointer relative">
              <FaShoppingCart className="text-lg" />
              <span>My Cart</span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-xl text-gray-600"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* ====== Bottom Header Section ====== */}
      <div className="hidden md:block w-full border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto h-[56px] flex items-center justify-between px-4 lg:px-32">
          {/* Left Menu */}
          <div className="flex items-center gap-6 text-sm">
            <span className="font-semibold">All Category</span>
            <span className="cursor-pointer">Hot offers</span>
            <span className="cursor-pointer">Gift boxes</span>
            <span className="cursor-pointer">Projects</span>
            <span className="cursor-pointer flex items-center gap-1">
              Menu item <FaChevronDown size={12} />
            </span>
            <span className="cursor-pointer">Help</span>
          </div>

          {/* Right Language & Shipping */}
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 cursor-pointer">
              English USD <FaChevronDown size={12} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              Ship to 🇵🇰 <FaChevronDown size={12} />
            </div>
          </div>
        </div>
      </div>

      {/* ====== Mobile Slide Menu ====== */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          <div className="w-[250px] bg-white h-full p-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <FaTimes />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 h-[40px] rounded-md px-3 w-full outline-none"
              />
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-4 text-gray-700">
              <span>All Category</span>
              <span>Hot offers</span>
              <span>Gift boxes</span>
              <span>Projects</span>
              <span>Menu item</span>
              <span>Help</span>
              <hr />
              <span>Profile</span>
              <span>Messages</span>
              <span>Orders</span>
              <span>My Cart</span>
            </nav>
          </div>
          <div
            className="flex-1"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        </div>
      )}
    </header>
  );
}
