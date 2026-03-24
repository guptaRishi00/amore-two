"use client"

import React from 'react';

interface FlavorItemProps {
  name: string;
  desc: string;
  price: string;
  img: string;
  color: string;
}

const FlavorItem = ({ name, desc, price, img, color }: FlavorItemProps) => (
  <div className="flex flex-col items-center text-center group cursor-pointer p-2 sm:p-4">
    <div className={`relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full ${color} mb-4 sm:mb-6 md:mb-8 flex items-center justify-center spotlight border-[6px] sm:border-[8px] border-white overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3`}>
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-[#4573b9]/5 to-transparent"></div>
    </div>
    <h3 className="font-condensed text-xl sm:text-2xl md:text-3xl text-slate-900 mb-1 sm:mb-2 leading-tight">{name}</h3>
    <p className="text-[9px] sm:text-[10px] text-slate-400 max-w-[180px] sm:max-w-[200px] mb-2 sm:mb-4 font-bold uppercase tracking-widest">{desc}</p>
    <span className="font-condensed text-2xl sm:text-3xl text-[#4573b9]">${price}</span>
  </div>
);

const flavors: FlavorItemProps[] = [
  {
    name: 'Strawberry Bliss',
    desc: 'Hand-sculpted garden berries with cream.',
    price: '4.50',
    img: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=600&auto=format&fit=crop',
    color: 'bg-rose-100'
  },
  {
    name: 'Mango Sunshine',
    desc: 'Tropical Alphonso mango heart sculpting.',
    price: '5.25',
    img: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?q=80&w=600&auto=format&fit=crop',
    color: 'bg-amber-100'
  },
  {
    name: 'Wild Watermelon',
    desc: 'Summer refresh in iconic pink silhouettes.',
    price: '5.00',
    img: 'https://plus.unsplash.com/premium_photo-1661288452010-951ca57991fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww',
    color: 'bg-pink-100'
  },
  {
    name: 'Green Apple Crisp',
    desc: 'Sharp orchard geometry and tart nectar.',
    price: '4.75',
    img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=600&auto=format&fit=crop',
    color: 'bg-emerald-100'
  },
  {
    name: 'Velvet Pineapple',
    desc: 'Tropical spiky forms filled with gold.',
    price: '5.50',
    img: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=600&auto=format&fit=crop',
    color: 'bg-yellow-100'
  },
  {
    name: 'Dark Cocoa Berry',
    desc: 'Rich chocolate textures and forest fruit.',
    price: '5.00',
    img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop',
    color: 'bg-slate-100'
  },
];

const ProductGrid = () => (
  <section id="flavors" className="py-16 sm:py-24 md:py-32 bg-white">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col items-center mb-12 sm:mb-16 md:mb-24 reveal">
        <h2 className="font-condensed text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center leading-[0.85] sm:leading-[0.8] mb-4 sm:mb-6">
          60 TOP <span className="text-[#4573b9]">FORMS</span>
        </h2>
        <div className="h-1 sm:h-1.5 w-20 sm:w-32 bg-[#f7b036] rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-y-16 md:gap-y-24 gap-x-6 sm:gap-x-8 md:gap-x-12">
        {flavors.map((flavor, index) => (
          <div key={index} className="reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
            <FlavorItem {...flavor} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductGrid;
