"use client";

import { motion } from "framer-motion";
import Card from "../ui/Card";

const stats = [
  { value: "150+", label: "projects shipped" },
  { value: "14+", label: "global design awards" },
  { value: "5+", label: "years average retention" },
  { value: "99%", label: "client satisfaction" },
];

const timeline = [
  { year: "2024", title: "Awwwards Studio of the Year", desc: "Recognized for pushing the boundaries of web motion design and WebGL." },
  { year: "2022", title: "Venture Capital Seed Launch", desc: "Secured seed round to bootstrap immersive 3D ecommerce solutions." },
  { year: "2021", title: "Founded in Istanbul", desc: "Created with the philosophy of making complex code simple and meaningful." },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Text & Stats */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-500">
              01 / who we are
            </span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
              we design experiences that leave a mark
            </h2>
            <p className="text-gray-400 font-light leading-relaxed max-w-xl">
              at aura, we bridge the gap between technical engineering excellence and aesthetic visual quality. we believe that software should not just function; it should tell a story, engage the senses, and respond organically to input.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:scale-102">
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Timeline */}
        <div className="flex flex-col gap-8 bg-white/2 rounded-xl p-8 border border-white/5 backdrop-blur-sm">
          <span className="text-[10px] font-bold uppercase tracking-widest text-purple-500">
            our timeline
          </span>
          
          <div className="relative border-l border-white/10 pl-6 flex flex-col gap-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
                
                <span className="text-xs font-bold text-purple-400 block mb-1">
                  {item.year}
                </span>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
