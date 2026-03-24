"use client"

import React from 'react';
import { Snowflake, Heart } from 'lucide-react';

const PipsJournal = () => (
  <section id="pip" className="py-16 sm:py-24 md:py-32 bg-[#121212] text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 p-6 sm:p-12 md:p-20 opacity-5">
      <Snowflake size={200} className="sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]" />
    </div>
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 md:gap-24">
        <div className="w-full lg:w-1/2 reveal">
          <h2 className="font-condensed text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] leading-[0.85] sm:leading-[0.99] mb-6 sm:mb-8 md:mb-12">
            PIP&apos;S <br /> <span className="text-[#4573b9]">JOURNAL</span>.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-6 sm:mb-8 md:mb-12 italic border-l-4 border-[#4573b9] pl-4 sm:pl-6 md:pl-8">
            &quot;Cold isn&apos;t a temperature, it&apos;s a medium. When I find the perfect strawberry in the wild, I don&apos;t just eat it—I preserve its soul in ice.&quot;
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10">
            <div className="p-5 sm:p-6 md:p-8 border border-white/10 rounded-2xl sm:rounded-3xl hover:bg-white/5 transition-colors">
              <Snowflake className="text-[#4573b9] mb-3 sm:mb-4 w-5 h-5 sm:w-6 sm:h-6" />
              <h5 className="font-bold text-sm sm:text-base mb-1 sm:mb-2">PRECISION COLD</h5>
              <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-widest font-bold">-22°C Casting Room</p>
            </div>
            <div className="p-5 sm:p-6 md:p-8 border border-white/10 rounded-2xl sm:rounded-3xl hover:bg-white/5 transition-colors">
              <Heart className="text-rose-500 mb-3 sm:mb-4 w-5 h-5 sm:w-6 sm:h-6" />
              <h5 className="font-bold text-sm sm:text-base mb-1 sm:mb-2">PURE HEART</h5>
              <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-widest font-bold">100% Additive Free</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="relative group">
            <div className="w-[220px] h-[330px] sm:w-[280px] sm:h-[420px] md:w-[350px] md:h-[520px] lg:w-[400px] lg:h-[600px] bg-[#0a0a0a] rounded-t-full rounded-b-[3rem] sm:rounded-b-[4rem] flex flex-col items-center justify-end p-6 sm:p-8 md:p-12 border-2 sm:border-4 border-white/5 shadow-2xl overflow-hidden relative">
              <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 w-36 sm:w-48 md:w-56 lg:w-64 h-48 sm:h-60 md:h-72 lg:h-80 bg-white rounded-t-full rounded-b-2xl sm:rounded-b-3xl"></div>
              <div className="absolute top-14 sm:top-16 md:top-20 flex gap-8 sm:gap-10 md:gap-12 z-10 transition-transform group-hover:scale-110">
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-white rounded-full"></div>
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-white rounded-full"></div>
              </div>
              <div className="absolute top-24 sm:top-28 md:top-32 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#f7b036] rounded-sm rotate-45 z-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#4573b9]/30 to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 md:-bottom-10 md:-right-10 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-white p-2 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl shadow-2xl rotate-6 group-hover:rotate-0 transition-transform">
              <img src="https://plus.unsplash.com/premium_photo-1690440686714-c06a56a1511c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D" className="w-full h-full object-cover rounded-xl sm:rounded-2xl" alt="Fruit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PipsJournal;
