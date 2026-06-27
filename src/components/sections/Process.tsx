"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../ui/Card";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "discovery & blueprinting",
    desc: "defining target scopes, technical architectures, color guidelines, and token foundations before touching code.",
  },
  {
    num: "02",
    title: "visual design & storyboards",
    desc: "crafting sleek wireframes, Figma variables, variable fonts, and high-fidelity motion layouts in collaboration.",
  },
  {
    num: "03",
    title: "interactive prototyping",
    desc: "building WebGL assets, custom shader particles, smooth scroll Lenis contexts, and magnetic button physics.",
  },
  {
    num: "04",
    title: "core engineering & clean code",
    desc: "structuring Next.js 15 routing, typescript definitions, Zod validation models, and WCAG AA accessibility tests.",
  },
  {
    num: "05",
    title: "deployment & lighthouse audit",
    desc: "verifying edge speeds on Vercel and running automated performance audits targeting Lighthouse scores >95.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollSectionRef.current) return;

    // Calculate translation amount
    const scrollWidth = scrollSectionRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const xTranslation = -(scrollWidth - viewportWidth + 64); // Include padding offset

    // GSAP ScrollTrigger Horizontal scroll
    const pin = gsap.to(scrollSectionRef.current, {
      x: xTranslation,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      pin.scrollTrigger?.kill();
      pin.kill();
    };
  }, []);

  return (
    <div ref={containerRef} id="process" className="relative bg-[#07070a] overflow-hidden">
      <div className="h-screen flex flex-col justify-center px-6">
        <div className="max-w-7xl mx-auto w-full mb-12 flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-purple-500">
            04 / workflow
          </span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
            our process
          </h2>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollSectionRef} 
          className="flex gap-8 pl-12 pr-24 w-max items-center"
        >
          {steps.map((step) => (
            <div 
              key={step.num} 
              className="w-[300px] md:w-[380px] shrink-0"
            >
              <Card className="p-8 min-h-[250px] flex flex-col justify-between select-none">
                <span className="text-4xl font-extrabold text-purple-500/20 block mb-4">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
