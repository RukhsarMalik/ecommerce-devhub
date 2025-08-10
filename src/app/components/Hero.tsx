'use client';

import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="max-w-[1180px] w-full h-auto border mb-3 border-[#DEE2E7] mx-auto flex flex-col lg:flex-row gap-4 bg-white lg:mt-10   font-sans lg:p-2">
      
      {/* Sidebar - Left */}
      <div className="hidden lg:block w-[250px] h-[360px] bg-white p-2">
        <ul className="gap-1.5 text-sm font-medium text-[#505050]">
          {[
            'Automobiles',
            'Clothes and Wear',
            'Home Interior',
            'Computer and Tech',
            'Tools and Equipment',
            'Sports and Outdoor',
            'Animal and Pet',
            'Machinery Tools',
            'More Category',
          ].map((item, index) => (
            <li
              key={index}
              className="hover:bg-[#E5F1FF] cursor-pointer p-2 rounded transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Banner */}
      <div className="relative w-full lg:w-[665px] h-[240px] lg:h-[360px] rounded overflow-hidden text-black">
        <Image
          src="/hero/hero.png"
          alt="Hero Banner"
          fill
          className="object-cover"
        />
        <div className="absolute top-6 left-6 w-[220px] md:w-[253px] text-black">
          <h2 className="text-[20px] md:text-[28px]">Latest Trending</h2>
          <h1 className="text-[22px] md:text-[30px] font-bold mt-1 mb-3">Electronics Items</h1>
          <button className="bg-white w-[110px] md:w-[119px] rounded-[6px] h-[38px] md:h-[40px] text-black px-4 py-2 text-[14px] md:text-[16px] active:scale-95 transition transform duration-150">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Boxes */}
      <div className="hidden lg:flex flex-col gap-2 text-black w-full lg:w-[200px]">
        <div className="w-full h-[150px] bg-[#E3F0FF] rounded shadow flex flex-col justify-center items-center">
          {/* top section */}
          <div className="flex flex-row gap-2 items-center">
            <div className="w-[44px] h-[44px] rounded-full overflow-hidden flex items-center justify-center">
              <Image
                src="/hero/avatar.webp"
                alt="Hero Item 1"
                width={44}
                height={44}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col text-[12px]">
              <p>Hi, User</p>
              <p>Let&apos;s get started</p>
            </div>
          </div>

          {/* bottom section */}
          <div className="mt-2 flex flex-col gap-2">
            <button className="w-[180px] h-[30px] text-[13px] bg-[#127FFF] text-white rounded-[8px]">
              Join now
            </button>
            <button className="w-[180px] h-[30px] text-[13px] bg-white text-[#0D6EFD] rounded-[8px]">
              Log in
            </button>
          </div>
        </div>

        <div className="w-full h-[95px] bg-[#F38332] rounded-[6px] shadow">
          <p className="p-3 text-[14px] md:text-[16px] text-white leading-[20px]">
            Get US $10 off with a new supplier
          </p>
        </div>

        <div className="w-full h-[95px] bg-[#55BDC3] rounded-[6px] shadow">
          <p className="p-3 text-[14px] md:text-[16px] text-white leading-[20px]">
            Send quotes with supplier preferences
          </p>
        </div>
      </div>
    </section>
  );
}
