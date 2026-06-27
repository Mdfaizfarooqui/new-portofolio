"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";

const socialLinks = [
  { label: "linkedin", href: "#" },
  { label: "twitter", href: "#" },
  { label: "github", href: "#" },
  { label: "awwwards", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;

    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="py-16 px-6 relative border-t border-white/5 bg-[#07070a] overflow-hidden">
      {/* Visual Accent glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Logo & Manifesto */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <span className="text-xl font-bold tracking-tight text-white uppercase">
            AURA<span className="text-purple-500">.</span>
          </span>
          <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
            an award-winning digital creative studio crafting responsive, high-performance interfaces and immersive 3D platforms for startups and global products.
          </p>
        </div>

        {/* Newsletter Box */}
        <div className="flex flex-col gap-6">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            newsletter
          </span>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <div className="flex gap-2">
              <input
                type="email"
                required
                placeholder="e.g. info@skynotech.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs text-white outline-none focus:border-purple-500 transition-all cursor-none"
              />
              <Button type="submit" variant="primary" className="py-2 px-4 text-xs cursor-none">
                join
              </Button>
            </div>
            {subscribed && (
              <span className="text-[9px] text-green-400 font-bold uppercase tracking-wider">
                subscribed successfully!
              </span>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-6">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            connect with us
          </span>
          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-xs text-gray-400 hover:text-white flex items-center gap-1 uppercase transition-colors cursor-none"
              >
                {social.label} <ArrowUpRight className="w-3 h-3 text-purple-400" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyrights */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center border-t border-white/5 pt-8 gap-4">
        <p className="text-[10px] text-gray-500">
          &copy; {new Date().getFullYear()} AURA DIGITAL STUDIO. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-[10px] text-gray-500 hover:text-white uppercase tracking-wider cursor-none">
            privacy policy
          </a>
          <a href="#" className="text-[10px] text-gray-500 hover:text-white uppercase tracking-wider cursor-none">
            terms of service
          </a>
        </div>
      </div>
    </footer>
  );
}
