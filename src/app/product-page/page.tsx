"use client";
import Image from "next/image";
import { FaCheck, FaStar, FaRegHeart } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineShoppingBasket, MdOutlineVerifiedUser } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";

export default function ProductPage() {
  const youMayLike = [
    { id: 1, name: "Men Blazers Sets Elegant Formal", price: 80, img: "/product/like1.png" },
    { id: 2, name: "Men Shirt Sleeve Polo Contrast", price: 120, img: "/product/like2.png" },
    { id: 3, name: "Brown Winter Coat", price: 150, img: "/product/like3.jpg" },
    { id: 4, name: "New Summer Men's castrol T-Shirts", price: 50, img: "/product/like4.png" },
    { id: 5, name: "Leather Bag blue color", price: 30, img: "/product/like5.png" },
  ];
  const relatedProducts = [
    { id: 1, name: "Men's Leather Wallet", price: "32.00$-40.00$", img: "/product/r1.png" },
    { id: 2, name: "Smart Watch", price: "32.00$-40.00$", img: "/product/5.png" },
    { id: 3, name: "Audionic Headphones", price: "32.00$-40.00$", img: "/product/6.png" },
    { id: 4, name: "Men's Short", price: "32.00$-40.00$", img: "/product/r4.png" },
    { id: 5, name: "Electric Kettle ", price: "32.00$-40.00$", img: "/product/r5.png" },
    { id: 6, name: "Decoration Pot", price: "32.00$-40.00$", img: "/product/r6.png" },
  ];

  return (
    <div className="w-full flex flex-col items-center font-sans px-2 sm:px-4 md:px-6 lg:px-0">
      {/* Breadcrumb */}
      <div className="w-full max-w-[1180px] text-sm text-gray-500 py-4">
        Home &gt; Electronics
      </div>

      {/* Product Display Section */}
      <div className="w-full max-w-[1180px] bg-white rounded border border-gray-300 flex flex-col md:flex-row gap-6 mb-10 p-4 md:p-6">
        {/* Left Image */}
        <div className="w-full md:w-[380px] h-auto md:h-[380px] rounded border border-gray-300 flex items-center justify-center">
          <Image
            src="/product/product.jpg"
            alt="Product"
            width={345}
            height={345}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Middle Product Details */}
        <div className="w-full md:w-[430px] flex flex-col">
          <div className="flex items-center mt-4 gap-2 text-green-600 text-sm">
            <FaCheck /> In stock
          </div>

          <h1 className="text-[20px] font-semibold mt-2">
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h1>

          <div className="flex flex-wrap mt-2 items-center gap-2 text-sm text-gray-500">
            <div className="flex text-[#FF9017] gap-1">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <div className="flex items-center gap-1">
              <IoChatboxEllipsesOutline /> 32 reviews
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineShoppingBasket /> 154 sold
            </div>
          </div>

          {/* Price Table */}
          <div className="w-full mt-4 bg-[#FFF0DF] grid grid-cols-3 divide-x text-center p-2">
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold text-[#FA3434] text-lg">$98.00</span>
              <span className="text-xs text-[#606060]">50-100 pcs</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold text-lg">$90.00</span>
              <span className="text-xs text-[#606060]">100-700 pcs</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold text-lg">$78.00</span>
              <span className="text-xs text-[#606060]">700+ pcs</span>
            </div>
          </div>

          {/* Other Details */}
          <div className="space-y-1 mt-4 text-sm">
            {[
              { label: "Price", value: "Negotiable" },
              { label: "Type", value: "Wholesale" },
              { label: "Material", value: "Plastic" },
              { label: "Design", value: "Custom design" },
              { label: "Customization", value: "Customized logo and design custom packages" },
              { label: "Protection", value: "Refund policy" },
              { label: "Warranty", value: "1 year warranty" },
            ].map((item, index, arr) => (
              <div
                key={index}
                className={`flex flex-wrap items-center gap-2 pb-1 ${
                  index === 0 || index === 3 || index === arr.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <span className="text-[#8B96A5] w-[90px]">{item.label}:</span>
                <span className="font-medium text-[#505050]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Supplier Info */}
        <div className="w-full md:w-[280px] border border-gray-300 lg:h-[325px] p-4 rounded flex flex-col justify-between">
          <div>
            <div className="flex border-b border-gray-300 pb-3 items-center gap-2 mb-2">
              <div className="w-[48px] h-[48px] bg-[#C6F3F1] flex items-center justify-center">
                <span className="text-[#4CA7A799] font-bold text-[28px]">R</span>
              </div>
              <div>
                <span>Supplier</span>
                <p>Guanjoi Trading LLC</p>
              </div>
            </div>

            <div className="flex flex-wrap text-[#8B96A5] items-center gap-2 mt-2 text-sm">
              <FaFlag /> Germany Seller
            </div>
            <div className="flex text-[#8B96A5] items-center gap-2 text-sm">
              <MdOutlineVerifiedUser /> Verified seller
            </div>
            <div className="flex text-[#8B96A5] items-center gap-2 text-sm">
              <TfiWorld /> Worldwide shipping
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <button className="bg-[#127FFF] text-white py-2 rounded w-full">Send Inquiry</button>
            <button className="border font-semibold border-gray-300 text-[#127FFF] py-2 rounded w-full">
              Seller&apos;s profile
            </button>
          </div>

          <div className="flex items-center gap-2 text-[#0D6EFD] font-semibold text-sm mt-2 cursor-pointer">
            <FaRegHeart /> Save for later
          </div>
        </div>
      </div>

      {/* Description + You May Like */}
      <div className="w-full max-w-[1180px] flex flex-col lg:flex-row gap-6 bg-white border border-gray-300 rounded p-4 mb-10">
        {/* Left Description */}
        <div className="w-full lg:w-[880px]">
          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-300">
            <button className="border-b-2 border-blue-500 text-[#0D6EFD] pb-2 font-semibold">
              Description
            </button>
            <button className="pb-2 text-[#8B96A5]">Reviews</button>
            <button className="pb-2 text-[#8B96A5]">Shipping</button>
            <button className="pb-2 text-[#8B96A5]">About seller</button>
          </div>

          {/* Content */}
          <p className="mt-4 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>

          {/* Table */}
          <div className="overflow-x-auto mt-6">
            <table className=" w-full lg:max-w-[467px] text-sm text-gray-600 border border-gray-300">
              <tbody>
                {[
                  ["Model", "#8786867"],
                  ["Style", "Classic style"],
                  ["Certificate", "ISO-898921212"],
                  ["Size", "34mm x 450mm x 19mm"],
                  ["Memory", "36GB RAM"],
                ].map(([label, value], i) => (
                  <tr key={i} className="border-b border-gray-300">
                    <td className="p-1 bg-gray-200">{label}</td>
                    <td className="p-1">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Features */}
          <div className="mt-4 space-y-2 text-[#505050]">
            {Array(4).fill("Some great features name here").map((f, i) => (
              <div key={i} className="flex items-center gap-2">
                <FaCheck className="text-[#505050]" /> {f}
              </div>
            ))}
          </div>
        </div>

        {/* Right - You May Like */}
        <div className="w-full lg:w-[280px] border border-gray-300 rounded p-4">
          <h3 className="font-semibold mb-4">You May Like</h3>
          <div className="space-y-4">
            {youMayLike.map((item) => (
              <div key={item.id} className="flex gap-3 items-center">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="border object-cover border-gray-300 rounded"
                />
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-gray-500 font-bold">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="w-full max-w-[1180px] border border-gray-300 rounded bg-white p-3 mb-10">
        <h2 className="text-xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="p-2 flex flex-col items-center bg-white rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="w-full h-[172px] flex items-center justify-center">
                <Image
                  src={item.img}
                  alt="Product"
                  width={120}
                  height={120}
                  className="transition-transform duration-300 hover:scale-110 object-contain"
                />
              </div>
              <p className="mt-2 text-gray-600 text-sm text-center">{item.name}</p>
              <p className="text-gray-500">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Advertisement */}
      <div className="w-full lg:max-w-[1180px] mb-3 rounded lg:h-[120px] bg-gradient-to-r from-[#237CFF] to-[#005ADE] flex flex-col md:flex-row justify-between items-center px-6 text-white">
        <div>
          <h3 className="text-[24px] font-semibold">
            Super discount on more than 100 USD
          </h3>
          <p className="text-[16px]">Have you ever finally just write dummy info</p>
        </div>
        <button className="bg-[#FF9017] mb-2 md:mb-0 px-4 py-2 rounded font-semibold mt-2 md:mt-0">
          Shop Now
        </button>
      </div>
    </div>
  );
}
