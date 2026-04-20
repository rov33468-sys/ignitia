"use client";

import { useEffect, useState } from "react";
import GlitchText from "./GlitchText";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Target date: Aug 1 2026
    const targetDate = new Date("2026-08-01T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("00:00:00");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}D ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center pointer-events-none">
      <div className="z-10 flex flex-col items-center text-center space-y-6">
        <h2 className="text-xl md:text-2xl font-rajdhani tracking-widest text-gone uppercase">Can You Beat the System?</h2>
        
        <GlitchText as="h1" text="IGNITIA'26" className="text-6xl md:text-8xl font-bold tracking-tighter drop-shadow-[0_0_20px_rgba(255,0,51,0.5)]" />
        
        <p className="text-lg md:text-xl font-rajdhani max-w-2xl text-gray-300">
          Where Innovation Fights Back. A multi-domain tech fest where the brightest minds of India enter the arena, face impossible challenges, and emerge as champions.
        </p>

        {/* HUD Countdown */}
        <div className="mt-8 px-6 py-3 border border-gone/50 bg-black/40 backdrop-blur-sm pointer-events-auto shadow-[0_0_15px_rgba(0,200,255,0.2)]">
          <p className="text-sm text-gone font-orbitron tracking-widest mb-1 text-center font-bold">SYSTEM BOOT IN</p>
          <p className="text-2xl md:text-4xl font-rajdhani font-bold tracking-widest text-white">{timeLeft}</p>
        </div>

        <button className="mt-8 px-8 py-4 pointer-events-auto group relative overflow-hidden bg-transparent font-orbitron font-bold tracking-wider text-white border border-raone transition-all hover:bg-raone hover:shadow-[0_0_30px_rgba(255,0,51,0.6)]">
          <span className="relative z-10">ENTER THE ARENA</span>
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 skew-x-[-20deg] group-hover:animate-shine"></div>
        </button>
      </div>
    </section>
  );
}
