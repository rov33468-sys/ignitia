"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 pointer-events-none ${
        scrolled 
          ? 'bg-black/70 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-gray-800/50 py-3 px-6 md:px-10' 
          : 'bg-transparent py-6 px-6 md:px-10'
      }`}
    >
       <div className="flex items-center justify-between pointer-events-auto">
          {/* LOGOS (Left) */}
          <div className="flex items-center space-x-4 md:space-x-6 cursor-pointer group">
            <img 
               src="/uem-logo.png" 
               alt="UEM Logo" 
               className="h-10 md:h-14 w-auto object-contain drop-shadow-[0_0_10px_rgba(0,200,255,0.3)] hover:drop-shadow-[0_0_20px_rgba(0,200,255,0.8)] transition-all duration-300 group-hover:scale-105" 
            />
            <img 
               src="/logo.png" 
               alt="Microsoft Student Society UEMK Logo" 
               className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:drop-shadow-[0_0_20px_rgba(0,200,255,0.6)] transition-all duration-300 group-hover:scale-105" 
            />
          </div>

          {/* HUD NAVIGATION PILL (Center) - Hidden on mobile, visible on md */}
          <nav className="hidden md:flex items-center bg-[#070707]/80 backdrop-blur-xl border border-gray-800 rounded-full px-8 py-3 shadow-[0_0_20px_rgba(0,0,0,0.9)] gap-10">
             <a href="#about" className="text-gray-400 font-orbitron font-bold text-xs tracking-[0.2em] hover:text-gone hover:scale-110 hover:[text-shadow:0_0_10px_#00C8FF] transition-all">
                ABOUT
             </a>
             <a href="#events" className="text-gray-400 font-orbitron font-bold text-xs tracking-[0.2em] hover:text-raone hover:scale-110 hover:[text-shadow:0_0_10px_#FF0033] transition-all">
                LEVELS
             </a>
             <a href="#schedule" className="text-gray-400 font-orbitron font-bold text-xs tracking-[0.2em] hover:text-gold hover:scale-110 hover:[text-shadow:0_0_10px_#FFD700] transition-all">
                TIMELINE
             </a>
             <a href="#team" className="text-gray-400 font-orbitron font-bold text-xs tracking-[0.2em] hover:text-white hover:scale-110 hover:[text-shadow:0_0_10px_#FFFFFF] transition-all">
                FACTION
             </a>
          </nav>

          {/* CTA BUTTON (Right) */}
          <div className="pointer-events-auto">
            <a 
               href="#register" 
               className="relative group inline-flex items-center justify-center px-6 md:px-8 py-2 md:py-3 bg-[#050505] border border-raone/80 text-raone font-orbitron font-bold text-xs md:text-sm tracking-widest overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,0,51,0.4)]"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">REGISTER</span>
              <div className="absolute inset-0 w-0 bg-raone group-hover:w-full transition-all duration-300 ease-out z-0"></div>
            </a>
          </div>
       </div>
    </header>
  );
}
