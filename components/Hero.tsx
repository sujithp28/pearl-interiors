"use client";
import { useEffect, useState } from "react";
import AppointmentModal from "./AppointmentModal";

export default function Hero() {
  const [offset, setOffset] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  // Parallax scroll
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center hero-bg-animate"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          transform: `translateY(${offset}px) scale(1.05)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-serif mb-3 tracking-wide
                       text-transparent bg-clip-text
                       bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200
                       drop-shadow-[0_0_25px_rgba(255,215,120,0.35)]">
          Pearl Interiors
        </h1>

        <p className="max-w-2xl mx-auto mb-2 text-gray-200 text-sm md:text-base tracking-wide">
          Interior Designers in Hyderabad & Bangalore for Luxury Homes and Commercial Spaces
        </p>

        <p className="max-w-xl mx-auto mb-6 text-gray-400">
          Designing spaces that reflect elegance, comfort, and timeless luxury.
        </p>

        {/* ⭐ CTA BUTTONS */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">

          {/* Opens Appointment Modal */}
          <button
            onClick={() => setOpenModal(true)}
            className="luxury-glow relative px-7 py-3 rounded font-medium text-black
                       bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                       shadow-[0_0_18px_rgba(255,215,0,0.45)]
                       hover:shadow-[0_0_35px_rgba(255,215,0,0.85)]
                       hover:scale-[1.05]
                       transition-all duration-300"
          >
            Schedule a Private Design Consultation
          </button>

          <a
            href="https://wa.me/919391045855"
            target="_blank"
            className="border border-white px-6 py-3 rounded
                       hover:bg-white hover:text-black
                       transition"
          >
            Talk to Our Lead Designer
          </a>

        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center gap-8 text-sm text-gray-300">
          <div>
            <div className="text-lg font-semibold text-white">750+</div>
            Bespoke Interiors Delivered
          </div>
          <div>
            <div className="text-lg font-semibold text-white">5+ Years</div>
            Trusted Design Expertise
          </div>
          <div>
            <div className="text-lg font-semibold text-white">South India</div>
            AP · Telangana · Karnataka
          </div>
        </div>
      </div>

      {/* ⭐ TOP SLIDE APPOINTMENT PANEL */}
      <AppointmentModal open={openModal} onClose={() => setOpenModal(false)} />

    </section>
  );
}

