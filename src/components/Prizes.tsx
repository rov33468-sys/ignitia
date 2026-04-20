"use client";

import { useEffect, useState } from "react";
import GlitchText from "./GlitchText";
import HoloPanel from "./HoloPanel";

export default function Prizes() {
  const [chestOpen, setChestOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("prize-trigger");
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) {
          setChestOpen(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="prize-trigger" className="relative w-full min-h-screen flex flex-col justify-center items-center py-20 px-4 z-10 overflow-hidden">
      
      {/* Background glow when chest is open */}
      <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(255,215,0,0.15)] via-black to-black transition-opacity duration-1000 ${chestOpen ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-orbitron text-white mb-2">
          <GlitchText text="THE TREASURE" />
        </h2>
        <p className="text-xl text-gold tracking-widest uppercase">Rewards for the Victors</p>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Abstract Holographic Podium */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
          
          {/* Base */}
          <div className="absolute bottom-0 w-3/4 h-8 bg-black border-2 border-gold transform perspective-[500px] rotate-x-[60deg] shadow-[0_0_30px_#FFD700]"></div>
          
          {/* Hologram Box / Chest */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 group cursor-pointer" onClick={() => setChestOpen(true)}>
            <div className={`absolute inset-0 border-2 border-gold transition-all duration-700 ease-out transform ${chestOpen ? 'scale-110 opacity-0' : 'scale-100 opacity-100 animate-pulse'} bg-black/60 flex items-center justify-center`}>
              <span className="font-orbitron text-gold font-bold text-xl tracking-widest text-center">CLICK<br/>TO UNLOCK</span>
            </div>
            
            {/* Reveal Content */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 delay-300 ${chestOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50'}`}>
              <div className="text-5xl md:text-7xl font-bold font-orbitron text-white drop-shadow-[0_0_20px_#FFD700]">₹500K</div>
              <div className="text-2xl font-rajdhani text-gold mt-2 tracking-widest">+ POOL</div>
            </div>

            {/* Glowing Particles (CSS pseudo-particles) */}
            {chestOpen && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="w-full h-full bg-[radial-gradient(circle,_rgba(255,215,0,0.8)_0%,_transparent_60%)] animate-ping opacity-50 mix-blend-screen mix-blend-mode"></div>
              </div>
            )}
          </div>
        </div>

        {/* Info panel */}
        <HoloPanel className="mt-16 max-w-2xl text-center border-gold/50 !shadow-[0_0_15px_rgba(255,215,0,0.15)]">
          <p className="text-xl text-gray-300 font-rajdhani">
            Beyond cash prizes, champions unlock exclusive internships, premium gaming gear, and direct entry into elite tech networks.
          </p>
        </HoloPanel>
      </div>

    </section>
  );
}
