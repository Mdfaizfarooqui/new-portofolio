"use client";

import { motion } from "framer-motion";
import Card from "../ui/Card";

const reviews = [
  {
    name: "Yunus Emre Korkmaz",
    role: "Founder, Skynotech",
    quote: "working with this team transformed our entire branding. they brought a level of 3D motion design and frontend performance that is rare to find in today's landscape.",
  },
  {
    name: "Sarah Jenkins",
    role: "VP of Product, Finly",
    quote: "aura's development workflow is incredibly modular and clean. they shipped our next.js SaaS portal weeks ahead of schedule with 98+ lighthouse metrics.",
  },
  {
    name: "Alex Rivera",
    role: "Creative Director, Nexus",
    quote: "the typography hierarchy, micro-animations, and custom WebGL backgrounds they integrated are visually stunning. they truly understand Awwwards-level design.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 relative border-t border-white/5 bg-[#08080c]/50">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Title */}
        <div className="flex flex-col gap-4 text-center items-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-purple-500">
            05 / social proof
          </span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
            what they say
          </h2>
          <p className="text-gray-400 font-light max-w-md leading-relaxed">
            we establish long-term partnerships with tech teams, startups, and creative brands.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <Card className="p-8 h-full flex flex-col justify-between hover:scale-102 transition-transform duration-300">
                <p className="text-xs text-gray-400 leading-relaxed font-light italic mb-8">
                  &ldquo;{rev.quote}&rdquo;
                </p>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] text-purple-400 block mt-1">
                    {rev.role}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
