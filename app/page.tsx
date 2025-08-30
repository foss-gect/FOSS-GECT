'use client';
import Navbar from "@/app/Navbar";
import { HomeSection } from "@/components/sections/HomeSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navbar />
      
      <HomeSection />
      <IntroSection />
      <AboutSection />
      <EventsSection />
      <ContactSection />
    </div>
  );
}
