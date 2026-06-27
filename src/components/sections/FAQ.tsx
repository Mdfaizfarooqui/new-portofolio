"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Card from "../ui/Card";

const faqs = [
  {
    question: "do you work with startups or enterprises?",
    answer: "we work with both. our processes are tailored to support early-stage startups searching for seed blueprints, as well as established enterprise teams looking to build performant internal dashboard portals.",
  },
  {
    question: "how long does an average custom project take?",
    answer: "A standard landing page or portfolio takes 3-4 weeks. Larger interactive applications with custom WebGL, Three.js coordinates, and relational database schemas typically take 6-10 weeks.",
  },
  {
    question: "which backend stacks do you support?",
    answer: "we build performant backend infrastructures using Node.js, Express, PostgreSQL, Prisma ORM, Redis for caching, and serverless platforms like Supabase or Vercel Postgres.",
  },
  {
    question: "how do you guarantee Lighthouse performance above 95?",
    answer: "we leverage static page generation, dynamic code splitting, image formats like webp/avif, lazy loaded components, and minimized bundle weights. we monitor loading phases to maintain sub-second interaction speed.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 relative border-t border-white/5 bg-[#08080c]/50">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        {/* Title */}
        <div className="flex flex-col gap-4 text-center items-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-purple-500">
            07 / FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
            frequently asked
          </h2>
          <p className="text-gray-400 font-light max-w-sm leading-relaxed">
            have questions? we have answers. feel free to ask about our tech stack.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="cursor-none" onClick={() => toggleFAQ(idx)}>
                <Card className={`p-6 transition-all duration-300 ${isOpen ? "border-purple-500/25" : ""}`}>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider select-none">
                      {faq.question}
                    </h3>
                    <button
                      className="text-purple-400 shrink-0 cursor-none"
                      aria-label={isOpen ? "Collapse question" : "Expand question"}
                      aria-expanded={isOpen}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-gray-400 font-light leading-relaxed mt-4 pt-4 border-t border-white/5">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
