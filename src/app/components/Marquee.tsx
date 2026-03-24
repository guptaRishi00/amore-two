"use client"

import React from 'react';

const Marquee = () => (
  <div className="bg-[#4573b9] py-3 sm:py-5 md:py-8 overflow-hidden border-y-4 sm:border-y-[6px] border-white relative z-20">
    <div className="animate-marquee whitespace-nowrap flex items-center font-condensed text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex items-center">
          <span className="mx-4 sm:mx-8 md:mx-12">✦ 100% REAL FRUIT ✦</span>
          <span className="mx-4 sm:mx-8 md:mx-12">SHAPED BY HAND</span>
          <span className="mx-4 sm:mx-8 md:mx-12">✦ ARTISAN FROZEN DESSERTS ✦</span>
          <span className="mx-4 sm:mx-8 md:mx-12">AAMORÉ BOUTIQUE</span>
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
