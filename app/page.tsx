'use client';
import { WarpBackground } from "@/components/ui/shadcn-io/warp-background";
import { div } from "motion/react-client";
import { useState } from "react";


const Navbar = () => {
  const [active, setActive] = useState("home"); 

  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Events", href: "#events", id: "events" },
    { name: "Contact Us", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black">
      <div className="flex items-center justify-between max-w-9xl mx-auto">
        <div className="text-white text-xl font-extrabold tracking-wider">FOSS GECT</div>

        <div className="hidden md:flex items-center space-x-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActive(link.id)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                active === link.id
                  ? "bg-pink-500 text-white"
                  : "text-white hover:text-pink-300"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};



export default function Home() {
  return (
    <div>
    <div className="relative min-h-screen bg-black cabinet-font">
      <Navbar />
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

        
      </div>
    </div>
  );
}

