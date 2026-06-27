export default function HeroSection() {
  return (
    <section className="min-h-[75vh] flex flex-col justify-center px-6 md:px-12 py-12 select-none">
      <div className="max-w-4xl space-y-6 md:space-y-8">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[#111111] lowercase font-sans">
          i'm faiz.
        </h1>
        <p className="text-2xl sm:text-4xl md:text-5xl font-light text-[#111111] leading-tight lowercase font-sans">
          i design, and i write code.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-[#888888] lowercase font-sans tracking-wide max-w-2xl">
          focused on building quiet, fast, and Typographic-first web architectures with typescript, next.js, and tailwind css.
        </p>
      </div>
    </section>
  );
}
