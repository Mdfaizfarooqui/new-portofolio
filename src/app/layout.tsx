import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "faiz — designer & developer",
  description: "quiet, typographic-first portfolio of a designer and developer who lets their work speak for itself.",
  metadataBase: new URL("https://new-portofolio.vercel.app"),
  openGraph: {
    title: "faiz — designer & developer",
    description: "quiet, typographic-first portfolio of a designer and developer who lets their work speak for itself.",
    type: "website",
    locale: "en_us",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "faiz — designer & developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "faiz — designer & developer",
    description: "quiet, typographic-first portfolio of a designer and developer who lets their work speak for itself.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full bg-[#fefefe] text-[#111111] font-sans flex flex-col relative select-none">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#111111] focus:text-[#fefefe] focus:font-mono focus:text-xs lowercase"
        >
          skip to content
        </a>
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
