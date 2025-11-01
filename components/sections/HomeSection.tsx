"use client";
import { useEffect, useState } from "react";
import { WarpBackground } from "@/components/ui/shadcn-io/warp-background";

const HomeSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on mount + resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <section id="home" className="relative h-screen snap-start">
      <WarpBackground
        className="absolute inset-0 z-0 landing-page-bg"
        gridColor="transparent"
        beamSize={15}
        beamsPerSide={10}
        perspective={isMobile ? 2000 : 2400}
        beamDelayMin={0}
        beamDelayMax={4}
        beamDuration={3}
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-black z-10 pointer-events-none"></div>
        </div>
      </WarpBackground>
    </section>
  );
};
export default HomeSection;
