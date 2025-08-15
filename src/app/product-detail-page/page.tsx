"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, Heart } from "lucide-react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export default function ProductViewPage() {
  const [collapsed, setCollapsed] = useState<{ [key: string]: boolean }>({});
  const [favourites, setFavourites] = useState<{ [key: number]: boolean }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const toggleCollapse = (section: string) => {
    setCollapsed((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleFavourite = (id: number) => {
    setFavourites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleFeatureChange = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature]
    );
  };

  const handleConditionChange = (condition: string | null) => {
    setSelectedCondition(condition);
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRatings((prev) =>
      prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
    );
  };

  const products = [
    {
      id: 1,
      name: "Iphone 14 Pro Max",
      oldPrice: 800,
      price: 600,
      rating: 4,
      orders: 120,
      image: "/product/1.png",
      freeShipping: true,
      details: "Latest model with advanced features and sleek design.",
      brand: "Apple",
      features: ["Metallic", "8GB RAM", "Large memory"],
      condition: "Brand new",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      oldPrice: 180,
      price: 140,
      rating: 5,
      orders: 200,
      image: "/product/2.png",
      freeShipping: true,
      details: "High-end smartphone with exceptional camera and performance.",
      brand: "Samsung",
      features: ["Plastic cover", "Super power", "Large memory"],
      condition: "Brand new",
    },
    {
      id: 3,
      name: "Google Pixel 7 Pro",
      oldPrice: 160,
      price: 130,
      rating: 4,
      orders: 150,
      image: "/product/3.png",
      freeShipping: false,
      details: "Smartphone with stock Android experience and great camera.",
      brand: "Google",
      features: ["Metallic", "8GB RAM", "Super power"],
      condition: "Refurbished",
    },
    {
      id: 4,
      name: "HP laptop 15s",
      oldPrice: 700,
      price: 600,
      rating: 3,
      orders: 80,
      image: "/product/4.png",
      freeShipping: true,
      details: "Affordable laptop with decent performance for everyday tasks.",
      brand: "HP",
      features: ["Plastic cover", "8GB RAM", "Large memory"],
      condition: "old items",
    },
    {
      id: 5,
      name: "Smart Watch Series 7",
      oldPrice: 900,
      price: 800,
      rating: 4,
      orders: 100,
      image: "/product/5.png",
      freeShipping: false,
      details: "Stylish smartwatch with health tracking and notifications.",
      brand: "Apple",
      features: ["Metallic", "Super power", "Large memory"],
      condition: "Brand new",
    },
    {
      id: 6,
      name: "Headphones Pro X",
      oldPrice: 120,
      price: 110,
      rating: 5,
      orders: 90,
      image: "/product/6.png",
      freeShipping: true,
      details: "Premium headphones with noise cancellation and high sound quality.",
      brand: "Sony",
      features: ["Plastic cover", "8GB RAM", "Super power"],
      condition: "Refurbished",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesFeature =
      selectedFeatures.length === 0 ||
      selectedFeatures.every((feat) => product.features.includes(feat));
    const matchesCondition =
      !selectedCondition || product.condition.toLowerCase() === selectedCondition.toLowerCase();
    const matchesRating =
      selectedRatings.length === 0 || selectedRatings.includes(product.rating);
    const matchesPrice =
      product.price >= minPrice && product.price <= maxPrice;

    return matchesBrand && matchesFeature && matchesCondition && matchesRating && matchesPrice;
  });

  return (
    <div className="w-full max-w-[1200px] mx-auto min-h-screen font-sans bg-gray-50">
      {/* Breadcrumb */}
      <div className="w-full max-w-[1440px] mx-auto h-auto min-h-[48px] flex flex-wrap items-center px-4 text-gray-600 text-sm">
        Home &gt; Clothing &gt; Men&apos;s Wear &gt; Summer Clothing
      </div>

      <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto">
        {/* Sidebar */}
        <div className=" hidden lg:block w-[240px] bg-gray-50 p-4">
          <div>
            {/* Category */}
            <div className="flex justify-between border-gray-300 pt-2 border-t items-center cursor-pointer" onClick={() => toggleCollapse("category")}>
              <h3 className="font-semibold">Category</h3>
              {collapsed["category"] ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </div>
            {!collapsed["category"] && (
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>Mobile Accessory</li>
                <li>Electronic</li>
                <li>Smartphones</li>
                <li>Modern Tech</li>
                <li className="text-blue-500 cursor-pointer">See all</li>
              </ul>
            )}
          </div>
          {/* Brand */}
          <div className="mt-4">
            <h3
              className="font-semibold flex justify-between cursor-pointer border-gray-300 pt-2 border-t"
              onClick={() => toggleCollapse("brand")}
            >
              Brand {collapsed.brand ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </h3>
            {!collapsed.brand && (
              <div className="mt-2">
                {["Samsung", "Apple", "Huawei", "Pocco", "Lenovo", "Google", "HP", "Sony"].map(
                  (brand) => (
                    <label key={brand} className="block text-sm">
                      <input
                        type="checkbox"
                        className="mr-2 checked:accent-blue-500"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                      />
                      {brand}
                    </label>
                  )
                )}
              </div>
            )}
          </div>

          {/* Features */}
          <div className="mt-4">
            <h3
              className="font-semibold flex justify-between cursor-pointer border-gray-300 pt-2 border-t"
              onClick={() => toggleCollapse("features")}
            >
              Features {collapsed.features ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </h3>
            {!collapsed.features && (
              <div className="mt-2">
                {["Metallic", "Plastic cover", "8GB RAM", "Super power", "Large memory"].map(
                  (feat) => (
                    <label key={feat} className="block text-sm">
                      <input
                        type="checkbox"
                        className="mr-2 checked:accent-blue-500"
                        checked={selectedFeatures.includes(feat)}
                        onChange={() => handleFeatureChange(feat)}
                      />
                      {feat}
                    </label>
                  )
                )}
              </div>
            )}
          </div>
          {/* Price Range */}
        <div className="mt-6 border-gray-300 pt-2 border-t">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleCollapse("price")}
          >
            <h3 className="font-semibold">Price Range</h3>
            {collapsed["price"] ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </div>

          {!collapsed["price"] && (
            <div className="mt-3 space-y-3">
              {/* Dual Range Slider */}
              <div className="relative w-full h-6">
                {/* Track */}
                <div className="absolute top-1/2 -translate-y-1/2 h-1 w-full bg-gray-300 rounded"></div>

                {/* Active Range Highlight */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-1 bg-blue-500 rounded"
                  style={{
                    left: `${(minPrice / 1000) * 100}%`,
                    right: `${100 - (maxPrice / 1000) * 100}%`,
                  }}
                ></div>

              {/* Min Handle */}
              <input
                type="range"
                min="0"
                max="1000"
                value={minPrice}
                onChange={(e) =>
                  setMinPrice(Math.min(Number(e.target.value), maxPrice - 50))
                }
                className="absolute w-full pointer-events-none appearance-none bg-transparent accent-blue-500 [&::-webkit-slider-thumb]:pointer-events-auto"
              />

              {/* Max Handle */}
              <input
                type="range"
                min="0"
                max="2000"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(Math.max(Number(e.target.value), minPrice + 50))
                }
                className="absolute w-full pointer-events-none appearance-none bg-transparent accent-blue-500 [&::-webkit-slider-thumb]:pointer-events-auto"
              />
            </div>

      {/* Min/Max Inputs */}
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={minPrice}
          onChange={(e) =>
            setMinPrice(Math.min(Number(e.target.value), maxPrice - 50))
          }
          className="w-20 border text-gray-300 bg-white border-gray-300 p-1 text-sm rounded"
        />
        <span>-</span>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(Math.max(Number(e.target.value), minPrice + 50))
          }
          className="w-20 border text-gray-300 bg-white border-gray-300 p-1 text-sm rounded"
        />
      </div>

      {/* Apply Button */}
      <button className="w-full bg-white border border-gray-300 hover:bg-blue-600 text-blue-500 text-sm py-2 rounded-md">
        Apply Now
      </button>
    </div>
  )}
</div>


          {/* Condition */}
          <div className="mt-4">
            <h3
              className="font-semibold flex justify-between cursor-pointer border-gray-300 pt-2 border-t"
              onClick={() => toggleCollapse("condition")}
            >
              Condition {collapsed.condition ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </h3>
            {!collapsed.condition && (
              <div className="mt-2">
                {["Any", "Refurbished", "Brand new", "old items"].map((cond) => (
                  <label key={cond} className="block text-sm">
                    <input
                      type="radio"
                      name="condition"
                      className="mr-2 checked:accent-blue-500"
                      checked={
                        selectedCondition === cond || (cond === "Any" && !selectedCondition)
                      }
                      onChange={() => handleConditionChange(cond === "Any" ? null : cond)}
                    />
                    {cond}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="mt-4">
            <h3
              className="font-semibold flex justify-between cursor-pointer border-gray-300 pt-2 border-t"
              onClick={() => toggleCollapse("rating")}
            >
              Rating {collapsed.rating ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </h3>
            {!collapsed.rating && (
              <div className="mt-2">
                {[5, 4, 3, 2].map((stars) => (
                  <label key={stars} className="block text-sm">
                    <input
                      type="checkbox"
                      className="mr-2 checked:accent-blue-500"
                      checked={selectedRatings.includes(stars)}
                      onChange={() => handleRatingChange(stars)}
                    />
                     <span className="text-orange-500">
                      {"★".repeat(stars)}
                    </span>
                    <span className="text-gray-300">
                      {"☆".repeat(5 - stars)}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 py-6">
          
           {/* Top Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 w-full h-auto bg-white rounded border border-gray-300 shadow px-4 mb-4">
            <span className="text-sm">12,911 items in <strong>Mobile accessory</strong></span>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className= "checked:accent-blue-500 "  /> Verified only
              </label>
              <select className="border w-[172px] rounded h-[40px] border-gray-300 text-sm p-1">
                <option>Featured</option>
                <option>Newest</option>
              </select>
              <div className="flex gap-2">
                <div className="w-[38px] h-[40px] flex items-center justify-center rounded border border-gray-300">
                  <Image src="/product/icon1.png" alt="icon1" width={24} height={24} />
                </div>
                <div className="w-[38px] h-[40px] flex items-center justify-center border rounded  border-gray-300">
                  <Image src="/product/icon2.png" alt="icon2" width={24} height={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="w-full border border-gray-300 rounded bg-white shadow flex flex-col sm:flex-row"
                >
                  {/* Image */}
                  <div className="w-full sm:w-[200px] flex-shrink-0 relative">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={177}
                      height={178}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Details */}
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{p.name}</h3>
                        <button onClick={() => toggleFavourite(p.id)}>
                          <Heart
                            className={`${
                              favourites[p.id] ? "fill-red-500 text-red-500" : ""
                            }`}
                          />
                        </button>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-lg font-bold">${p.price}</span>
                        <span className="line-through text-gray-400 text-sm">
                          ${p.oldPrice}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-orange-400">
                          {"★".repeat(p.rating)}
                          {"☆".repeat(5 - p.rating)}
                        </span>
                        <span className="text-sm text-gray-500">{p.orders} orders</span>
                        {p.freeShipping && (
                          <span className="text-green-500 text-sm">Free Shipping</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{p.details}</p>
                    </div>
                    <Link href={"/product-page"}>
                      <button className="text-blue-500 text-sm">View details</button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No products found</p>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-end items-center gap-2 mt-6">
            <button
              className="px-2 border border-gray-300 bg-white h-[40px] rounded flex items-center justify-center"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            >
              <FaChevronLeft className="text-gray-500" />
            </button>
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                className={`px-3 py-1 border border-gray-300 ${
                  num === currentPage ? "bg-blue-500 text-white" : "bg-white"
                }`}
                onClick={() => setCurrentPage(num)}
              >
                {num}
              </button>
            ))}
            <button
              className="px-2 border bg-white border-gray-300 h-[40px] rounded flex items-center justify-center"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, 3))}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
  
    </div>
  );
}
