import GlitchText from "./GlitchText";
import TiltWrapper from "./TiltWrapper";

const sponsorCategories = [
  {
    category: "TITLE SPONSOR",
    sponsors: ["TechCorp", "InnovateLabs"],
    cols: "grid-cols-1 sm:grid-cols-2",
    boxClass: "px-8 py-5 text-xl font-bold font-orbitron"
  },
  {
    category: "GOLD SPONSORS",
    sponsors: ["CloudBase", "DevStack", "PixelForge", "DataFlow"],
    cols: "grid-cols-2 sm:grid-cols-4",
    boxClass: "px-6 py-4 text-lg font-orbitron font-semibold"
  },
  {
    category: "COMMUNITY PARTNERS",
    sponsors: ["GDG Kolkata", "MLH", "Dev Community", "Hack Club", "CodeChef", "IEEE UEM"],
    cols: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
    boxClass: "px-4 py-3 text-sm font-orbitron text-gray-300"
  }
];

export default function Sponsors() {
  return (
    <section className="relative w-full py-32 px-4 z-10 flex flex-col items-center justify-center font-rajdhani overflow-hidden text-center">
      
      {/* Optional Top Marquee Ghost Layer */}
      <div className="absolute top-10 left-0 w-full overflow-hidden opacity-20 pointer-events-none select-none flex space-x-12 whitespace-nowrap">
         {/* Simple repeating row for background effect */}
         <div className="flex space-x-12 animate-[spin_40s_linear_infinite] [animation-direction:reverse]"> 
             {sponsorCategories[2].sponsors.map((sp, i) => (
                <div key={i} className="border border-gray-800 rounded-lg px-6 py-2 text-gray-500 font-orbitron">{sp}</div>
             ))}
             {sponsorCategories[1].sponsors.map((sp, i) => (
                <div key={i+10} className="border border-gray-800 rounded-lg px-6 py-2 text-gray-500 font-orbitron">{sp}</div>
             ))}
         </div>
      </div>

      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-orbitron text-white font-bold">
          Sponsors & <span className="text-raone">Partners</span>
        </h2>
      </div>

      <div className="flex flex-col items-center w-full max-w-5xl space-y-16">
        {sponsorCategories.map((group, index) => (
          <div key={index} className="w-full flex flex-col items-center">
            <h3 className="text-gray-400 font-rajdhani tracking-[0.2em] text-sm uppercase mb-6">
              {group.category}
            </h3>
            
            <div className={`grid gap-4 w-full ${group.cols} justify-items-center`}>
              {group.sponsors.map((sponsor, i) => (
                <TiltWrapper 
                  key={i} 
                  className={`w-full flex items-center justify-center border border-gray-800 bg-[#050505] rounded-xl hover:border-raone hover:shadow-[0_0_15px_rgba(255,0,51,0.2)] hover:bg-[#111] transition-all cursor-pointer ${group.boxClass}`}
                >
                  <span className="text-gray-200 group-hover:text-white transition-colors">{sponsor}</span>
                </TiltWrapper>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
