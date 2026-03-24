"use client"

import React from 'react';

const CustomStyles = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;700;800&family=Anton&display=swap');

    :root {
      --brand-blue: #4573b9;
      --brand-accent: #f7b036;
      --bg-cream: #f9f4f0;
      --text-dark: #121212;
    }

    body {
      background-color: var(--bg-cream);
      color: var(--text-dark);
      font-family: 'Plus Jakarta Sans', sans-serif;
      overflow-x: hidden;
    }

    .font-condensed { 
      font-family: 'Anton', sans-serif; 
      letter-spacing: 0.01em;
      text-transform: uppercase;
    }

    /* Reference Style Animations */
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: 200%;
      animation: marquee 25s linear infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(8deg); }
    }
    .floating { animation: float 6s ease-in-out infinite; }

    /* Reveal effect for sections */
    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Product spotlight shadow */
    .spotlight {
      box-shadow: 0 40px 100px -20px rgba(69, 115, 185, 0.2);
    }

    .circle-text {
      animation: rotate 15s linear infinite;
    }
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .blob {
      border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    }
  `}} />
);

export default CustomStyles;
