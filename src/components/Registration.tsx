import GlitchText from "./GlitchText";
import HoloPanel from "./HoloPanel";
import { Copy, Users, Shield, Crosshair } from "lucide-react";

export default function Registration() {
  return (
    <section id="register" className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 z-10 font-rajdhani">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-orbitron text-white mb-2">
          <GlitchText text="PLAYER SETUP" />
        </h2>
        <p className="text-xl text-gone tracking-widest uppercase">Create Your Avatar</p>
      </div>

      <HoloPanel className="w-full max-w-5xl flex flex-col lg:flex-row gap-10">
        
        {/* Avatar Display / Class Selection */}
        <div className="flex-1 flex flex-col items-center justify-center border-r border-gray-800 lg:pr-10">
          <div className="relative w-48 h-64 md:w-64 md:h-80 border-2 border-gone mb-8 flex items-center justify-center bg-gradient-to-t from-gone/20 to-transparent">
             {/* Placeholder for 3D model or holographic grid */}
             <div className="w-full h-full bg-[linear-gradient(rgba(0,200,255,0.1)_1px,_transparent_1px),linear-gradient(90deg,rgba(0,200,255,0.1)_1px,_transparent_1px)] bg-[size:20px_20px] absolute inset-0"></div>
             <Crosshair className="w-20 h-20 text-gone opacity-50 absolute animate-spin-slow" />
             <div className="absolute bottom-4 font-orbitron text-white text-xl tracking-widest text-center shadow-[0_0_10px_#000]">AVATAR_01</div>
          </div>

          <div className="w-full flex justify-between gap-4">
             <button className="flex-1 py-3 border border-gone text-gone font-orbitron font-bold hover:bg-gone hover:text-black transition-colors">HACKER</button>
             <button className="flex-1 py-3 border border-raone text-raone font-orbitron font-bold hover:bg-raone hover:text-black transition-colors">FIGHTER</button>
             <button className="flex-1 py-3 border border-gold text-gold font-orbitron font-bold hover:bg-gold hover:text-black transition-colors">STRATEGIST</button>
          </div>
        </div>

        {/* Input Form */}
        <div className="flex-1 flex flex-col space-y-6">
          <div>
            <label className="block text-gone font-orbitron tracking-widest text-sm mb-2">PLAYER ALIAS (NAME)</label>
            <input type="text" className="w-full bg-black/50 border-b-2 border-gray-700 outline-none p-3 text-white font-rajdhani text-xl focus:border-gone transition-colors focus:shadow-[0_4px_15px_-3px_rgba(0,200,255,0.4)]" placeholder="Enter your display name" />
          </div>
          
          <div>
            <label className="block text-gone font-orbitron tracking-widest text-sm mb-2">NETWORK ADDRESS (EMAIL)</label>
            <input type="email" className="w-full bg-black/50 border-b-2 border-gray-700 outline-none p-3 text-white font-rajdhani text-xl focus:border-gone transition-colors focus:shadow-[0_4px_15px_-3px_rgba(0,200,255,0.4)]" placeholder="comm@link.sys" />
          </div>

          <div>
            <label className="block text-gone font-orbitron tracking-widest text-sm mb-2">SELECT DOMAIN (LEVEL)</label>
            <select className="w-full bg-black/50 border-b-2 border-gray-700 outline-none p-3 text-white font-rajdhani text-xl focus:border-gone appearance-none cursor-pointer">
              <option value="software">SOFTWARE / IT</option>
              <option value="robotics">ROBOTICS</option>
              <option value="management">MANAGEMENT</option>
              <option value="esports">ESPORTS</option>
              <option value="cultural">CULTURAL</option>
            </select>
          </div>

          <div className="pt-6">
            <button className="w-full py-4 bg-raone/10 border-2 border-raone text-raone font-orbitron font-bold tracking-widest text-xl hover:bg-raone hover:text-white transition-all hover:shadow-[0_0_30px_rgba(255,0,51,0.6)]">
              INITIALIZE CONNECTION // SUBMIT
            </button>
          </div>
        </div>

      </HoloPanel>
    </section>
  );
}
