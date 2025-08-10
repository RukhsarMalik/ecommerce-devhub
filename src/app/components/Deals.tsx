"use client";
import React, { useEffect, useState } from "react";
import data from "../../../data.json";
import Image from "next/image";

interface Product {
  id: string;
  pname: string;
  price: string;
  image: string;
  discount?: string;
  category: string[] | string;
}

const DealsSection: React.FC = () => {
  const [deals, setDeals] = useState<Product[]>([]);

  useEffect(() => {
    const dealsData = data.products.filter((product: Product) =>
      Array.isArray(product.category)
        ? product.category.includes("deals")
        : product.category === "deals"
    );
    setDeals(dealsData.slice(0, 5));
  }, []);

  return (
    <div className="max-w-[1180px] mx-auto mb-3 bg-white shadow-md border border-[#DEE2E7] overflow-hidden font-sans flex flex-col md:flex-row">
      
      {/* Left Timer Box */}
      <div className="w-full md:w-[220px] flex flex-col p-4 border-b md:border-b-0 md:border-r border-[#DEE2E7]">
        <h2 className="text-lg font-bold">Deals and Offers</h2>
        <p className="text-sm text-[#8B96A5] mb-2">Hygiene Equipments</p>

        <div className="flex gap-2 flex-wrap">
          {[
            { time: 4, label: "Days" },
            { time: 13, label: "Hours" },
            { time: 34, label: "Min" },
            { time: 56, label: "Sec" },
          ].map((t, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-[#606060] text-white px-2 py-1 rounded"
            >
              <span className="text-sm font-bold">{t.time}</span>
              <span className="text-[10px]">{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Deals Products */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {deals.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center border border-[#DEE2E7] rounded-lg p-2 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Image
              src={item.image}
              alt={item.pname}
              width={100}
              height={100}
              className="w-20 h-20 object-contain mb-2 sm:w-24 sm:h-24"
            />
            <h3 className="text-sm font-semibold text-center">{item.pname}</h3>
            {item.discount && (
              <p className="text-red-500 text-xs font-bold mt-1">
                {item.discount} OFF
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
