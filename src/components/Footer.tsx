import { MapPin } from "lucide-react";
import GlitchText from "./GlitchText";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-raone/30 bg-black/80 backdrop-blur-md pt-16 pb-8 px-4 z-10 font-rajdhani mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-orbitron text-raone">
            IGNITIA<span className="text-white">&apos;26</span>
          </h2>
          <p className="text-gray-400 max-w-sm">
            Organized by the IEM-UEM Group. The battle between innovation and limits. Choose your side.
          </p>
          <div className="flex items-center space-x-2 text-gray-300">
             <MapPin className="w-5 h-5 text-gone" />
             <span>UEM Kolkata, New Town, Kolkata – 700160</span>
          </div>
        </div>

        <div className="flex flex-col space-y-4 md:items-end">
          <p className="font-orbitron tracking-widest text-gone text-sm font-bold">ESTABLISH CONNECTION</p>
          <div className="flex space-x-4">
            <a href="#" className="p-3 border border-gray-800 hover:border-gone hover:text-gone hover:shadow-[0_0_15px_rgba(0,200,255,0.4)] transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="p-3 border border-gray-800 hover:border-gone hover:text-gone hover:shadow-[0_0_15px_rgba(0,200,255,0.4)] transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="p-3 border border-gray-800 hover:border-gone hover:text-gone hover:shadow-[0_0_15px_rgba(0,200,255,0.4)] transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm tracking-widest">
        <p>&copy; 2026 IGNITIA | IEM-UEM GROUP</p>
        <p className="mt-4 md:mt-0 font-orbitron flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-raone animate-pulse"></span>
           TRANSMISSION ENDS.
        </p>
      </div>
    </footer>
  );
}
