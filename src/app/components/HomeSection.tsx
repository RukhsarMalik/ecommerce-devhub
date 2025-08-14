"use client";
import React, { useEffect, useState } from "react";
import data from "../../../data.json";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  pname: string;
  price: string;
  image: string;
  category: string[] | string;
}

const HomeDecorSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const homeProducts = data.products.filter((p: Product) =>
      Array.isArray(p.category)
        ? p.category.includes("home")
        : p.category === "home"
    );
    setProducts(homeProducts.slice(0, 8));
  }, []);

  return (
    <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md font-sans ">
      
      {/* left side */}
      <div className="relative w-full md:w-[220px] flex flex-col p-4 justify-start text-white overflow-hidden group h-[250px]">
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{
            backgroundImage: "url('/home/bg.jpg')",
            transform: "scaleX(-1)",
            }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-orange-200 opacity-40"></div>

        {/* Texts */}
        <h2 className="relative z-10 text-lg w-[130px] font-bold text-black mt-4">Home and Outdoor</h2>
        

        {/* Button */}
        <Link href="/product-detail-page">
        <button className="relative z-10 w-[123px] h-[40px] bg-white text-black rounded-md text-[16px] mt-4">
          Source Now
        </button>
       </Link>
      </div>



      {/* Right Side Products Grid */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex items-center border border-[#DEE2E7] p-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.03] cursor-pointer"
          >
            {/* Left: Details */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold">{item.pname}</h3>
              <div className="mt-1 text-xs text-gray-500">From</div>
              <div className="text-sm font-bold">
                USD <span className="text-gray-700">{item.price}</span>
              </div>
            </div>

            {/* Right: Image */}
            <div className="overflow-hidden rounded">
              <Image
                src={`${item.image}`} // Image should be in public/products/
                alt={item.pname}
                width={64}
                height={64}
                className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDecorSection;
