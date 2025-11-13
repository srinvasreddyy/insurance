import React from "react";
import { motion } from "framer-motion";

const ReferFriend = () => {
  return (
    <div className="flex justify-between items-center bg-[#f9f6f1] min-h-[300px] px-20 py-16">
      {/* Left Text Section */}
      <div className="max-w-[450px]">
        <h1 className="text-[48px] font-bold text-[#1a1a1a] leading-tight">
          Got a friend who’s <br /> looking for car <br /> insurance?
        </h1>
      </div>

      {/* Right Section */}
      <div className="max-w-[550px] text-right">
        <p className="text-lg text-[#1a1a1a] mb-4 leading-relaxed">
          Whether they’re new to the UK or not, we’d love to <br />
          get to know them.
        </p>
        <p className="text-lg text-[#1a1a1a] mb-6 leading-relaxed">
          When they sign up with us, you’ll both get a £50 <br />
          Amazon voucher to spend on whatever you like.
        </p>
        <button className="bg-[#e3dcd0] hover:bg-[#d6cfc4] text-[#1a1a1a] font-semibold text-lg py-4 px-10 rounded-full transition">
          Share the love
        </button>
      </div>
    </div>
  );
};

export default ReferFriend;
