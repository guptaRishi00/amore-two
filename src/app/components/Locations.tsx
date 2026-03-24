"use client"

import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

const locations = [
  { city: 'NEW YORK', loc: 'Lower East Side, NY', status: 'OPEN' },
  { city: 'LONDON', loc: 'Shoreditch High St.', status: 'OPEN' },
  { city: 'MILAN', loc: 'Via della Moscova', status: 'OPENING SOON' }
];

const Locations = () => (
  <section id="boutiques" className="py-16 sm:py-24 md:py-32 relative bg-[#f9f4f0] overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-center">
        <div className="lg:col-span-5 reveal">
          <span className="text-[#4573b9] font-extrabold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-4 sm:mb-6 md:mb-8 block">PLAN YOUR VISIT</span>
          <h2 className="font-condensed text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] sm:leading-[0.99] mb-6 sm:mb-8 md:mb-12">
            THE <br /> <span className="text-[#4573b9]">MAP</span>.
          </h2>
          <div className="space-y-2 sm:space-y-4">
            {locations.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-4 sm:py-5 md:py-6 border-b border-black/5 group cursor-pointer">
                <div>
                  <h4 className="font-condensed text-2xl sm:text-3xl group-hover:text-[#4573b9] transition-colors">{item.city}</h4>
                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.loc}</p>
                </div>
                <div className={`text-[7px] sm:text-[8px] font-black px-2 sm:px-3 py-1 rounded-full border ${item.status === 'OPEN' ? 'border-emerald-500 text-emerald-500' : 'border-slate-300 text-slate-300'}`}>
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="relative w-full aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-3xl md:rounded-[4rem] overflow-hidden spotlight">
            <img
              src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop"
              alt="Boutique"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#4573b9]/20 mix-blend-overlay"></div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-10 md:left-10 md:right-10 bg-white/90 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#4573b9] rounded-xl sm:rounded-2xl flex items-center justify-center text-white">
                  <Compass size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[7px] sm:text-[8px] font-bold text-slate-400 uppercase tracking-widest">CURRENT BOUTIQUE</p>
                  <h6 className="font-bold text-xs sm:text-sm text-slate-800">NYC / FLAGSHIP</h6>
                </div>
              </div>
              <ArrowRight className="text-[#4573b9] w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Locations;
