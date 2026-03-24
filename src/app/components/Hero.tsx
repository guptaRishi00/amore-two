"use client"

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Badge from './Badge';

const Hero = () => (
  <header className="relative pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-24 md:pb-32 overflow-hidden">
    <img src="https://images.unsplash.com/photo-1622090860720-c4a77e146284?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww" className="absolute top-[20%] left-[5%] w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain floating opacity-40 blur-[1px] hidden sm:block" alt="" />
    <img src="https://images.unsplash.com/photo-1559703248-dcaaec9fab78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww" className="absolute bottom-[30%] right-[10%] w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain floating opacity-30 hidden sm:block" style={{ animationDelay: '1.5s' }} alt="" />
    <div className="absolute top-[15%] right-[20%] w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#f7b036] animate-ping"></div>

    <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
      <div className="reveal text-center">
        <h1 className="font-condensed text-[11vw] sm:text-[10vw] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] leading-[0.85] sm:leading-[0.9] mb-6 sm:mb-8 md:mb-12 text-[#121212]">
          THE FRUIT <br /> <span className="text-[#4573b9]">SCULPTORS</span>
        </h1>
      </div>

      <div className="relative w-full max-w-4xl flex items-center justify-center reveal" style={{ transitionDelay: '0.2s' }}>
        <div className="relative z-10 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full bg-white spotlight flex items-center justify-center border-[10px] sm:border-[15px] md:border-[20px] lg:border-[25px] border-[#eff4fb] overflow-hidden group">
          <img
            src="https://plus.unsplash.com/premium_photo-1677696295482-bf8a53d2ee90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww"
            alt="Aamore Hero"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4573b9]/20 to-transparent"></div>
        </div>

        {/* Badge positioned outside the overflow-hidden circle */}
        <div className="absolute z-20 bottom-2 right-[18%] sm:bottom-4 sm:right-[20%] md:bottom-6 md:right-[18%] lg:bottom-10 lg:right-[20%] scale-75 sm:scale-80 md:scale-90 lg:scale-100">
          <Badge />
        </div>

        <div className="absolute top-4 sm:top-10 left-0 bg-white/80 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white shadow-xl hidden md:flex items-center gap-2 sm:gap-3">
          <Star size={14} className="text-[#f7b036] fill-[#f7b036] sm:w-4 sm:h-4" />
          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-800">2026 Boutique of the Year</span>
        </div>
      </div>

      <div className="mt-10 sm:mt-14 md:mt-20 reveal" style={{ transitionDelay: '0.4s' }}>
        <button className="font-condensed text-lg sm:text-xl md:text-2xl bg-[#4573b9] text-white px-8 sm:px-10 md:px-14 py-3.5 sm:py-4 md:py-5 flex items-center gap-4 sm:gap-5 md:gap-6 group transition-all hover:bg-[#345a96] hover:scale-105 shadow-2xl shadow-blue-200">
          DISCOVER THE COLLECTION <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]" />
        </button>
      </div>
    </div>
  </header>
);

export default Hero;
