"use client";
import { useState } from "react";
import Link from "next/link";

const catalog = {
  Bedroom: {
    sub: ["Master", "Couple", "Kids", "Senior"],
    images: {
      Master: Array.from({ length: 4 }, (_, i) => `/projects/bedrooms/master/master${i + 1}.jpg`),
      Couple: Array.from({ length: 4 }, (_, i) => `/projects/bedrooms/couple/couple${i + 1}.jpg`),
      Kids: Array.from({ length: 4 }, (_, i) => `/projects/bedrooms/kids/kids${i + 1}.jpg`),
      Senior: Array.from({ length: 4 }, (_, i) => `/projects/bedrooms/senior/senior${i + 1}.jpg`),
    },
  },
  Living: { sub: [], images: {} },
  Kitchen: { sub: [], images: {} },
  Office: { sub: [], images: {} },
  Dining: { sub: [], images: {} },
  Wardrobe: { sub: [], images: {} },
};

const bedroomLinks: Record<string, string> = {
  Master: "/bedroom-interiors/master-bedroom",
  Couple: "/bedroom-interiors/couple-bedroom",
  Kids: "/bedroom-interiors/kids-bedroom",
  Senior: "/bedroom-interiors/senior-bedroom",
};

export default function Projects() {
  const [category, setCategory] = useState<keyof typeof catalog>("Bedroom");
  const [subCategory, setSubCategory] = useState("Master");

  const currentImages =
    category === "Bedroom"
      ? catalog.Bedroom.images[subCategory as keyof typeof catalog.Bedroom.images]
      : [];

  return (
    <section
      id="designs"
      className="py-24 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white"
    >
      <h2 className="text-4xl font-serif text-center mb-3 text-[#D4AF37]">
        Design Inspirations
      </h2>

      <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
        Curated concept visuals representing our design language. Client projects remain private.
      </p>

      {/* Main Categories */}
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {Object.keys(catalog).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat as any);
              if (cat === "Bedroom") setSubCategory("Master");
            }}
            className={`px-5 py-2 rounded-full border transition-all ${
              category === cat
                ? "border-[#D4AF37] text-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                : "border-white/20 text-white/70"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Bedroom Sub Categories (All Linked) */}
      {catalog[category].sub.length > 0 && (
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {catalog[category].sub.map((sub) => (
            <Link key={sub} href={bedroomLinks[sub]}>
              <div
                onClick={() => setSubCategory(sub)}
                className={`px-5 py-2 rounded-full border-2 text-sm tracking-wide cursor-pointer transition-all ${
                  subCategory === sub
                    ? "border-[#D4AF37] text-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                    : "border-white/20 text-white/70 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}
              >
                {sub} Bedroom
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Image Grid (Preview Only) */}
      <div className="projects-grid">
        {currentImages.map((img, i) => (
          <div key={i} className="project-card luxury-card relative">
            <div className="project-image-wrapper">
              <img src={img} alt={subCategory} className="project-image" />
            </div>
            <div className="project-title text-white">
              {subCategory} Bedroom
            </div>
            <span className="absolute bottom-3 right-3 text-[11px] bg-black/70 text-[#D4AF37] px-2 py-1 rounded-full tracking-wide">
              Concept Design
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}