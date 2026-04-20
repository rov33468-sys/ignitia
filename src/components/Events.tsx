"use client";

import React, { useState, useEffect } from "react";
import GlitchText from "./GlitchText";
import { Cpu, Code, Brain, Gamepad2, CircleHelp, Users, Trophy, X, ChevronRight } from "lucide-react";

type EventType = {
  day: string;
  title: string;
  desc: string;
  details: string[];
  prize: string;
  Icon: any;
  color: string;
  text: string;
  shadow: string;
};

const events: EventType[] = [
  { 
    day: "DAY 1", 
    title: "Hackathon", 
    desc: "Build innovative software from scratch in 10 intense hours.", 
    details: [
      "Round 1: Ideation & Architecture Layout",
      "Round 2: Rapid MVP Prototyping",
      "Round 3: Final Pitch to Judges",
      "Format: Physical / Offline",
      "Team Size: 2 to 4 Players"
    ],
    prize: "₹35,000", 
    Icon: Cpu, 
    color: "border-raone", 
    text: "text-raone",
    shadow: "hover:shadow-[0_0_25px_#FF0033]"
  },
  { 
    day: "DAY 2", 
    title: "Blind Coding", 
    desc: "Code without screen visibility. Pure logic and memory.", 
    details: [
      "Monitors will be completely turned off.",
      "Time Limit: 15 Minutes per code block",
      "Allowed Languages: C, C++, Java, Python",
      "Format: Solo Players Only"
    ],
    prize: "₹15,000", 
    Icon: Code, 
    color: "border-gone", 
    text: "text-gone",
    shadow: "hover:shadow-[0_0_25px_#00C8FF]"
  },
  { 
    day: "DAY 1", 
    title: "Quiz", 
    desc: "Test your knowledge across tech, science, pop culture.", 
    details: [
      "Phase 1: Written MCQ Preliminary",
      "Phase 2: Rapid Fire Stage",
      "Topics: Tech, Cyber-Security, Marvel, Space",
      "Team Size: 2 Players"
    ],
    prize: "₹15,000", 
    Icon: Brain, 
    color: "border-gold", 
    text: "text-gold",
    shadow: "hover:shadow-[0_0_25px_#FFD700]"
  },
  { 
    day: "DAY 2", 
    title: "Gaming Tournament", 
    desc: "Compete in intense esports battles. Valorant, BGMI & more.", 
    details: [
      "Games: Valorant (PC), BGMI (Mobile), FIFA (Console)",
      "Strict Anti-Cheat algorithms enforced.",
      "Bring your own peripherals (Optional).",
      "Team Size: Varies per game."
    ],
    prize: "₹30,000", 
    Icon: Gamepad2, 
    color: "border-gone", 
    text: "text-gone",
    shadow: "hover:shadow-[0_0_25px_#00C8FF]"
  },
  { 
    day: "DAY 2", 
    title: "Guess Who", 
    desc: "A mystery event full of surprises. Can you decode the clues?", 
    details: [
      "Solve cryptographic puzzles scattered around campus.",
      "Time-attack mode tracking your speed.",
      "Surprise physical challenges included.",
      "Team Size: 1 to 3 Players"
    ],
    prize: "₹10,000", 
    Icon: CircleHelp, 
    color: "border-gold", 
    text: "text-gold",
    shadow: "hover:shadow-[0_0_25px_#FFD700]"
  },
  { 
    day: "DAY 1", 
    title: "Debates", 
    desc: "Argue for or against trending tech topics under timed pressure.", 
    details: [
      "Oxford-style structured debate format.",
      "Topics given 15 minutes prior to crossfire.",
      "Focus: AI, Ethics, Cyber Warfare, Web3",
      "Format: Solo or Duo"
    ],
    prize: "₹15,000", 
    Icon: Users, 
    color: "border-raone", 
    text: "text-raone",
    shadow: "hover:shadow-[0_0_25px_#FF0033]"
  },
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedEvent]);

  return (
    <section id="events" className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 z-10 font-rajdhani overflow-hidden perspective-[2000px]">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-orbitron text-white mb-4">
          <GlitchText text="FEATURED EVENTS" />
        </h2>
        <p className="text-xl text-gray-400 tracking-widest uppercase">Select Your Level</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl px-4">
        {events.map((event, i) => (
          <div 
            key={i}
            onClick={() => setSelectedEvent(event)}
            className={`relative group w-full md:w-[380px] bg-black/60 backdrop-blur-md border border-gray-800 hover:${event.color} p-6 flex flex-col justify-between cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:rotate-y-6 ${event.shadow}`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Top row: Icon and Day Tag */}
            <div className="flex justify-between items-start mb-6 w-full">
               <div className={`p-3 bg-gray-900 border border-gray-800 group-hover:${event.color} transition-colors rounded-sm`}>
                 <event.Icon className={`w-8 h-8 text-gray-400 group-hover:${event.text} transition-colors`} />
               </div>
               
               <div className={`px-3 py-1 bg-gray-900 border border-gray-800 group-hover:${event.color} transition-colors text-xs font-orbitron tracking-wider text-gray-300 group-hover:${event.text}`}>
                 {event.day}
               </div>
            </div>

            {/* Content Mid */}
            <div className="flex-1 w-full text-left">
              <h3 className={`text-2xl font-orbitron font-bold text-white mb-3 group-hover:${event.text} transition-colors`}>
                {event.title}
              </h3>
              <p className="text-gray-400 font-rajdhani leading-relaxed text-[15px]">
                {event.desc}
              </p>
            </div>

            {/* Bottom Row: Prize & Learn More */}
            <div className="mt-8 pt-4 border-t border-gray-800 group-hover:border-gray-700 flex justify-between items-center w-full transition-colors">
               <div className={`flex items-center gap-2 font-orbitron font-bold text-lg ${event.text} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <Trophy className="w-5 h-5" />
                  <span>{event.prize}</span>
               </div>
               
               <span className={`text-gray-400 text-sm font-rajdhani uppercase tracking-wider group-hover:${event.text} transition-colors flex items-center gap-1`}>
                 Learn More <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
               </span>
            </div>

            {/* Decorative Corner Accents */}
            <div className={`absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-transparent group-hover:${event.color} transition-colors duration-300`}></div>
            <div className={`absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-transparent group-hover:${event.color} transition-colors duration-300`}></div>
          </div>
        ))}
      </div>

      {/* HOLOGRAPHIC EVENT MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          
          {/* Blur Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-xl animate-fade-in"
            onClick={() => setSelectedEvent(null)}
          ></div>
          
          {/* Modal Container */}
          <div className={`relative w-full max-w-2xl bg-[#050505] border ${selectedEvent.color} shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col animate-slide-up overflow-hidden`}>
            
            {/* Top Bar */}
            <div className={`flex justify-between items-center p-4 border-b border-gray-800 bg-gray-900/30`}>
              <div className={`flex items-center gap-3 ${selectedEvent.text}`}>
                <selectedEvent.Icon className="w-6 h-6" />
                <span className="font-orbitron font-bold tracking-widest text-sm uppercase">SYSTEM LOG // {selectedEvent.day}</span>
              </div>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Body */}
            <div className="p-8">
              <h2 className={`text-4xl md:text-5xl font-orbitron font-bold text-white mb-2 ${selectedEvent.text} drop-shadow-[0_0_15px_currentColor]`}>
                {selectedEvent.title}
              </h2>
              <div className="flex items-center gap-3 mb-8">
                <span className={`px-3 py-1 bg-gray-900 border ${selectedEvent.color} text-xs font-orbitron tracking-wider ${selectedEvent.text}`}>
                  PRIZE POOL: {selectedEvent.prize}
                </span>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-orbitron text-gray-400 tracking-widest uppercase text-sm mb-4">Mission Parameters:</h4>
                <ul className="space-y-3">
                  {selectedEvent.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <ChevronRight className={`w-5 h-5 shrink-0 ${selectedEvent.text}`} />
                      <span className="leading-relaxed text-lg">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Register CTA */}
            <div className="p-6 bg-gray-900/50 border-t border-gray-800 flex justify-end">
               <a 
                 href="#register" 
                 onClick={() => setSelectedEvent(null)}
                 className={`relative group inline-flex items-center justify-center px-8 py-3 bg-[#050505] border ${selectedEvent.color} ${selectedEvent.text} font-orbitron font-bold tracking-widest overflow-hidden transition-all`}
               >
                 <span className="relative z-10 group-hover:text-black transition-colors">INITIATE DEPLOYMENT [REGISTER]</span>
                 <div className={`absolute inset-0 w-0 group-hover:w-full transition-all duration-300 ease-out z-0 bg-current`}></div>
               </a>
            </div>

            {/* Glowing Edge Overlays */}
            <div className={`absolute top-0 left-0 w-full h-[1px] shadow-[0_0_10px_currentColor] ${selectedEvent.text}`}></div>
            <div className={`absolute bottom-0 left-0 w-full h-[1px] shadow-[0_0_10px_currentColor] ${selectedEvent.text}`}></div>
          </div>
        </div>
      )}
    </section>
  );
}
