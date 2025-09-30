"use client";
import Navbar from "@/app/Navbar";
import dynamic from "next/dynamic";

const HomeSection = dynamic(() => import("@/components/sections/HomeSection"), {
  ssr: true,
});
const IntroSection = dynamic(
  () => import("@/components/sections/IntroSection"),
  { ssr: false },
);
const EventsSection = dynamic(
  () => import("@/components/sections/EventsSection"),
  { ssr: false },
);
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection"),
  { ssr: false },
);

const FossSection = dynamic(() => import("@/components/sections/FossSection"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Navbar />
      <section id="home" className="snap-start h-screen">
        <HomeSection />
      </section>
      <section id="intro" className="snap-start h-screen">
        <IntroSection />
      </section>
      <section id="foss" className="snap-start h-screen">
        <FossSection />
      </section>
      <section id="events" className="snap-start h-screen">
        <EventsSection />
      </section>
      <section id="contact" className="snap-start h-screen">
        <ContactSection />
      </section>
    </div>
  );
}
