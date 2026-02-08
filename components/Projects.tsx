"use client";
import { useState } from "react";

const catalog: Record<string, string[]> = {
  Bedroom: Array.from({ length: 4 }, (_, i) => `/projects/bedrooms/bedroom${i + 1}.jpg`),
  Living: Array.from({ length: 4 }, (_, i) => `/projects/living/living${i + 1}.jpg`),
  Kitchen: Array.from({ length: 4 }, (_, i) => `/projects/kitchen/kitchen${i + 1}.jpg`),
  Office: Array.from({ length: 4 }, (_, i) => `/projects/office/office${i + 1}.jpg`),
  Dining: Array.from({ length: 4 }, (_, i) => `/projects/dining/dining${i + 1}.jpg`),
  Wardrobe: Array.from({ length: 4 }, (_, i) => `/projects/wardrobe/wardrobe${i + 1}.jpg`),
};

export default function Projects() {
  const [category, setCategory] = useState<keyof typeof catalog>("Bedroom");

  return (
    <section
      id="designs"
      className="scroll-mt-28 py-24 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white"
    >
      <h2 className="text-4xl font-serif text-center mb-3 text-[#D4AF37]">
        Design Styles
      </h2>

      <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
        Explore our curated interior design styles across different spaces.
      </p>

      {/* Category Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-12 px-4">
        {Object.keys(catalog).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat as keyof typeof catalog)}
            className={`px-5 py-2 rounded-full border transition-all text-sm md:text-base ${
              category === cat
                ? "border-[#D4AF37] text-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                : "border-white/20 text-white/70 hover:border-[#D4AF37]/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ⭐ RESPONSIVE IMAGE GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {catalog[category].map((img, i) => (
          <div
            key={i}
            className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden group"
          >
            {/* Image wrapper with fixed ratio */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <img
                src={img}
                alt={`${category} design ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Caption */}
            <div className="p-4">
              <h3 className="text-[#D4AF37] font-semibold">{category}</h3>
              <p className="text-xs text-gray-400">Luxury Concept Design</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

