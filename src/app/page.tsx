"use client";

import Cursor from "@/components/Cursor";
import Scene from "@/components/Scene";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Schedule from "@/components/Schedule";
import Prizes from "@/components/Prizes";
import Registration from "@/components/Registration";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BootScreen from "@/components/BootScreen";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col w-full text-white">
      <AudioPlayer />
      <BootScreen />
      <Cursor />
      <Header />
      <Scene />
      
      <Hero />
      <About />
      <Events />
      <Schedule />
      <Prizes />
      <Registration />
      <Sponsors />
      <Team />
      <Footer />
    </main>
  );
}
