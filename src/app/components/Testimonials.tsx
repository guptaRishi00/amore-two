"use client"

import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  { q: "It's like biting into a frozen cloud of pure mango juice. The form is a masterpiece.", n: "ELENA ROSSI", r: "Food Stylist" },
  { q: "Aamoré is the only place where the dessert looks as good as the dream.", n: "MARCUS CHEN", r: "Art Director" },
  { q: "Finally, an ice cream that treats nature with the respect it deserves.", n: "SARAH JENKINS", r: "Organic Farmer" }
];

const Testimonials = () => (
  <section className="py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col items-center mb-12 sm:mb-16 md:mb-24 reveal">
        <h2 className="font-condensed text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center leading-[0.85] sm:leading-[0.99]">
          THE WALL OF <br /> <span className="text-[#4573b9]">NECTAR</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className={`reveal p-6 sm:p-8 md:p-10 lg:p-14 rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] ${i === 1
                ? 'bg-[#4573b9] text-white md:-translate-y-4 shadow-2xl'
                : 'bg-slate-50'
              } flex flex-col justify-between`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <Quote size={28} className={`${i === 1 ? 'text-white/20' : 'text-slate-200'} mb-4 sm:mb-6 md:mb-8 sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px]`} />
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-6 sm:mb-8 md:mb-10 leading-tight ${i === 1 ? 'text-white' : 'text-slate-800'}`}>
              &quot;{item.q}&quot;
            </p>
            <div>
              <h6 className="font-black text-[10px] sm:text-xs tracking-widest uppercase mb-1">{item.n}</h6>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest opacity-50 font-bold">{item.r}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
