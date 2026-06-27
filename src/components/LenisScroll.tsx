"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import React from "react";

export default function LenisScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom exponential easing
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
      }}
    >
      {children}
    </ReactLenis>
  );
}
