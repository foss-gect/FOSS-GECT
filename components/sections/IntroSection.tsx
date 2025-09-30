"use client";
import { Squares } from "@/components/ui/shadcn-io/squares-background";

const IntroSection = () => {
  return (
    <section
      id="intro"
      className="relative h-screen w-full overflow-hidden text-white aventi-font intro-page snap-start"
    >
      {/* Gradient BG Image */}
      <div className="absolute inset-0 "></div>

      <Squares
        direction="diagonal"
        speed={0.5}
        squareSize={40}
        borderColor="rgba(255, 255, 255, 0.1)"
        hoverFillColor="rgba(255, 255, 255, 0.05)"
        className="absolute inset-0"
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="max-w-lvw mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left text-white space-y-6 px-14">
            <h1 className="text-8xl font-bold">Hi</h1>
            <h2 className="text-6xl font-bold mb-6">From FOSS GECT</h2>
            <p className="text-xl cabinet-font font-medium leading-relaxed max-w-xl ">
              FOSS GECT is a community of free and open-source enthusiasts at
              Government Engineering College Thrissur, promoting open
              collaboration, learning, and innovation. We aim to empower
              students to explore, contribute, and grow with open technologies.
            </p>
          </div>

          <div className="relative">
            <img src="/images/gect_building.png" alt="GECT Building" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default IntroSection;
