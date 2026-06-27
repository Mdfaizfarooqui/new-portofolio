"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "glass";
  className?: string;
  magnetic?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  magnetic = true,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  // Framer Motion Springs for Magnetic Pull
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.6 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Coordinates relative to button center
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    // Limit maximum magnetic pull distance
    mouseX.set(x * 0.35);
    mouseY.set(y * 0.35);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top } = buttonRef.current.getBoundingClientRect();
    
    const x = clientX - left;
    const y = clientY - top;

    const newRipple = { id: Date.now(), x, y };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 800);

    if (props.onClick) {
      (props.onClick as React.MouseEventHandler<HTMLButtonElement>)(e);
    }
  };

  const variantStyles = {
    primary: "bg-white text-black hover:bg-neutral-200 shadow-lg shadow-white/5",
    secondary: "bg-transparent text-white border border-white/20 hover:border-white/50",
    glass: "glass-panel text-white hover:bg-white/10 hover:border-white/20",
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        x: springX,
        y: springY,
      }}
      className={`relative overflow-hidden px-6 py-3 rounded-lg text-sm font-semibold tracking-wide uppercase transition-colors duration-300 cursor-none select-none flex items-center justify-center gap-2 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>

      {/* Ripple Animation Circle */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 80,
            height: 80,
            animationDuration: "800ms",
          }}
        />
      ))}
    </motion.button>
  );
}
