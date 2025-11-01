"use client";
import { Squares } from "@/components/ui/shadcn-io/squares-background";

const IntroSection = () => {
  return (
    <section
      id="intro"
      className="relative h-screen w-full overflow-hidden text-white aventi-font intro-page snap-start"
    >
      {/* Background */}
      <div className="absolute inset-0"></div>

      <Squares
        direction="diagonal"
        speed={0.5}
        squareSize={40}
        borderColor="rgba(255, 255, 255, 0.1)"
        hoverFillColor="rgba(255, 255, 255, 0.05)"
        className="absolute inset-0"
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 md:px-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          {/* Text */}
          <div className="text-left text-white order-1 md:order-1">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight">
              Hi
            </h1>
            <h2 className="text-5xl sm:text-4xl md:text-6xl font-bold mt-2">
              From FOSS GECT
            </h2>
            <p className="text-xl md:text-xl cabinet-font font-medium leading-relaxed max-w-xl mt-4">
              FOSS GECT is a community of free and open-source enthusiasts at
              Government Engineering College Thrissur, promoting open
              collaboration, learning, and innovation. We aim to empower
              students to explore, contribute, and grow with open technologies.
            </p>
          </div>

          {/* Image (bottom on mobile) */}
          <div className="relative flex justify-center md:justify-end order-2 md:order-2 mt-8 md:mt-0">
            <img
              src="/images/gect_building.png"
              alt="GECT Building"
              className="w-100 sm:w-80 md:w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
