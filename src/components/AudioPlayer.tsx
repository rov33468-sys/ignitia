"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.volume = 0.4; 
        
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          }).catch((err) => {
            console.warn("Autoplay policy blocked audio.", err);
          });
        }
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('scroll', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
          }).catch((err) => setIsPlaying(false));
        }
      }
      setHasInteracted(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/bg-music.mp3" loop preload="auto" />
      
      {/* Floating Toggle Network Button */}
      <button 
        onClick={toggleMute}
         className="fixed bottom-6 md:bottom-10 right-6 md:right-10 z-[150] w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-raone hover:shadow-[0_0_15px_rgba(255,0,51,0.5)] transition-all cursor-pointer group pointer-events-auto"
        aria-label="Toggle Background Music"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 group-hover:text-raone transition-colors duration-300" />
        ) : (
          <VolumeX className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-colors duration-300" />
        )}
        
        {/* Neon pulse rings behind the button if actively playing */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full border border-raone animate-ping opacity-30 pointer-events-none"></div>
        )}
      </button>
    </>
  );
}
