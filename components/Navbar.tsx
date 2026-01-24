"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100; // adjust for fixed navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-serif tracking-wide text-[#D4AF37]">
          Pearl Interiors
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-sm uppercase tracking-wider">
          {[
            { label: "Services", id: "services" },
            { label: "Design Styles", id: "designs" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className="relative group transition-all duration-300"
            >
              <span className="group-hover:text-[#D4AF37] transition-colors">
                {item.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(212,175,55,0.7)]" />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#D4AF37]"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="p-6 flex justify-between items-center border-b border-white/10">
          <span className="font-serif text-[#D4AF37] text-lg">Menu</span>
          <button onClick={() => setOpen(false)} className="text-xl">✕</button>
        </div>

        <div className="flex flex-col space-y-6 p-6 uppercase tracking-wider text-sm">
          <button onClick={() => scrollToSection("services")} className="hover:text-[#D4AF37] text-left">
            Services
          </button>
          <button onClick={() => scrollToSection("designs")} className="hover:text-[#D4AF37] text-left">
            Design Styles
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-[#D4AF37] text-left">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
