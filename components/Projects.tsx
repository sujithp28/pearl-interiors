"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const catalog: Record<string, string[]> = {
  Bedroom: Array.from(
    { length: 4 },
    (_, i) => `/projects/bedrooms/bedroom${i + 1}.jpg`
  ),

  Living: Array.from(
    { length: 4 },
    (_, i) => `/projects/living/living${i + 1}.jpg`
  ),

  Kitchen: Array.from(
    { length: 4 },
    (_, i) => `/projects/kitchen/kitchen${i + 1}.jpg`
  ),

  Office: Array.from(
    { length: 4 },
    (_, i) => `/projects/office/office${i + 1}.jpg`
  ),

  Dining: Array.from(
    { length: 4 },
    (_, i) => `/projects/dining/dine${i + 1}.jpg`
  ),

  Wardrobe: Array.from(
    { length: 5 },
    (_, i) => `/projects/wardrobe/wardrobe${i + 1}.jpg`
  ),
};

export default function Projects() {
  const [category, setCategory] =
    useState<keyof typeof catalog>("Bedroom");

  const [index, setIndex] = useState(0);

  const images = catalog[category] || [];

  // Reset index when category changes
  useEffect(() => {
    setIndex(0);
  }, [category]);

  // Auto slide (safe version)
  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const next = () => {
    if (!images.length) return;
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    if (!images.length) return;
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[index];

  return (
    <section
      id="designs"
      className="relative py-28 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white"
    >
      <h2 className="text-4xl md:text-5xl font-serif text-center mb-4 text-[#D4AF37]">
        Design Styles
      </h2>

      <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto">
        Explore our curated interior design styles across different spaces.
      </p>

      {/* CATEGORY BUTTONS */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {Object.keys(catalog).map((cat) => (
          <button
            key={cat}
            onClick={() =>
              setCategory(cat as keyof typeof catalog)
            }
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              category === cat
                ? "border-[#D4AF37] text-[#D4AF37]"
                : "border-white/20 text-white/70 hover:border-[#D4AF37]/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* IMAGE CAROUSEL */}
      <div className="relative max-w-5xl mx-auto px-6">

        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl">
          {currentImage ? (
            <Image
              src={currentImage}
              alt={`${category} interior`}
              width={1600}
              height={900}
              quality={100}
              className="w-full h-full object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-gray-400">
              No image available
            </div>
          )}
        </div>

        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute top-1/2 -left-6 -translate-y-1/2
          w-10 h-10 rounded-full bg-white/10 border border-white/20
          flex items-center justify-center hover:bg-white/20"
        >
          ‹
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute top-1/2 -right-6 -translate-y-1/2
          w-10 h-10 rounded-full bg-white/10 border border-white/20
          flex items-center justify-center hover:bg-white/20"
        >
          ›
        </button>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-6">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                i === index
                  ? "w-6 bg-[#D4AF37]"
                  : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
