"use client";
import { FlickeringGrid } from "@/components/ui/shadcn-io/flickering-grid/flickering-grid";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

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

const EventsSection = () => {
  const [imageComplete, setImageComplete] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1920);

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const isMobile = windowWidth < 1400;
  const isIntermediate = windowWidth >= 768 && windowWidth < 1024;

  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => setImageComplete(true), 2300);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const leftEvents = events.slice(0, 4);
  const rightEvents = events.slice(4);
  const gradient = "linear-gradient(135deg, #C32971, #552186)";
  const mobileEvents = [
    [events[0], events[1]],
    [events[2], events[3]],
    [events[4], events[5]],
    [events[6], events[7]],
  ];

  const EventCard = ({ event, delay, direction = "left" }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.3 });

    return (
      <motion.div
        ref={cardRef}
        initial={
          isMobile || isIntermediate
            ? { opacity: 0, scale: 0.8 }
            : { x: direction === "left" ? -200 : 200, opacity: 0 }
        }
        animate={
          isInView
            ? isMobile || isIntermediate
              ? { opacity: 1, scale: 1 }
              : { x: 0, opacity: 1 }
            : {}
        }
        transition={{
          delay: isMobile || isIntermediate ? delay : delay * 0.15,
          duration: isMobile || isIntermediate ? 0.5 : 0.8,
          type: "spring",
        }}
        className="w-full"
      >
        <div
          className="relative flex items-center justify-center rounded-xl overflow-hidden m-2"
          style={{
            width: isMobile || isIntermediate ? "100%" : "200px",
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
            <p className="z-10 font-semibold text-white text-center text-base px-4">
              {event}
            </p>
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
    );
  };

  return (
    <section
      id="events"
      className="relative min-h-screen snap-start flex items-center justify-center overflow-hidden py-12"
      style={{ background: "linear-gradient(180deg, #000000, #A52858)" }}
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

      {isMobile ? (
        /* Mobile Layout */
        <div className="relative w-full flex justify-center items-center px-4">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: imageComplete ? 0 : 1 }}
            transition={{ opacity: { duration: 0.8, delay: 0.3 } }}
            className="w-full flex justify-center items-center"
          >
            <Image
              src="/images/upcoming-events.png"
              alt="Upcoming Events at GEC"
              width={3000}
              height={1200}
              priority
              className="w-full max-w-[600px] h-auto"
            />
          </motion.div>
          {/* Cards overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: imageComplete ? 1 : 0 }}
            transition={{ opacity: { duration: 0.8, delay: 0.3 } }}
            className="absolute inset-0 flex flex-col justify-center items-center space-y-4 px-4"
          >
            {mobileEvents.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-2 gap-4 w-full max-w-[600px]"
              >
                {row.map((event, colIndex) => (
                  <EventCard
                    key={event}
                    event={event}
                    delay={rowIndex * 0.2 + colIndex * 0.1 + 0.3}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      ) : (
        /* Desktop & Intermediate Layout */
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-[2000px] gap-24 px-4">
          {/* Left Cards */}
          <div className="flex flex-col gap-6 justify-center items-center w-full">
            {leftEvents.map((event, index) => (
              <EventCard
                key={event}
                event={event}
                delay={index}
                direction="left"
              />
            ))}
          </div>
          {/* Image */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/images/upco.png"
              alt="Upcoming Events at GEC"
              width={3000}
              height={1200}
              priority
              className="w-full md:w-[1200px] max-w-[600px] h-auto"
            />
          </div>
          {/* Right Cards */}
          <div className="flex flex-col gap-6 justify-center items-center">
            {rightEvents.map((event, index) => (
              <EventCard
                key={event}
                event={event}
                delay={index}
                direction="right"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsSection;
