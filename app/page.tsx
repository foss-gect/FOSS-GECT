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
const FossSection = dynamic(() => import("@/components/sections/FossSection"), {
  ssr: true,
});
const FooterSection = dynamic(
  () => import("@/components/sections/FooterSection"),
  {
    ssr: false,
  },
);

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
      <section id="events" className="snap-start ">
        <EventsSection />
      </section>
      <section
        id="footer"
        className="snap-start h-15 flex items-center justify-center bg-gray-800 text-white"
      >
        {" "}
        <FooterSection />
      </section>
    </div>
  );
}
