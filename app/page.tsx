'use client';
import Navbar from "@/app/Navbar";
import { WarpBackground } from "@/components/ui/shadcn-io/warp-background";

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

      {/* About Section */}
      <section
        id="about"
        className="h-screen flex items-center justify-center bg-gray-900 text-white"
      >
        <h1 className="text-4xl font-bold">About Us</h1>
      </section>

      {/* Events Section */}
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
