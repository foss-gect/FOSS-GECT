"use client";

import React from "react";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="w-full bg-black text-[#e8e8e8] flex flex-col items-center justify-center px-6 py-2">
      {/* Row 2 - Left and Right */}
      <div className="w-full flex items-center justify-between">
        {/* Left text */}
        <p className="text-sm cabinet-font whitespace-nowrap flex items-center h-10">
          2025 FOSS GECT
        </p>

        {/* Right Dock-like container */}
        <div
          className="flex items-center justify-center gap-6 px-6 py-3
                     h-10 rounded-2xl border border-[#4a3a42]
                     bg-[#ffffff0d] backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.05)]"
        >
          <a
            href="https://instagram.com/fossgect"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <Instagram className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/fossgect/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2aa889] transition-colors"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href="https://x.com/fossgect"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            <Twitter className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
