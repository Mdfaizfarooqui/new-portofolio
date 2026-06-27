"use client";

import { motion } from "framer-motion";
import Card from "../ui/Card";
import Button from "../ui/Button";

const tiers = [
  {
    name: "starter package",
    price: "$4.9k",
    period: "per project",
    desc: "essential custom high-performance static website for small brands.",
    features: [
      "Custom UI/UX blueprint in Figma",
      "5 static pages in Next.js",
      "Tailwind CSS v4 & custom tokens",
      "Lenis smooth scroll integration",
      "Lighthouse score >95 guarantee",
    ],
    popular: false,
  },
  {
    name: "growth dynamic",
    price: "$9.5k",
    period: "per project",
    desc: "high-end motion portfolio with GSAP animations & content management systems.",
    features: [
      "Everything in Starter Package",
      "Interactive 3D WebGL hero background",
      "GSAP scroll-triggered horizontal scroll",
      "Sanity CMS or Strapi integration",
      "Zod-validated lead contact forms",
      "1 month post-launch bug support",
    ],
    popular: true,
  },
  {
    name: "immersive custom",
    price: "$18k",
    period: "starting at",
    desc: "full-scale interactive ecommerce, customized shaders, and custom web platforms.",
    features: [
      "Custom R3F mesh distortion shader canvas",
      "Database schema structuring (PostgreSQL)",
      "Next.js App Router API endpoints",
      "Auth0 / JWT recovery workflows",
      "Priority senior developer SLA support",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Title */}
        <div className="flex flex-col gap-4 text-center items-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-purple-500">
            06 / package options
          </span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
            transparent investment
          </h2>
          <p className="text-gray-400 font-light max-w-md leading-relaxed">
            vetted fixed-price pricing tiers designed for startups, digital agencies, and enterprise brands.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <Card
                className={`p-8 h-full flex flex-col justify-between border-t-4 ${
                  tier.popular ? "border-t-purple-500 bg-purple-900/5" : "border-t-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      {tier.name}
                    </span>
                    {tier.popular && (
                      <span className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-[8px] font-extrabold uppercase tracking-widest rounded-full">
                        most popular
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                    <span className="text-xs text-gray-500 font-light">{tier.period}</span>
                  </div>

                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-8">
                    {tier.desc}
                  </p>

                  <hr className="border-white/5 mb-8" />

                  {/* Features List */}
                  <ul className="flex flex-col gap-4 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-xs text-gray-300 font-light">
                        <span className="text-purple-500 text-sm leading-none">&bull;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant={tier.popular ? "primary" : "glass"} 
                  className="w-full"
                  onClick={() => window.location.href = "#contact"}
                >
                  choose plan
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
