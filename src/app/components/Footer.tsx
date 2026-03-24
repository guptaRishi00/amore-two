"use client"

import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import { InstagramIcon, TwitterIcon, FacebookIcon } from './Icons';

const Footer = () => (
  <footer className="bg-[#4573b9] text-white pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-12 md:pb-16 relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
      <div className="grid grid-cols-3 sm:grid-cols-6 h-full">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border-r border-white hidden sm:block first:block [&:nth-child(2)]:block [&:nth-child(3)]:block"></div>
        ))}
      </div>
    </div>

    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 sm:gap-16 md:gap-20 mb-16 sm:mb-24 md:mb-32">
        <div className="w-full lg:w-[40%]">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <Logo />
          </div>
          <h4 className="font-condensed text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 leading-tight">
            JOIN THE FRUIT <br /> REVOLUTION.
          </h4>
          <p className="text-blue-100/70 text-xs sm:text-sm mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-sm">
            Subscribe for exclusive access to seasonal drops, limited edition sculptures, and 15% off your first artisan collection box.
          </p>
          <div className="flex relative max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-b-2 border-white/20 px-3 sm:px-4 py-3 sm:py-4 md:py-5 w-full focus:outline-none focus:border-white transition-colors placeholder:text-blue-200/50 font-medium text-sm sm:text-base"
            />
            <button className="absolute right-0 bottom-2 sm:bottom-3 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-[#4573b9] hover:scale-110 transition-transform">
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-20 flex-1 w-full lg:w-auto">
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <h5 className="font-condensed text-lg sm:text-xl tracking-widest text-white/50">NAVIGATE</h5>
            <ul className="space-y-3 sm:space-y-4 text-[10px] sm:text-xs font-bold text-blue-100/50">
              <li><a href="#" className="hover:text-white transition-colors">THE BOUTIQUE</a></li>
              <li><a href="#" className="hover:text-white transition-colors">OUR PROCESS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PIPS JOURNAL</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CONTACT</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <h5 className="font-condensed text-lg sm:text-xl tracking-widest text-white/50">SOCIAL</h5>
            <ul className="space-y-3 sm:space-y-4 text-[10px] sm:text-xs font-bold text-blue-100/50">
              <li><a href="#" className="hover:text-white flex items-center gap-2 transition-colors"><InstagramIcon size={14} /> INSTAGRAM</a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2 transition-colors"><TwitterIcon size={14} /> TWITTER</a></li>
              <li><a href="#" className="hover:text-white flex items-center gap-2 transition-colors"><FacebookIcon size={14} /> FACEBOOK</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 col-span-2 sm:col-span-1">
            <h5 className="font-condensed text-lg sm:text-xl tracking-widest text-white/50">FIND US</h5>
            <div className="space-y-4 sm:space-y-6 text-[10px] sm:text-xs font-bold text-blue-100/50">
              <p className="flex items-center gap-2 sm:gap-3"><Mail size={14} className="sm:w-4 sm:h-4" /> HELLO@AAMORE.COM</p>
              <p className="flex items-center gap-2 sm:gap-3"><Phone size={14} className="sm:w-4 sm:h-4" /> +1 (800) AAMORÉ-ICE</p>
              <p className="flex items-start gap-2 sm:gap-3"><MapPin size={14} className="sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" /> 88 FROST AVENUE,<br />SCULPTURE DISTRICT, NY</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 sm:pt-10 md:pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8">
        <p className="text-[8px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] text-blue-100/30 uppercase text-center sm:text-left">
          © 2026 AAMORÉ ARTISAN BOUTIQUE • SCULPTED IN NY
        </p>
        <div className="flex gap-6 sm:gap-8 md:gap-10 text-[7px] sm:text-[8px] font-bold text-blue-100/20 uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-blue-100/50 transition-colors">Privacy</a>
          <a href="#" className="hover:text-blue-100/50 transition-colors">Terms</a>
          <a href="#" className="hover:text-blue-100/50 transition-colors">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
