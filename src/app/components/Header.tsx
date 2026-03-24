"use client"

import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const links = [
    { href: '#flavors', label: 'The Boutique' },
    { href: '#lab', label: 'Process' },
    { href: '#pip', label: 'Our Hero' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-3 sm:py-4 shadow-sm' : 'bg-transparent py-4 sm:py-6 md:py-8'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-extrabold uppercase tracking-[0.25em] text-slate-500">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-[#4573b9] transition-colors">{link.label}</a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#4573b9] p-1 z-50 relative"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Logo />

          <div className="flex items-center gap-4 sm:gap-8">
            <div className="hidden md:flex flex-col items-end leading-none">
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 mb-1">BOUTIQUE HOURS</span>
              <span className="text-[10px] sm:text-xs font-bold text-[#4573b9]">10:00 AM — 10:00 PM</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-5">
              <Search size={20} className="text-[#4573b9] cursor-pointer hover:scale-110 transition-transform sm:w-[22px] sm:h-[22px]" />
              <div className="relative cursor-pointer group">
                <ShoppingBag size={20} className="text-[#4573b9] transition-transform group-hover:rotate-6 sm:w-[22px] sm:h-[22px]" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#f7b036] rounded-full text-[9px] flex items-center justify-center text-white font-black shadow-sm">3</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] sm:w-[320px] bg-white z-[45] shadow-2xl transform transition-transform duration-300 ease-out lg:hidden ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="pt-24 px-8 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-condensed text-2xl text-slate-800 hover:text-[#4573b9] transition-colors py-4 border-b border-slate-100"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-1">
            <span className="text-[10px] font-bold text-slate-400">BOUTIQUE HOURS</span>
            <span className="text-sm font-bold text-[#4573b9]">10:00 AM — 10:00 PM</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
