interface Project {
  number: string;
  name: string;
  year: string;
  url: string;
}

const projects: Project[] = [
  { number: "01", name: "minimalist e-commerce platform", year: "2026", url: "#" },
  { number: "02", name: "typography-driven content hub", year: "2025", url: "#" },
  { number: "03", name: "distributed state cache layer", year: "2025", url: "#" },
  { number: "04", name: "visual identity & brand design", year: "2024", url: "#" },
];

export default function ProjectList() {
  return (
    <section id="work" className="py-12 px-6 md:px-12 select-none" aria-label="projects list">
      <h2 className="text-xs font-mono uppercase tracking-wider text-[#888888] mb-8 lowercase">
        selected work
      </h2>
      <div className="w-full flex flex-col divide-y divide-[#111111]/5">
        {projects.map((project) => (
          <a
            key={project.number}
            href={project.url}
            className="project-row flex items-baseline w-full py-5 text-left group outline-none"
            aria-label={`project ${project.number}: ${project.name}, created in ${project.year}`}
          >
            <span className="project-name flex flex-grow items-baseline text-base sm:text-lg font-sans font-medium text-[#111111] lowercase">
              <span className="font-mono text-xs text-[#888888] mr-3 select-none">
                {project.number}
              </span>
              {project.name}
            </span>
            <span className="project-year font-mono text-sm text-[#888888] font-normal select-none">
              {project.year}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
