import Link from "next/link";

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-grow flex flex-col justify-center px-6 md:px-12 py-16 max-w-2xl select-none">
      <h1 className="text-xs font-mono uppercase tracking-wider text-[#888888] mb-8 lowercase">
        about me
      </h1>
      <div className="space-y-6 text-[#111111] font-sans text-base sm:text-lg font-light leading-relaxed sm:leading-loose lowercase">
        <p>
          i'm a designer and developer focused on creating restrained, typographic-first digital interfaces. i believe that the best designs are the ones that go unnoticed, serving as invisible scaffolding for content.
        </p>
        <p>
          by stripping away the noise—the cards, gradients, and flashy interactions—i build digital spaces that are fast, accessible, and calm. my stack is built around typescript, next.js, and tailwind css, allowing me to maintain performance and scale without bloat.
        </p>
        <p>
          when i'm not writing code or kerning type, you can find me researching minimalist design systems or walking through quiet streets.
        </p>
      </div>

      <div className="mt-12 flex gap-6 text-sm font-mono lowercase">
        <a 
          href="mailto:mr.faizfarooqui@gmail.com" 
          className="text-[#888888] hover:text-[#111111] underline transition-colors"
          aria-label="send an email to faiz"
        >
          email
        </a>
        <a 
          href="https://github.com/Mdfaizfarooqui" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#888888] hover:text-[#111111] underline transition-colors"
          aria-label="visit faiz's github profile"
        >
          github
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#888888] hover:text-[#111111] underline transition-colors"
          aria-label="visit faiz's twitter profile"
        >
          twitter
        </a>
      </div>
    </main>
  );
}
