"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

const navLinks = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "services", href: "#services" },
  { label: "portfolio", href: "#portfolio" },
  { label: "process", href: "#process" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-[#07070a]/70 backdrop-blur-md border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-white cursor-none uppercase"
          >
            AURA<span className="text-purple-500">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-wider text-gray-300 hover:text-white uppercase transition-colors cursor-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="glass" onClick={() => window.location.href = "#contact"} className="py-2.5 px-5 text-xs">
              get in touch
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-white cursor-none"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#07070a] z-50 flex flex-col p-6 justify-between"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold tracking-tight text-white">AURA.</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white cursor-none"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 items-center my-auto">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold tracking-wide text-gray-300 hover:text-white uppercase cursor-none"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex flex-col gap-4 text-center">
              <p className="text-xs text-gray-500">AURA DIGITAL AGENCY &copy; 2026</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
