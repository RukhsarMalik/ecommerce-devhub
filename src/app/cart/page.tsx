"use client";

import { useState } from "react";
import Image from "next/image";
import { GrSecure } from "react-icons/gr";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";

export default function MyCartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "T-shirts with multiple colors, for men",
      description: "A shirt for summer, perfect for casual outings.",
      Seller: "LLC Fashion",
      price: 120,
      qty: 1,
      img: "/cart/product-1.png",
    },
    {
      id: 2,
      name: "Polo shirt with multiple colors, for men",
      description: "A stylish polo shirt for casual and semi-formal occasions.",
      Seller: "LLC Fashion",
      price: 150,
      qty: 1,
      img: "/cart/product-2.png",
    },
    {
      id: 3,
      name: "Table lamp with multiple colors, for home",
      description: "A modern table lamp that fits any home decor.",
      Seller: "LLC Home Decor",
      price: 100,
      qty: 1,
      img: "/cart/product-3.png",
    },
  ]);

  const discount = 60;
  const tax = 14;

  const changeQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const removeProduct = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const subTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subTotal - discount + tax;

  const savedforlater = [
    { id: 1, name: "Samsung A-70 Ultra ", price: "$96.00", img: "/cart/samsung.png" },
    { id: 2, name: "Iphone 16 Pro", price: "$70", img: "/cart/iphone.png" },
    { id: 3, name: "Smart Watch", price: "$20", img: "/cart/pot.png" },
    { id: 4, name: "Lenovo T470", price: "$40", img: "/cart/laptop.png" },
  ];

  return (
    <div className="max-w-[1180px] mx-auto p-4 space-y-6">
      {/* Heading */}
      <h2 className="text-2xl font-bold">
        My Cart ({cart.length})
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="flex flex-col flex-1">
          {/* Cart Items */}
          <div className="w-full space-y-4 bg-white border-gray-300 border p-4 rounded-lg">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:items-start border-b border-gray-300 pb-4 gap-4 relative"
              >
                {/* Image */}
                <div className="w-[120px] h-[120px] relative flex-shrink-0">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <p className="text-sm text-gray-500">Seller: {item.Seller}</p>
                  <div className="flex justify-center sm:justify-start gap-4 mt-2 text-sm flex-wrap">
                    <button
                      onClick={() => removeProduct(item.id)}
                      className="text-red-500 border w-[70px] h-[30px] border-gray-300 px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                    <button className="text-[#0D6EFD] text-[12px] border w-[103px] h-[30px] border-gray-300 px-2 py-1 rounded">
                      Save for later
                    </button>
                  </div>
                </div>

                {/* Price & Qty */}
                <div className="text-center sm:text-right">
                  <p className="font-semibold">${item.price * item.qty}</p>
                  <div className="flex items-center justify-center sm:justify-end mt-2">
                    <button
                      onClick={() => changeQty(item.id, -1)}
                      className="border border-gray-300 rounded px-2"
                    >
                      -
                    </button>
                    <span className="px-4">{item.qty}</span>
                    <button
                      onClick={() => changeQty(item.id, 1)}
                      className="border border-gray-300 rounded px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Footer Buttons */}
            <div className="flex flex-col sm:flex-row justify-between mt-4 gap-2">
              <button className="px-4 py-2 flex justify-center items-center gap-2 bg-[#127FFF] text-white rounded">
                <FaArrowLeft /> Back to shop
              </button>
              <button
                onClick={clearCart}
                className="px-4 py-2 border rounded text-[#127FFF] border-gray-300 hover:bg-gray-100"
              >
                Remove all
              </button>
            </div>
          </div>

          {/* Trust Points */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4 w-full">
            {[
              { icon: <GrSecure className="text-gray-600" />, title: "Secure Payment" },
              { icon: <BsFillChatLeftTextFill className="text-gray-600" />, title: "Customer Support" },
              { icon: <CiDeliveryTruck className="text-gray-600" />, title: "Free Delivery" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs text-gray-400">Have you ever finally just...</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-col gap-4 w-full lg:w-[280px] flex-shrink-0">
          {/* Coupon */}
          <div className="w-full border bg-white border-gray-300 rounded p-4">
            <p className="font-medium text-gray-600">Have a coupon?</p>
            <div className="flex mt-2 ">
              <input
                type="text"
                placeholder="Add coupon"
                className="flex-1 border py-1 border-gray-300 text-sm "
              />
              <button className="bg-white rounded text-[#0D6EFD] border border-gray-300 px-3 text-sm">
                Apply
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="w-full border bg-white border-gray-300 rounded p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal:</span>
              <span className="text-gray-600">${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Discount:</span>
              <span className="text-red-500">-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax:</span>
              <span className="text-green-500">+${tax.toFixed(2)}</span>
            </div>
            <hr className="border-t border-gray-300 mb-4" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-[#00B517] text-white py-3 text-[18px] rounded-lg">
              Checkout
            </button>

            {/* Payment Icons */}
            <div className="flex gap-2 mt-2 flex-wrap">
              {[
                "/cart/amex.jpg",
                "/cart/mastercard.png",
                "/cart/paypal.png",
                "/cart/visa.png",
                "/cart/applepay.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-[34px] h-[22px] border border-gray-300 flex items-center justify-center"
                >
                  <Image src={src} alt="Payment" width={32} height={18} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Saved for Later */}
      <div className="w-full max-w-[1180px] border border-gray-300 bg-white p-4 rounded-lg">
        <h3 className="text-lg font-bold mb-4">Saved for later</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {savedforlater.map((item) => (
            <div
              key={item.id}
              className="w-full border border-gray-300 rounded p-2 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:border-[#0D6EFD] bg-white"
            >
              <div className="w-full h-[240px] relative overflow-hidden rounded">
                <Image
                  src={item.img}
                  alt="Saved product"
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <p className="font-semibold mt-4">{item.price}</p>
              <p className="text-sm text-gray-500">{item.name}</p>
              <button className="flex items-center gap-2 mt-2 text-[#0D6EFD] px-2 py-2 border border-gray-300 rounded text-sm hover:bg-[#0D6EFD] hover:text-white transition-all duration-300">
                <FiShoppingCart /> Move to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
