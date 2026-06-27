"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random points in a spherical shell distribution
  const [positions] = useState(() => {
    const count = 1200;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 3 + Math.random() * 4; // Radial thickness

      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  });

  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    
    // Slow rotational drift
    ref.current.rotation.y = time * 0.02;
    ref.current.rotation.x = Math.sin(time * 0.01) * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#c084fc"
        size={0.035}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function FloatingCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Floating oscillation and rotation
    meshRef.current.rotation.x = time * 0.05;
    meshRef.current.rotation.y = time * 0.08;
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial 
        color="#7c3aed" 
        wireframe 
        transparent 
        opacity={0.06}
      />
    </mesh>
  );
}

export default function ThreeCanvasComponent() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <FloatingCore />
      </Canvas>
      {/* Dynamic CSS Backdrop Glow Grid */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#07070a]/90 to-[#07070a]" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-900/5 rounded-full blur-[140px] pointer-events-none" />
    </div>
  );
}
