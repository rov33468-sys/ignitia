import GlitchText from "./GlitchText";
import TiltWrapper from "./TiltWrapper";

const scheduleData = [
  { day: "DAY 01", date: "AUG 15, 2026", title: "SYSTEM BOOT", desc: "Opening Ceremony & Level 1 Prelims", color: "bg-gone", shadow: "shadow-[0_0_20px_#00C8FF]" },
  { day: "DAY 02", date: "AUG 16, 2026", title: "NEURAL ENGAGEMENT", desc: "Main Events & Workshops", color: "bg-raone", shadow: "shadow-[0_0_20px_#FF0033]" },
  { day: "DAY 03", date: "AUG 17, 2026", title: "THE FINAL CLASH", desc: "Finals, Prize Distribution & Closing Network", color: "bg-gold", shadow: "shadow-[0_0_20px_#FFD700]" },
];

export default function Schedule() {
  return (
    <section id="schedule" className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4 z-10 font-rajdhani">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-orbitron text-white mb-2">
          <GlitchText text="MISSION BRIEFING" />
        </h2>
        <p className="text-xl text-gone tracking-widest">SCHEDULE TIMELINE</p>
      </div>

      <div className="relative w-full max-w-3xl">
        {/* Central glowing line */}
        <div className="absolute top-0 left-6 md:left-1/2 w-[2px] h-full bg-gray-800 -translate-x-1/2">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-gone via-raone to-gold animate-pulse shadow-[0_0_10px_#FFF]"></div>
        </div>

        <div className="space-y-16">
          {scheduleData.map((item, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Node */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 flex items-center justify-center z-10 bg-black">
                <div className={`w-3 h-3 rounded-full ${item.color} ${item.shadow} animate-pulse`}></div>
              </div>

              {/* Content Panel */}
              <div className="ml-16 md:ml-0 md:w-1/2 p-4">
                <TiltWrapper className={`relative p-6 bg-black/60 backdrop-blur-md border border-gray-800 hover:border-gray-500 transition-colors ${i % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                  {/* Decorative corner */}
                  <div className={`absolute top-0 ${i % 2 === 0 ? 'left-0' : 'right-0'} w-2 h-2 ${item.color}`}></div>
                  
                  <span className={`text-sm font-bold font-orbitron tracking-widest ${item.color.replace('bg-', 'text-')}`}>{item.day} // {item.date}</span>
                  <h3 className="text-2xl font-orbitron text-white mt-2 mb-3 uppercase">{item.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                </TiltWrapper>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
