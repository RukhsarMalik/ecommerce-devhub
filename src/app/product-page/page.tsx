"use client";
import Image from "next/image";
import { FaCheck, FaStar, FaRegHeart } from "react-icons/fa";
import { FaFlag} from "react-icons/fa6";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineShoppingBasket, MdOutlineVerifiedUser } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";

export default function ProductPage() {
  // Dummy "You May Like" products
  const youMayLike = [
    { id: 1, name: "Men Blazers Sets Elegant Formal", price: 80, img: "/product/like1.png" },
    { id: 2, name: "Men Shirt Sleeve Polo Contrast", price: 120, img: "/product/like2.png" },
    { id: 3, name: "Brown Winter Coat", price: 150, img: "/product/like3.jpg" },
    { id: 4, name: "New Summer Men's  castrol T-Shirts", price: 50, img: "/product/like4.png" },
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
    <div className="w-full flex flex-col items-center font-sans">
      {/* Breadcrumb */}
      <div className="w-full max-w-[1180px] text-sm text-gray-500 py-4">
        Home &gt; Electronics
      </div>

      {/* Product Display Section */}
      <div className="max-w-[1180px] bg-white w-full h-[580px] rounded border border-gray-300 flex gap-6 mb-10">
        {/* Left Image */}
        <div className="w-[380px] h-[380px] mt-5 ml-5 rounded border border-gray-300 flex items-center justify-center">
          <Image
            src="/product/product.jpg"
            alt="Product"
            width={345}
            height={345}
            className="object-cover"
          />
        </div>

        {/* Middle Product Details */}
        <div className="w-[430px] h-[514px] flex flex-col ">
          {/* In Stock */}
          <div className="flex items-center mt-10 gap-2 text-green-600 text-sm ">
            <FaCheck /> In stock
          </div>

          {/* Name */}
          <h1 className="text-[20px] w-[384px] font-semibold mt-3">
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h1>

          {/* Rating */}
          <div className="flex mt-1 items-center gap-2 text-sm text-gray-500">
            <div className="flex text-[#FF9017]">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> 
            </div>
            
            <IoChatboxEllipsesOutline /> 32 reviews
            <MdOutlineShoppingBasket />  154 sold 
          </div>

          {/* Price Table */}
          <div className="w-[430px] h-[72px] mt-2 bg-[#FFF0DF]  grid grid-cols-3 divide-x">
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold text-[#FA3434] text-lg">$98.00</span>
              <span className="text-xs text-[#606060] ">50-100 pcs</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold text-lg">$90.00</span>
              <span className="text-xs text-[#606060] ">100-700 pcs</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold text-lg">$78.00</span>
              <span className="text-xs text-[#606060] ">700+ pcs</span>
            </div>
          </div>

          {/* Other Details */}
           <div className="space-y-1 w-[430px] h-[296px] mt-3 text-sm">
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
                  className={`flex items-center gap-6 pb-1 ${
                    index === 0 || index === 3 || index === arr.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  <span className="text-[#8B96A5] mb-3 gap-6 w-[90px]">{item.label}:</span>
                  <span className="font-medium text-[#505050]">{item.value}</span>
                </div>
              ))}
            </div>


        </div>

        {/* Supplier Info */}
        <div className="w-[280px] h-[325px] border p-4 mt-4 rounded border-gray-300 flex flex-col justify-between">
          <div>
            <div className="flex border-b border-gray-300 pb-3 items-center gap-2 mb-2">
              <div className="w-[48px] h-[48px] bg-[#C6F3F1] "> <span className="text-[#4CA7A799] font-bold text-[28px] p-3 ">R</span> 
              </div>
              <div>
                  <span>Supplier</span>
                  <p >Guanjoi Trading LLC</p>
              </div>
            </div>
            
            <div className="flex text-[#8B96A5] items-center gap-2 mt-2 text-sm">
              <FaFlag /> Germany Seller
            </div>
            <div className="flex text-[#8B96A5] items-center gap-2 text-sm">
              <MdOutlineVerifiedUser /> Verified seller
            </div>
            <div className="flex text-[#8B96A5] items-center gap-2 text-sm">
              <TfiWorld /> Worldwide shipping
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button className="bg-[#127FFF] text-white py-2 rounded">Send Inquiry</button>
            <button className="border font-semibold border-gray-300 text-[#127FFF] py-2 rounded">
              Seller&apos;s profile
            </button>
          </div>

          <div className="flex items-center gap-2 text-[#0D6EFD] font-semibold text-sm mt-2 cursor-pointer">
            <FaRegHeart /> Save for later
          </div>
        </div>
      </div>

      {/* Description + You May Like */}
      <div className="max-w-[1180px] bg-white border p-4 border-gray-300 rounded w-full mb-10 flex gap-6">
        {/* Left Description */}
        <div className="w-[880px]">
          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-300">
            <button className="border-b-2 border-blue-500 text-[#0D6EFD] pb-2 font-semibold">
              Description
            </button>
            <button className="pb-2 text-[#8B96A5] ">Reviews</button>
            <button className="pb-2 text-[#8B96A5]">Shipping</button>
            <button className="pb-2 text-[#8B96A5]">About seller</button>
          </div>

          {/* Content */}
          <p className="mt-4 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>

          {/* Table */}
          <table className="w-[567px] h-[180px] text-[16px] text-gray-600 border-gray-300 mt-6 border">
            <tbody>
              <tr className=" border-b border-gray-300">
                <td className="p-1 bg-gray-200 ">Model</td>
                <td className="p-1">#8786867</td>
              </tr>
              <tr className=" border-b border-gray-300">
                <td className="p-1 bg-gray-200">Style</td>
                <td className="p-1">Classic style</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-1 bg-gray-200">Certificate</td>
                <td className="p-1">ISO-898921212</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-1 bg-gray-200 ">Size</td>
                <td className="p-1">34mm x 450mm x 19mm</td>
              </tr>
              <tr >
                <td className="p-1 bg-gray-200">Memory</td>
                <td className="p-1">36GB RAM</td>
              </tr>
            </tbody>
          </table>

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
        <div className="w-[280px] h-[513px] border border-gray-300 rounded p-4">
          <h3 className="font-semibold mb-4">You May Like</h3>
          <div className="space-y-4">
            {youMayLike.map((item) => (
              <div key={item.id} className="flex gap-3 items-center">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={70}
                  height={70}
                  className="border object-cover border-gray-300 rounded "
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
      <div className="max-w-[1180px] border border-gray-300 rounded bg-white p-3 w-full mb-10">
        <h2 className="text-xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-6 gap-4">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="w-[172px] h-[254px] p-2 flex flex-col items-center bg-white rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="w-[172px] h-[172px] flex items-center justify-center">
                <Image
                  src={item.img}
                  alt="Product"
                  width={120}
                  height={120}
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <p className="mt-2 text-gray-600 text-sm text-center">{item.name}</p>
              <p className=" text-gray-500">{item.price}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Advertisement */}
      <div className="max-w-[1180px] mb-3 rounded w-full h-32 bg-gradient-to-r from-[#237CFF] to-[#005ADE] flex justify-between items-center px-6 text-white">
        <div>
          <h3 className="text-[24px] font-semibold">
            Super discount on more than 100 USD
          </h3>
          <p className="text-[16px]">Have you ever finally just write dummy info</p>
        </div>
        <button className="bg-[#FF9017] px-4 py-2 rounded font-semibold">
          Shop Now
        </button>
      </div>
    </div>
  );
}
