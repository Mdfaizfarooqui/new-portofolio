import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import Cursor from "@/components/ui/Cursor";
import ThreeBackground from "@/components/ui/ThreeBackground";

// Import Outfit typography variables
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AURA — Premium Creative Agency & Web Design Studio",
  description:
    "AURA is an award-winning creative agency designing immersive 3D digital experiences, Next.js applications, and brand identities with sub-second performance.",
  keywords: [
    "Creative Agency",
    "Digital Studio",
    "3D Web Design",
    "Next.js 15 App",
    "Tailwind CSS v4",
    "WebGL Particles",
    "Awwwards portfolio",
  ],
  openGraph: {
    title: "AURA — Premium Creative Agency & Web Design Studio",
    description:
      "Explore Awwwards-inspired immersive 3D portals, interactive design timelines, and validated performance-driven apps developed by AURA.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full bg-dark-bg text-gray-100 flex flex-col relative select-none">
        {/* WCAG Skip link */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        {/* Global Interactive Providers */}
        <LenisScroll>
          <Cursor />
          <ThreeBackground />
          {children}
          {modal}
        </LenisScroll>
      </body>
    </html>
  );
}
