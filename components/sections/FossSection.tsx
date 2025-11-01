"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import { Squares } from "@/components/ui/shadcn-io/squares-background";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/shadcn-io/hover-card/hover-card";

const FAQS = [
  {
    q: "What is FOSS?",
    a: "Free and Open Source Software (FOSS) means software that anyone can use, study, modify, and share freely.",
  },
  {
    q: "Where is FOSS used?",
    a: "FOSS powers the internet, mobile phones, supercomputers, everyday apps, and even space exploration systems.",
  },
  {
    q: "Why should I care?",
    a: "It gives you freedom, transparency, security, and the opportunity to learn from and contribute to real-world projects.",
  },
  {
    q: "How can I start?",
    a: "Begin by exploring projects on GitHub or GitLab, fixing documentation, testing features, or reporting bugs.",
  },
  {
    q: "What makes FOSS important?",
    a: "Collaboration, innovation, and community-driven development make FOSS a backbone of modern technology.",
  },
  {
    q: "Do I need to be an expert in coding?",
    a: "No. Anyone can contribute—whether by coding, writing docs, designing, testing, or spreading awareness.",
  },
];

const Penguin = ({ isUserInteracting }: { isUserInteracting: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/linux-char.glb");

  useFrame((_, delta) => {
    if (groupRef.current && !isUserInteracting) {
      groupRef.current.rotation.y += delta;
    }
  });

  return (
    <group ref={groupRef} scale={0.4}>
      <primitive object={scene} />
    </group>
  );
};

const PenguinCanvas = ({
  onInteractionChange,
}: {
  onInteractionChange: (interacting: boolean) => void;
}) => (
  <Canvas camera={{ position: [4, 2, 4], fov: 45, near: 0.1, far: 400 }}>
    <ambientLight intensity={0.6} />
    <directionalLight position={[5, 5, 5]} intensity={0.8} />
    <Penguin isUserInteracting={false} />
    <OrbitControls
      enableRotate
      enableZoom={false}
      rotateSpeed={0.5}
      panSpeed={0.5}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={0}
      onStart={() => onInteractionChange(true)}
      onEnd={() => onInteractionChange(false)}
    />
  </Canvas>
);

const DesktopFAQ = () => {
  const faqPositions = useMemo(
    () => [
      [{ index: 0 }],
      [{ index: 1 }, { index: 2 }],
      [{ index: 3 }, { index: 4, className: "ml-9" }],
      [{ index: 5 }],
    ],
    [],
  );

  return (
    <div className="grid grid-rows-4 w-full h-full max-w-6xl max-h-[700px] text-center gap-4">
      {faqPositions.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={`flex items-center ${row.length === 1 ? "justify-center" : "justify-between px-20"}`}
        >
          {row.map(({ index, className }) => (
            <HoverCard key={index}>
              <HoverCardTrigger
                className={`cursor-pointer cabinet-font ${className || ""}`}
              >
                {FAQS[index].q}
              </HoverCardTrigger>
              <HoverCardContent>{FAQS[index].a}</HoverCardContent>
            </HoverCard>
          ))}
        </div>
      ))}
    </div>
  );
};

const MobileFAQCard = ({
  faq,
  isActive,
  onClick,
}: {
  faq: (typeof FAQS)[0];
  isActive: boolean;
  onClick: () => void;
}) => (
  <div className="relative w-full h-[120px] cursor-pointer" onClick={onClick}>
    <div className="relative w-full h-full">
      <div
        className={`absolute inset-0 flex items-center justify-center p-3 bg-white/10 rounded-lg border border-white/20 transition-all duration-300 ${
          isActive ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <span className="whitespace-pre-line font-medium text-sm">{faq.q}</span>
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center p-3 bg-white/20 rounded-lg border border-white/30 transition-all duration-300 ${
          isActive
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <span className="text-xs text-gray-100 leading-relaxed whitespace-pre-line">
          {faq.a}
        </span>
      </div>
    </div>
  </div>
);

const FossSection = () => {
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActive = (index: number) =>
    setActiveIndex((prev) => (prev === index ? null : index));

  return (
    <div className="relative w-full h-screen text-white intro-page">
      <Squares
        direction="left"
        speed={0.5}
        squareSize={40}
        borderColor="rgba(255, 255, 255, 0.1)"
        hoverFillColor="rgba(255, 255, 255, 0.05)"
        className="absolute inset-0 pointer-events-none"
      />

      {/* Desktop */}
      <section
        id="foss"
        className="relative h-screen w-full items-center justify-center hidden md:flex"
      >
        <div className="absolute w-[300px] h-[300px] z-10">
          <PenguinCanvas onInteractionChange={setIsUserInteracting} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center cabinet-font text-2xl whitespace-pre-line">
          <DesktopFAQ />
        </div>
      </section>

      {/* Mobile */}
      <section
        id="foss-mobile"
        className="relative flex flex-col items-center justify-center text-center w-full h-full md:hidden"
      >
        <div className="w-[200px] h-[200px] mb-6">
          <PenguinCanvas onInteractionChange={setIsUserInteracting} />
        </div>
        <div className="relative grid grid-cols-2 gap-4 px-6 text-base cabinet-font w-full max-w-md z-20">
          {FAQS.map((faq, i) => (
            <MobileFAQCard
              key={i}
              faq={faq}
              isActive={activeIndex === i}
              onClick={() => toggleActive(i)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FossSection;
