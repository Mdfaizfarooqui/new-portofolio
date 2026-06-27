import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex flex-col gap-4 py-6 px-6 md:flex-row md:justify-between md:items-center md:px-12 md:py-8 bg-transparent text-[#111111] select-none z-50">
      <Link 
        href="/" 
        className="font-mono text-sm font-medium tracking-tight text-[#111111] hover:text-[#888888] transition-colors"
        aria-label="go to home"
      >
        [faiz]
      </Link>
      <nav className="flex gap-6 md:gap-8 text-sm font-sans font-medium" aria-label="main navigation">
        <Link 
          href="/#work" 
          className="text-[#111111] hover:text-[#888888] transition-colors lowercase"
          aria-label="view work"
        >
          work
        </Link>
        <Link 
          href="/about" 
          className="text-[#111111] hover:text-[#888888] transition-colors lowercase"
          aria-label="read about me"
        >
          about
        </Link>
        <Link 
          href="/#contact" 
          className="text-[#111111] hover:text-[#888888] transition-colors lowercase"
          aria-label="contact me"
        >
          contact
        </Link>
      </nav>
    </header>
  );
}
