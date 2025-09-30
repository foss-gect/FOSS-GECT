"use client";

import { FlickeringGrid } from "@/components/ui/shadcn-io/flickering-grid/flickering-grid";
import { motion } from "framer-motion";
import Image from "next/image";

const events = [
  "Linux Installation Workshop",
  "Linux Commands Workshop",
  "Git and Version Control",
  "Basics of HTML & CSS",
  "Career Opportunities with FOSS",
  "Open Source Projects",
  "Building Website",
  "Bug Fixing Sprint",
];

export const EventsSection = () => {
  const leftEvents = events.slice(0, 4);
  const rightEvents = events.slice(4);

  const gradient = "linear-gradient(135deg, #C32971, #552186)";

  return (
    <section
      id="events"
      className="relative h-screen snap-start flex items-center justify-center overflow-hidden " // add top padding for navbar
      style={{
        background: "linear-gradient(180deg, #000000, #A52858)",
      }}
    >
      {/* Flickering background */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="#ffffff33"
        maxOpacity={0.3}
        flickerChance={0.1}
        width={1920}
        height={1080}
      />

      {/* Foreground content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 w-full max-w-[1800px] pt-10 gap-8">
        {/* Left cards */}
        <div className="flex flex-col gap-6 justify-center items-center">
          {leftEvents.map((event, index) => (
            <motion.div
              key={event}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                type: "spring",
              }}
            >
              <div
                className="relative flex items-center justify-center rounded-xl overflow-hidden m-2"
                style={{
                  width: "200px",
                  height: "150px",
                  background: gradient,
                  borderRadius: "16px",
                  border: "2px solid transparent",
                  padding: "2px",
                }}
              >
                {/* Inner black blurred container */}
                <div
                  className="flex items-center justify-center rounded-lg w-full h-full relative"
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <p className="z-10 font-semibold text-white text-center text-base">
                    {event}
                  </p>

                  {/* Circle decorations */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: "120px",
                      height: "120px",
                      background: gradient,
                      bottom: "-36px",
                      right: "-22px",
                      opacity: 0.3,
                    }}
                  />
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: "120px",
                      height: "120px",
                      background: gradient,
                      top: "-7px",
                      right: "-59px",
                      opacity: 0.3,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center image */}
        <div className="flex justify-center items-center col-span-1 md:col-span-1 text-center">
          <Image
            src="/images/upco.png"
            alt="Upcoming Events at GEC"
            width={3000}
            height={1200}
            priority
            className="w-[900px] md:w-[1200px] h-auto"
          />
        </div>

        {/* Right cards */}
        <div className="flex flex-col gap-6 justify-center items-center">
          {rightEvents.map((event, index) => (
            <motion.div
              key={event}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                type: "spring",
              }}
            >
              <div
                className="relative flex items-center justify-center rounded-xl overflow-hidden m-2"
                style={{
                  width: "200px",
                  height: "150px",
                  background: gradient,
                  borderRadius: "16px",
                  border: "2px solid transparent",
                  padding: "2px",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-lg w-full h-full relative"
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <p className="z-10 font-semibold text-white text-center text-base">
                    {event}
                  </p>

                  {/* Circle decorations */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: "120px",
                      height: "120px",
                      background: gradient,
                      bottom: "-36px",
                      right: "-22px",
                      opacity: 0.3,
                    }}
                  />
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: "120px",
                      height: "120px",
                      background: gradient,
                      top: "-7px",
                      right: "-59px",
                      opacity: 0.3,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
