import GlitchText from "./GlitchText";

const teamData = [
  {
    section: "CONVENOR",
    members: [
      { name: "Priyanshu", role: "Convenor", initials: "P", tag: "LEGENDARY", tagColor: "text-yellow-500 border-yellow-500/50" }
    ]
  },
  {
    section: "EVENT HEADS",
    members: [
      { name: "Aranya Rath", role: "Event Head", initials: "AR", tag: "EPIC", tagColor: "text-pink-400 border-pink-400/50" },
      { name: "Soumalika Chakraborty", role: "Event Head", initials: "SC", tag: "EPIC", tagColor: "text-pink-400 border-pink-400/50" }
    ]
  },
  {
    section: "CORE TEAM",
    members: [
      { name: "Anamika", role: "Core Team", initials: "A", tag: "RARE", tagColor: "text-orange-400 border-orange-400/50" },
      { name: "Subhamita", role: "Core Team", initials: "S", tag: "RARE", tagColor: "text-orange-400 border-orange-400/50" },
      { name: "Pratistha", role: "Core Team", initials: "P", tag: "RARE", tagColor: "text-orange-400 border-orange-400/50" },
      { name: "Salmoli", role: "Core Team", initials: "S", tag: "RARE", tagColor: "text-orange-400 border-orange-400/50" },
      { name: "Tanisha", role: "Core Team", initials: "T", tag: "RARE", tagColor: "text-orange-400 border-orange-400/50" }
    ]
  },
  {
    section: "DOMAIN LEAD",
    members: [
      { name: "To Be Added", role: "Domain Lead", initials: "?", tag: "TBA", tagColor: "text-gray-400 border-gray-600" }
    ]
  },
  {
    section: "COORDINATOR",
    members: [
      { name: "To Be Added", role: "Coordinator", initials: "?", tag: "TBA", tagColor: "text-gray-400 border-gray-600" }
    ]
  }
];

const SocialIconBox = ({ children }: { children: React.ReactNode }) => (
  <div className="w-10 h-10 rounded-full border border-raone/40 bg-[#150505] flex items-center justify-center text-raone hover:bg-raone hover:text-white hover:shadow-[0_0_15px_rgba(255,0,51,0.6)] cursor-pointer transition-all">
    {children}
  </div>
);

export default function Team() {
  return (
    <section id="team" className="relative w-full py-32 px-4 z-10 flex flex-col items-center justify-center font-rajdhani">
      {/* Main Team Heading */}
      <div className="text-center mb-20 px-4">
        <h2 className="text-4xl md:text-5xl font-orbitron text-white mb-4">
          <GlitchText text="THE ANOMALIES" />
        </h2>
        <p className="text-xl text-gray-400 tracking-widest uppercase">The Core Systems Driving IGNITIA'26</p>
      </div>

      <div className="w-full max-w-7xl flex flex-col space-y-24">
        
        {teamData.map((group, idx) => (
          <div key={idx} className="w-full">
            {/* Section Header */}
            <div className="flex items-center mb-8">
              <h3 className="text-raone font-orbitron text-xl tracking-[0.2em] font-bold uppercase whitespace-nowrap">
                {group.section}
              </h3>
              <div className="ml-4 h-[1px] w-full max-w-[100px] bg-gradient-to-r from-raone to-transparent"></div>
            </div>

            {/* Members Grid */}
            <div className="flex flex-wrap gap-8">
              {group.members.map((member, i) => (
                <div 
                  key={i} 
                  className="relative group w-full sm:w-[320px] bg-[#080303] border border-raone/20 rounded-xl p-8 flex flex-col items-center hover:border-raone/60 hover:shadow-[0_0_20px_rgba(255,0,51,0.15)] transition-all"
                >
                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-raone/40 rounded-tl-sm"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-raone/40 rounded-br-sm"></div>
                  
                  {/* Tag */}
                  <div className={`absolute top-4 right-4 px-3 py-1 border rounded-md text-xs font-bold tracking-widest font-orbitron bg-black/50 ${member.tagColor}`}>
                    {member.tag}
                  </div>

                  {/* Avatar */}
                  <div className="relative mt-4 mb-6 w-28 h-28 rounded-full bg-gradient-to-br from-[#4a0000] to-[#110000] border border-raone/30 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_25px_rgba(255,0,51,0.3)] transition-all">
                    <span className="text-3xl font-orbitron font-bold text-red-200">{member.initials}</span>
                  </div>

                  {/* Info */}
                  <h4 className="text-2xl font-bold font-rajdhani text-white tracking-wide">{member.name}</h4>
                  <p className="text-gray-400 font-rajdhani text-lg mb-8">{member.role}</p>

                  {/* Socials */}
                  <div className="flex space-x-4 mb-6">
                    <SocialIconBox>
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </SocialIconBox>
                    <SocialIconBox>
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </SocialIconBox>
                  </div>

                  {/* Bottom Line Glow */}
                  <div className="absolute bottom-4 left-6 right-12 h-1 bg-gradient-to-r from-raone via-[#ff5500] to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
