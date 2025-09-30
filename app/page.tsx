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

export default function Home() {
  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
      <Navbar />
      <HomeSection />
      <IntroSection />
      <EventsSection />
      <ContactSection />
    </div>
  );
}
