"use client";

import React, { useState, useEffect } from "react";

export default function BootScreen() {
  const [complete, setComplete] = useState(false);
  const [unmount, setUnmount] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  
  const bootSequence = [
    "[INIT] System Boot Initialized...",
    "[NETWORK] Establishing Secure Connection...",
    "[SECURITY] Bypassing Firewalls [SUCCESS]",
    "[KERNAL] Loading Neural Framework...",
    "[DATA] Syncing Participant Metrics...",
    "[SYSTEM] Accessing IGNITIA Core...",
    "SYSTEM ACCESS GRANTED"
  ];

  useEffect(() => {
    let delay = 0;
    
    // Type out each line sequentially
    bootSequence.forEach((line, i) => {
      delay += Math.random() * 400 + 200; // Speed of each line
      setTimeout(() => {
        setLines(prev => [...prev, line]);
      }, delay);
    });

    // Start fade out process out after last line finishes
    setTimeout(() => {
      setComplete(true);
      // Wait for CSS transition fade out, then completely unmount component from DOM
      setTimeout(() => {
        setUnmount(true);
      }, 1000); 
    }, delay + 1000); 
  }, []);

  if (unmount) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex flex-col justify-end p-8 font-mono transition-all duration-1000 overflow-hidden ${complete ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Subtle screen vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black pointer-events-none"></div>
      
      {/* CRT Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10 pointer-events-none opacity-40"></div>

      {/* Terminal Text lines */}
      <div className="relative z-20 space-y-3 mb-12 max-w-3xl">
        {lines.map((line, i) => {
          const isLast = i === bootSequence.length - 1;
          return (
            <p 
               key={i} 
               className={`text-sm md:text-xl font-bold tracking-widest ${isLast ? 'text-raone animate-pulse text-2xl md:text-3xl mt-12' : 'text-gone opacity-80'}`}
            >
               &gt; {line}
            </p>
          );
        })}
        {/* Blinking cursor block */}
        {!complete && (
          <p className="text-xl font-bold animate-pulse inline-block text-gone mt-2">_</p>
        )}
      </div>
    </div>
  );
}
