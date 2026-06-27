export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12 bg-transparent text-[#888888] font-mono text-xs select-none mt-auto flex flex-col gap-2 md:flex-row md:justify-between md:items-center border-t border-[#111111]/5">
      <p className="lowercase">
        © {new Date().getFullYear()} faiz. all rights reserved.
      </p>
      <p className="lowercase">
        built with next.js & tailwind css
      </p>
    </footer>
  );
}
