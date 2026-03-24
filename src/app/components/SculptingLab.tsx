"use client"

import React from 'react';

const SculptingLab = () => (
  <section id="lab" className="py-16 sm:py-24 md:py-32 relative bg-white border-y border-slate-100 overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-center">
        <div className="order-2 lg:order-1 reveal">
          <div className="relative w-full aspect-[4/5] sm:aspect-square bg-[#f9f4f0] rounded-2xl sm:rounded-3xl md:rounded-[4rem] overflow-hidden group">
            <img
              src="https://plus.unsplash.com/premium_photo-1690440686714-c06a56a1511c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D"
              alt="Process"
              className="w-full h-full object-cover transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-[#4573b9]/10"></div>
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 md:top-10 md:left-10 text-white font-condensed text-4xl sm:text-5xl md:text-6xl">01</div>
          </div>
        </div>
        <div className="order-1 lg:order-2 reveal" style={{ transitionDelay: '0.2s' }}>
          <span className="text-[#4573b9] font-extrabold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-4 sm:mb-6 md:mb-8 block">THE ANATOMY OF FORM</span>
          <h2 className="font-condensed text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] leading-[0.85] sm:leading-[0.99] mb-6 sm:mb-8 md:mb-12">
            SCULPTING <br /> THE <span className="text-[#4573b9]">VOID</span>.
          </h2>
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            {[
              { t: 'THE HARVEST', d: 'Only peak-season organic fruits are selected for their density and color.' },
              { t: 'THE CHURN', d: 'Micro-oxygenated blending preserves the fiber and natural nectar profile.' },
              { t: 'THE CAST', d: 'Sub-zero thermal casting into hand-crafted silicone silhouettes.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 sm:gap-6 md:gap-8 group">
                <span className="font-condensed text-2xl sm:text-3xl md:text-4xl text-slate-400 group-hover:text-[#4573b9] transition-colors">{i + 1}</span>
                <div>
                  <h4 className="font-extrabold text-xs sm:text-sm tracking-widest mb-1 sm:mb-2">{item.t}</h4>
                  <p className="text-slate-500 leading-relaxed text-xs sm:text-sm">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SculptingLab;
