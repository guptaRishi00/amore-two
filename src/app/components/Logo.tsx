"use client"

import React from 'react';

const Logo = () => (
  <div className="flex items-center gap-1 group cursor-pointer">
    <div className="relative font-condensed text-2xl sm:text-3xl md:text-4xl text-[#4573b9]">
      Aa<span className="text-[#345a96]">m</span>
      <div className="inline-block relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-0.5 translate-y-1">
        <div className="absolute inset-0 border-[3px] md:border-[3.5px] border-[#4573b9] rounded-full bg-white flex flex-col items-center justify-center overflow-hidden transition-transform group-hover:scale-110">
          <div className="flex gap-0.5 mb-0.5">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#4573b9] rounded-full"></div>
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#4573b9] rounded-full"></div>
          </div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#f7b036] rotate-45 rounded-sm"></div>
        </div>
      </div>
      ré
    </div>
  </div>
);

export default Logo;
