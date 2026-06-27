import HeroSection from "@/components/HeroSection";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <main id="main-content" className="flex-grow flex flex-col">
      <HeroSection />
      <ProjectList />
      <section id="contact" className="py-20 px-6 md:px-12 select-none" aria-label="contact information">
        <div className="max-w-4xl space-y-4">
          <p className="text-2xl sm:text-3xl font-light text-[#111111] lowercase font-sans">
            want to work together?
          </p>
          <a
            href="mailto:mr.faizfarooqui@gmail.com"
            className="inline-block text-lg sm:text-2xl font-mono text-[#111111] hover:text-[#888888] underline underline-offset-4 transition-colors lowercase"
            aria-label="send an email to faiz"
          >
            mr.faizfarooqui@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
