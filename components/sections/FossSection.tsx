"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { Squares } from "@/components/ui/shadcn-io/squares-background";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/shadcn-io/hover-card/hover-card";

const Penguin = ({ isUserInteracting }: { isUserInteracting: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/linux-char.glb");

  useFrame((state, delta) => {
    if (groupRef.current && !isUserInteracting) {
      // rotate only when user is NOT interacting
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef} scale={0.4}>
      <primitive object={scene} />
    </group>
  );
};

const FossSection = () => {
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const faqs = [
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
      q: "What makes FOSS\nimportant?",
      a: "Collaboration, innovation, and community-driven development make FOSS a backbone of modern technology.",
    },
    {
      q: "Do I need to be an expert\nin coding?",
      a: "No. Anyone can contribute—whether by coding, writing docs, designing, testing, or spreading awareness.",
    },
  ];

  return (
    <div className="relative w-full h-screen text-white intro-page">
      {/* Full-page striped background */}
      <Squares
        direction="left"
        speed={0.5}
        squareSize={40}
        borderColor="rgba(255, 255, 255, 0.1)"
        hoverFillColor="rgba(255, 255, 255, 0.05)"
        className="absolute inset-0"
      />

      <section
        id="foss"
        className="relative h-screen w-full flex items-center justify-center"
      >
        {/* 3D Model in the Center */}
        <div className="absolute w-[300px] h-[300px] z-10">
          <Canvas
            camera={{ position: [4, 2, 4], fov: 45, near: 0.1, far: 400 }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <Penguin isUserInteracting={isUserInteracting} />
            <OrbitControls
              enableRotate={true}
              rotateSpeed={0.5}
              zoomSpeed={0.5}
              panSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={0}
              onStart={() => setIsUserInteracting(true)}
              onEnd={() => setIsUserInteracting(false)}
            />
          </Canvas>
        </div>

        {/* FAQ Grid */}
        <div className="absolute inset-0 flex items-center justify-center cabinet-font text-2xl whitespace-pre-line">
          <div className="grid grid-rows-4 w-full h-full max-w-6xl max-h-[700px] text-center gap-4">
            <div className="flex items-center justify-center ">
              <HoverCard>
                <HoverCardTrigger className="cursor-pointer cabinet-font">
                  {faqs[0].q}
                </HoverCardTrigger>
                <HoverCardContent>{faqs[0].a}</HoverCardContent>
              </HoverCard>
            </div>

            <div className="flex items-center justify-between px-20">
              <HoverCard>
                <HoverCardTrigger className="cursor-pointer">
                  {faqs[1].q}
                </HoverCardTrigger>
                <HoverCardContent>{faqs[1].a}</HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger className="cursor-pointer">
                  {faqs[2].q}
                </HoverCardTrigger>
                <HoverCardContent>{faqs[2].a}</HoverCardContent>
              </HoverCard>
            </div>

            <div className="flex items-center justify-between px-20">
              <HoverCard>
                <HoverCardTrigger className="cursor-pointer">
                  {faqs[3].q}
                </HoverCardTrigger>
                <HoverCardContent>{faqs[3].a}</HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger className="cursor-pointer ml-9">
                  {faqs[4].q}
                </HoverCardTrigger>
                <HoverCardContent>{faqs[4].a}</HoverCardContent>
              </HoverCard>
            </div>

            <div className="flex items-center justify-center">
              <HoverCard>
                <HoverCardTrigger className="cursor-pointer">
                  {faqs[5].q}
                </HoverCardTrigger>
                <HoverCardContent>{faqs[5].a}</HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FossSection;
