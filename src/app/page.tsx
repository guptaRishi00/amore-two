"use client"

import React, { useEffect } from 'react';
import CustomStyles from './components/CustomStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProductGrid from './components/ProductGrid';
import SculptingLab from './components/SculptingLab';
import PipsJournal from './components/PipsJournal';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import Footer from './components/Footer';

export default function AamoreApp() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <CustomStyles />
      <Header />
      <Hero />
      <Marquee />
      <ProductGrid />
      <SculptingLab />
      <PipsJournal />
      <Testimonials />
      <Locations />
      <Footer />
    </div>
  );
}