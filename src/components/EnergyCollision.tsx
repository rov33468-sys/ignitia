"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function EnergyCollision() {
  const raoneRef = useRef<THREE.Mesh>(null);
  const goneRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (raoneRef.current && goneRef.current && coreRef.current) {
      // Rotation
      raoneRef.current.rotation.x = t * 0.2;
      raoneRef.current.rotation.y = t * 0.3;
      goneRef.current.rotation.x = -t * 0.2;
      goneRef.current.rotation.y = -t * 0.3;
      coreRef.current.rotation.z = t * 0.5;

      // Pulsing effect using scale
      const pulse = Math.sin(t * 2) * 0.1 + 1;
      coreRef.current.scale.set(pulse, pulse, pulse);
      
      // Floating animation
      raoneRef.current.position.x = 2 + Math.sin(t) * 0.5;
      goneRef.current.position.x = -2 - Math.sin(t) * 0.5;
    }
  });

  return (
    <group position={[0, 0, -5]}>
      {/* Ra.One Orb (Red) */}
      <mesh ref={raoneRef} position={[2, 0, 0]}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshStandardMaterial
          color="#FF0033"
          emissive="#FF0033"
          emissiveIntensity={2}
          wireframe
        />
      </mesh>

      {/* G.One Orb (Blue) */}
      <mesh ref={goneRef} position={[-2, 0, 0]}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshStandardMaterial
          color="#00C8FF"
          emissive="#00C8FF"
          emissiveIntensity={2}
          wireframe
        />
      </mesh>

      {/* Central Collision Core */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={5}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Point lights for ambient glow */}
      <pointLight position={[2, 0, 0]} color="#FF0033" intensity={20} distance={10} />
      <pointLight position={[-2, 0, 0]} color="#00C8FF" intensity={20} distance={10} />
      <pointLight position={[0, 0, 0]} color="#ffffff" intensity={50} distance={5} />
    </group>
  );
}
