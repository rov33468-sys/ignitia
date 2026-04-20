import HoloPanel from "./HoloPanel";
import GlitchText from "./GlitchText";

export default function About() {
  const stats = [
    { label: "PLAYERS", value: "5000+" },
    { label: "LEVELS", value: "30+" },
    { label: "PRIZE POOL", value: "₹5 Lakhs+" },
  ];

  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 md:px-10 z-10 font-rajdhani">
      <HoloPanel className="max-w-4xl w-full flex flex-col md:flex-row gap-10 items-center justify-between">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-orbitron text-white">
            <GlitchText text="ABOUT THE" /> <br/> <span className="text-gone">BATTLEGROUND</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            IGNITIA&apos;26 is not just a fest; it is a simulation. A relentless battle between human ingenuity (G.One) and rogue AI limitations (Ra.One). Prepare to enter the grid, align your neural pathways, and compete across multiple domains. Only those with the strongest source code survive.
          </p>
        </div>
        
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {stats.map((stat, i) => (
            <div key={i} className="border border-raone/30 bg-black/50 p-6 flex flex-col items-center justify-center shadow-[0_0_10px_rgba(255,0,51,0.1)] hover:shadow-[0_0_20px_rgba(0,200,255,0.3)] hover:border-gone transition-all">
              <span className="text-4xl font-orbitron font-bold text-white mb-2">{stat.value}</span>
              <span className="text-sm font-rajdhani tracking-widest text-gone uppercase">{stat.label}</span>
            </div>
          ))}
        </div>
      </HoloPanel>
    </section>
  );
}
