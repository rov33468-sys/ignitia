import { ReactNode } from "react";

export default function HoloPanel({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <div className={`relative p-6 bg-black/40 backdrop-blur-md border border-gone/30 shadow-[0_0_15px_rgba(0,200,255,0.15)] overflow-hidden ${className}`}>
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gone to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-raone to-transparent opacity-50"></div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gone"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gone"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-raone"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-raone"></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
