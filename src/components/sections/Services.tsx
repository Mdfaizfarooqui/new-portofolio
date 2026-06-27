"use client";

import { motion } from "framer-motion";
import { Laptop, Compass, Database, Smartphone } from "lucide-react";
import Card from "../ui/Card";

const services = [
  {
    icon: Compass,
    title: "product design (ui/ux)",
    desc: "high-fidelity prototypes, customer journey mapping, visual assets, and dynamic typography systems configured in figma.",
  },
  {
    icon: Laptop,
    title: "immersive frontend",
    desc: "modern, responsive interface development using react 19, next.js 15, gsap, webgl, and custom framer-motion layers.",
  },
  {
    icon: Smartphone,
    title: "mobile development",
    desc: "cross-platform mobile apps built with react native and flutter, targeting low-latency transitions and high accessibility.",
  },
  {
    icon: Database,
    title: "backend & system logic",
    desc: "secure APIs, otp verification workflows, postgres database indexing, and custom node.js/express web servers.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative border-t border-white/5 bg-[#08080c]/50">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Title */}
        <div className="flex flex-col gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-purple-500">
            02 / services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
            capabilities engineered to scale
          </h2>
          <p className="text-gray-400 font-light max-w-lg leading-relaxed">
            we deliver high-end, performant digital solutions using a vetted modern stack, prioritizing smooth framerates and clean layout architecture.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="flex flex-col justify-between min-h-[300px] hover:scale-102 transition-transform duration-300">
                  <div className="flex flex-col gap-6">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white uppercase tracking-wider">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      {svc.desc}
                    </p>
                  </div>
                  
                  {/* Subtle link action indicator */}
                  <span className="text-[10px] font-semibold text-purple-400 uppercase tracking-widest mt-6 group-hover:translate-x-1 transition-transform">
                    learn more &rarr;
                  </span>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
