"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // prevent scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white z-[100] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-serif tracking-wide text-[#D4AF37]">
            Pearl Interiors
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-sm uppercase tracking-wider">
            <button onClick={() => scrollToSection("services")}>Services</button>
            <button onClick={() => scrollToSection("designs")}>Design Styles</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-[#D4AF37]"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* DARK OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[150]"
        />
      )}

      {/* SIDE DRAWER MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-black text-white transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-[200] shadow-2xl`}
      >
        {/* Top */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <span className="font-serif text-[#D4AF37] text-lg">Menu</span>
          <button onClick={() => setOpen(false)} className="text-2xl">✕</button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-10 p-10 text-xl font-serif">
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

        {/* CTA */}
        <div className="mt-auto p-6 border-t border-white/10">
          <a
            href="https://wa.me/919391045855"
            target="_blank"
            className="block text-center bg-[#D4AF37] text-black font-semibold py-4 rounded-full"
          >
            Call / WhatsApp Now
          </a>
        </div>
      </div>
    </>
  );
}

