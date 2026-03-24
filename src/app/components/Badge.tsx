"use client"

import React from 'react';
import { Zap } from 'lucide-react';

const Badge = () => (
  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
    <svg className="absolute w-full h-full circle-text" viewBox="0 0 100 100">
      <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
      <text className="text-[9px] font-bold tracking-[0.25em] fill-[#4573b9]">
        <textPath xlinkHref="#circlePath">SCULPTED BY NATURE • FRESH FRUIT • ARTISANAL • </textPath>
      </text>
    </svg>
    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white shadow-lg flex items-center justify-center flex-col leading-none border border-blue-50">
      <Zap size={12} className="text-[#f7b036] mb-1 sm:w-[14px] sm:h-[14px]" />
      <span className="text-[9px] sm:text-[10px] font-extrabold text-[#4573b9]">100%</span>
      <span className="text-[7px] sm:text-[8px] font-bold text-slate-400">PURE</span>
    </div>
  </div>
);

export default Badge;
