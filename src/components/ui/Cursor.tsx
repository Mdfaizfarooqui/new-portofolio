"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const innerX = useSpring(mouseX, { damping: 40, stiffness: 400 });
  const innerY = useSpring(mouseY, { damping: 40, stiffness: 400 });

  useEffect(() => {
    // Hide custom cursor on mobile touch screens
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Scale cursor and add accent ring on buttons, links, toggles
      const isInteractive = 
        target.closest("a") || 
        target.closest("button") || 
        target.closest("input") || 
        target.closest("textarea") ||
        target.closest("[role='button']") ||
        target.classList.contains("interactive");

      if (isInteractive) {
        setIsHovered(true);
        document.body.classList.add("hovering-interactive");
      } else {
        setIsHovered(false);
        document.body.classList.remove("hovering-interactive");
      }

      // Add special cursor text for project card hover
      const projectCard = target.closest("[data-cursor-text]");
      if (projectCard) {
        const text = projectCard.getAttribute("data-cursor-text") || "";
        setCursorText(text);
      } else {
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("hovering-interactive");
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-9999 mix-blend-difference"
        style={{
          x: innerX,
          y: innerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? (cursorText ? 8 : 3) : 1,
        }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center text-[2px] font-bold text-black uppercase tracking-wider select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full pointer-events-none z-9998 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? (cursorText ? 1.5 : 1.4) : 1,
          borderColor: isHovered ? "rgba(168, 85, 247, 0.6)" : "rgba(255, 255, 255, 0.2)",
        }}
        transition={{ type: "tween", duration: 0.2 }}
      />
    </>
  );
}
