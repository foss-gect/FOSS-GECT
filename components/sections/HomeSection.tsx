'use client';
import { WarpBackground } from "@/components/ui/shadcn-io/warp-background";

export const HomeSection = () => {
  return (
    <section id="home" className="relative h-screen snap-start">
      <WarpBackground
        className="absolute inset-0 z-0 landing-page-bg"
        gridColor="transparent"
        beamSize={15}
        beamsPerSide={10}
        perspective={2400}
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
