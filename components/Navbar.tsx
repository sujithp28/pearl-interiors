"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent page scroll when menu open
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
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
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
      </nav>

      {/* DARK OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[150]"
        />
      )}

      {/* ⭐ PREMIUM SIDE DRAWER MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-black to-zinc-900 text-white transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 z-[200] shadow-[0_0_40px_rgba(0,0,0,0.8)]`}
      >
        {/* Glow edge */}
        <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-70" />

        {/* Header */}
        <div className="p-6 border-b border-white/10 relative">
          <p className="text-[#D4AF37] font-serif text-xl">Menu</p>
          <p className="text-xs text-gray-500 mt-1">Pearl Interiors</p>

          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-5 text-2xl text-white/70"
          >
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-10 p-10 text-xl font-serif">
          {[
            { label: "Services", id: "services" },
            { label: "Design Styles", id: "designs" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group text-left relative"
            >
              <span className="group-hover:text-[#D4AF37] transition">
                {item.label}
              </span>
              <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-16" />
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-auto p-6 border-t border-white/10">
          <a
            href="https://wa.me/919391045855"
            target="_blank"
            className="block text-center bg-[#D4AF37] text-black font-semibold py-4 rounded-full text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition"
          >
            Call / WhatsApp Now
          </a>
        </div>
      </div>
    </>
  );
}

