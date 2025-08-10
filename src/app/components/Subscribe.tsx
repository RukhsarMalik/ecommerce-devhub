import React from "react";
import { MdEmail } from "react-icons/md";

const SubscriberSection = () => {
  return (
    <div className="w-full min-h-[190px] bg-gray-200 flex flex-col items-center justify-center px-4 py-6">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl font-semibold text-center">
        Subscribe on our newsletter
      </h2>

      {/* Sub Heading */}
      <p className="text-[#606060] text-center mt-2 text-sm sm:text-base max-w-[600px]">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-4 w-full max-w-[600px] gap-2">
        {/* Input with icon */}
        <div className="flex items-center bg-white rounded-md border border-gray-300 w-full sm:w-auto flex-1">
          {/* Email Icon */}
          <span className="pl-3 text-gray-500 text-xl">
            <MdEmail />
          </span>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 text-sm sm:text-base w-full h-[40px] outline-none"
          />
        </div>

        {/* Subscribe Button */}
        <button className="bg-[#127FFF] h-[40px] px-6 hover:bg-blue-700 text-white rounded-md transition w-full sm:w-auto">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscriberSection;
