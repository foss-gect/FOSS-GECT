"use client";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "intro" },
    { name: "Events", id: "events" },
    { name: "Contact Us", id: "contact" },
  ];

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActive(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/90 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-full mx-auto">
        {/* Logo */}
        <div className="text-white text-xl font-extrabold tracking-wider">
          FOSS GECT
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                active === link.id
                  ? "bg-pink-500 text-white"
                  : "text-white hover:text-pink-300"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2 bg-black/95 p-4 rounded-lg">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                active === link.id
                  ? "bg-pink-500 text-white"
                  : "text-white hover:text-pink-300"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
