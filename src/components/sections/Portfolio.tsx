"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../ui/Card";
import Button from "../ui/Button";

const categories = ["all", "web 3d", "mobile", "fullstack"];

const projects = [
  {
    id: 1,
    title: "skynotech agency",
    category: "web 3d",
    desc: "high-fidelity 3D interactive ecommerce layout built with Next.js, R3F, and custom GLSL noise shaders.",
    year: "2026",
    color: "#a855f7",
  },
  {
    id: 2,
    title: "skynote mobile",
    category: "mobile",
    desc: "cross-platform developer notes app with sqlite offline syncing and swift keyboard shortcuts.",
    year: "2026",
    color: "#3b82f6",
  },
  {
    id: 3,
    title: "feast & fire",
    category: "web 3d",
    desc: "Aawwards-winning fast food catalog menu utilizing smooth horizontal scrolling and webgl distort meshes.",
    year: "2025",
    color: "#f59e0b",
  },
  {
    id: 4,
    title: "admin recovery api",
    category: "fullstack",
    desc: "secure admin auth portal featuring verification OTP generators and jwt-based recovery mechanisms.",
    year: "2025",
    color: "#10b981",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <section id="portfolio" className="py-24 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-500">
              03 / case studies
            </span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
              selected works
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-none ${
                  filter === cat
                    ? "bg-purple-500 text-white"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveProject(project)}
                className="cursor-none"
              >
                <div data-cursor-text="view">
                  <Card 
                    className="p-8 h-[280px] flex flex-col justify-between border-l-4 group"
                    style={{ borderLeftColor: project.color }}
                  >
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2">
                        {project.category} / {project.year}
                      </span>
                      <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    <span className="text-[10px] font-semibold text-purple-400 uppercase tracking-widest">
                      view case study &rarr;
                    </span>
                  </Card>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#07070a]/90 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="glass-panel w-full max-w-lg p-8 rounded-2xl flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block mb-2">
                  {activeProject.category} — {activeProject.year}
                </span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                  {activeProject.title}
                </h3>
              </div>

              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {activeProject.desc} Detailed project specifications include high-end performance audits, component-driven layouts, and seamless motion graphs linking page transitions to scroll triggers.
              </p>

              <div className="flex gap-4">
                <Button variant="primary" onClick={() => setActiveProject(null)}>
                  visit live url
                </Button>
                <Button variant="glass" onClick={() => setActiveProject(null)}>
                  close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
