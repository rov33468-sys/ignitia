"use client";

import { Canvas } from "@react-three/fiber";
import { Effects, OrbitControls } from "@react-three/drei";
import NeuralNetwork from "./NeuralNetwork";
import EnergyCollision from "./EnergyCollision";

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.2} />
        
        <NeuralNetwork />
        <EnergyCollision />

        {/* Global post-processing effects could be added here if needed, 
            but for performance we stick to additive blending and emissive materials */}
      </Canvas>
    </div>
  );
}
