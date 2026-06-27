"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function Card({
  children,
  className = "",
  glowColor = "rgba(168, 85, 247, 0.15)", // Default purple glow
  ...props
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top } = cardRef.current.getBoundingClientRect();
    
    // Position relative to card top-left
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  // Generate CSS Radial Gradient based on motion values
  const background = useMotionTemplate`
    radial-gradient(
      250px circle at ${mouseX}px ${mouseY}px,
      ${glowColor},
      transparent 80%
    )
  `;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative glass-panel rounded-xl overflow-hidden p-6 transition-all duration-500 hover:border-purple-500/30 group ${className}`}
      {...props}
    >
      {/* Light glow overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
