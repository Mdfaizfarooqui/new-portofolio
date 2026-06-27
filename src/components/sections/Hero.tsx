"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "../ui/Button";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamic import of SplitType to guarantee it runs on the client only
    import("split-type").then(({ default: SplitType }) => {
      if (!titleRef.current) return;
      
      const text = new SplitType(titleRef.current, { types: "chars" });
      const chars = text.chars;

      // Animate characters: slide up and fade in
      gsap.fromTo(
        chars,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.2,
        }
      );

      // Fade in description and buttons
      gsap.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: "power3.out", delay: 0.6 }
      );

      gsap.fromTo(
        actionsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: "power3.out", delay: 0.8 }
      );
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden px-6"
    >
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Floating Glowing Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Small subtitle badge */}
        <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-widest text-purple-400 uppercase mb-6 animate-pulse">
          Awwwards agency of the year
        </span>

        {/* Headline */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-7xl font-bold tracking-tight leading-tight text-white mb-6 uppercase select-none max-w-4xl"
        >
          we shape the <span className="text-purple-500">future</span> of digital space
        </h1>

        {/* Description */}
        <p
          ref={descRef}
          className="text-base md:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed font-light"
        >
          aura is an award-winning creative studio crafting digital experiences, immersive 3D platforms, and high-performance SaaS applications.
        </p>

        {/* CTAs */}
        <div
          ref={actionsRef}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button variant="primary" onClick={() => window.location.href = "#portfolio"}>
            explore works
          </Button>
          <Button variant="secondary" onClick={() => window.location.href = "#contact"}>
            start project
          </Button>
        </div>
      </div>

      {/* Animated Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">
          scroll down
        </span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-purple-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
