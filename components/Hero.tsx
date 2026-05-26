"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero({ openForm }: { openForm: () => void }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.2);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const trustBadges = [
    "Free consultation",
    "Turnkey execution",
    "Premium materials",
    "45–60 day planning",
  ];

  const stats = [
    { value: "750+", label: "Bespoke Interiors Delivered" },
    { value: "15 Years", label: "Warranty on Kitchens & Wardrobes" },
    { value: "South India", label: "AP · Telangana · Karnataka" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 text-center text-white"
    >
      <Image
        src="/hero-bg.jpg"
        alt="Luxury interior design living room"
        fill
        preload
        loading="eager"
        quality={100}
        sizes="100vw"
        className="object-cover"
        style={{
          transform: `translateY(${offset}px) scale(1.05)`,
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

      <div className="relative z-10 max-w-4xl">
        <h1 className="mb-4 font-serif text-4xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#f5e6a8] via-pearl-gold to-[#f5e6a8] drop-shadow-[0_0_25px_rgba(212,175,55,0.35)] md:text-6xl">
          Pearl Interiors
        </h1>

        <p className="mx-auto mb-3 max-w-2xl text-sm tracking-wide text-gray-200 md:text-base">
          Luxury Interior Designers in Hyderabad & Bangalore
        </p>

        <p className="mx-auto mb-8 max-w-xl text-gray-400">
          Bespoke interiors for apartments, villas & commercial spaces.
          Experience elegance, comfort and timeless luxury.
        </p>

        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button type="button" onClick={openForm} className="luxury-glow btn-primary px-8 py-4">
            Schedule Free Design Consultation
          </button>

          <a href="#designs" className="btn-outline px-8 py-4">
            View Design Gallery
          </a>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-200">
          {trustBadges.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-black/30 px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col justify-center gap-8 text-sm text-gray-300 md:flex-row">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-lg font-semibold text-white">{stat.value}</div>
              {stat.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
