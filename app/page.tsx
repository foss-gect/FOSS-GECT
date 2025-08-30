'use client';
import Navbar from "@/app/Navbar";
import { WarpBackground } from "@/components/ui/shadcn-io/warp-background";
import { Squares } from "@/components/ui/shadcn-io/squares-background";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black ">
      <Navbar />

      {/* Home Section */}
      <section id="home" className="relative h-screen">
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
      <section id="intro" className="relative h-screen w-full overflow-hidden text-white aventi-font intro-page">
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
        <p className="text-xl cabinet-font font-medium leading-relaxed max-w-2xl ">
  FOSS GECT is a community of free and open-source enthusiasts at Government 
  Engineering College Thrissur, promoting open collaboration, learning, and 
  innovation. We aim to empower students to explore, contribute, and grow with 
  open technologies.
</p>

      </div>

      <div className="relative">
        <div ></div>
                <img 
          src="/images/gect_building.png" 
          alt="GECT Building" 
        />
      </div>
    </div>
  </div>
</section>



      <section
        id="about"
        className="h-screen flex items-center justify-center bg-gray-900 text-white"
      >
        <h1 className="text-4xl font-bold">About Us</h1>
      </section>

      <section
        id="events"
        className="h-screen flex items-center justify-center bg-gray-800 text-white"
      >
        <h1 className="text-4xl font-bold">Events</h1>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-gray-700 text-white"
      >
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </section>
    </div>
  );
}
