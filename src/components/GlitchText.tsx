export default function GlitchText({ text, className = "", as: Component = "span" }: { text: string, className?: string, as?: any }) {
  return (
    <Component className={`relative inline-block group font-orbitron ${className}`}>
      <span className="absolute top-0 left-[2px] -ml-[2px] text-gone opacity-0 group-hover:opacity-100 mix-blend-screen animate-pulse" aria-hidden="true">{text}</span>
      <span className="absolute top-0 -left-[2px] ml-[2px] text-raone opacity-0 group-hover:opacity-100 mix-blend-screen animate-pulse" aria-hidden="true" style={{ animationDelay: "0.1s" }}>{text}</span>
      <span className="relative z-10 transition-transform duration-75 group-hover:skew-x-[-5deg] group-hover:-translate-x-[2px] inline-block">{text}</span>
    </Component>
  );
}
