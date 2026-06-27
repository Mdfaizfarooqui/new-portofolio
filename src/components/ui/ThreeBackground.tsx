"use client";

import dynamic from "next/dynamic";

const ThreeCanvasComponent = dynamic(() => import("./ThreeCanvasComponent"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#07070a] -z-50" />,
});

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-[#07070a]">
      <ThreeCanvasComponent />
    </div>
  );
}
