"use client";
import { useEffect, useState } from "react";
import ConsultationForm from "./ConsultationForm";

export default function Hero() {
  const [offset, setOffset] = useState(0);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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

        {/* ⭐ FIX — overlay should not block clicks */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 pointer-events-none" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif mb-4 tracking-wide
                         text-transparent bg-clip-text
                         bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200
                         drop-shadow-[0_0_25px_rgba(255,215,120,0.35)]">
            Pearl Interiors
          </h1>

          <p className="max-w-2xl mx-auto mb-3 text-gray-200 text-sm md:text-base tracking-wide">
            Luxury Interior Designers in Hyderabad & Bangalore
          </p>

          <p className="max-w-xl mx-auto mb-8 text-gray-400">
            Bespoke interiors for apartments, villas & commercial spaces.
            Experience elegance, comfort and timeless luxury.
          </p>

          {/* ⭐ MAIN CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button
              onClick={() => setOpenForm(true)}
              className="luxury-glow px-8 py-4 rounded font-semibold text-black
                         bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                         shadow-[0_0_18px_rgba(255,215,0,0.45)]
                         hover:shadow-[0_0_40px_rgba(255,215,0,0.9)]
                         hover:scale-[1.05]
                         transition-all duration-300"
            >
              Schedule Free Design Consultation
            </button>

            {/* ⭐ TRUST BADGE */}
            <div className="flex items-center justify-center text-sm text-gray-300">
              ⭐ Free consultation · No obligation · Quick response
            </div>
          </div>

          {/* STATS */}
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
      </section>

      {/* 🎉 POPUP FORM */}
      {openForm && <ConsultationForm onClose={() => setOpenForm(false)} />}
    </>
  );
}

