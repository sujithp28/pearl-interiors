"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // 🔒 Prevent page scroll when menu is open
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
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white z-[5000] border-b border-white/10">
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

      {/* ⭐ FULLSCREEN MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black text-white flex flex-col">

          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <span className="text-[#D4AF37] font-serif text-xl">
              Pearl Interiors
            </span>

            <button
              onClick={() => setOpen(false)}
              className="text-2xl text-white/70"
            >
              ✕
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col items-center justify-center flex-1">

            <p className="text-gray-500 mb-12 tracking-widest text-sm">
              NAVIGATION
            </p>

            <div className="flex flex-col gap-10 text-3xl font-serif text-white/90">

              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-[#D4AF37] transition"
              >
                Services
              </button>

              <button
                onClick={() => scrollToSection("designs")}
                className="hover:text-[#D4AF37] transition"
              >
                Design Styles
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-[#D4AF37] transition"
              >
                Contact
              </button>

            </div>

            <div className="w-20 h-[1px] bg-white/10 my-14" />

            <p className="text-gray-500 text-sm text-center max-w-xs">
              Luxury interiors across South India
            </p>

          </div>

          {/* Bottom CTA */}
          <div className="p-8 border-t border-white/10">
            <a
              href="https://wa.me/919391045855"
              target="_blank"
              className="block text-center bg-[#D4AF37] text-black font-semibold py-4 rounded-full text-lg"
            >
              Call / WhatsApp Now
            </a>
          </div>

        </div>
      )}
    </nav>
  );
}

