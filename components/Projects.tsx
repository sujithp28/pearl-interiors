"use client";
import { useState, useEffect, useRef } from "react";

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
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // AUTO SLIDE
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [category, index]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => next(), 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const next = () => {
    setIndex((prev) =>
      prev === catalog[category].length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? catalog[category].length - 1 : prev - 1
    );
  };

  // SWIPE HANDLERS
  const handleTouchStart = (e: React.TouchEvent) => {
    stopAutoSlide();
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) next(); // swipe left
    if (distance < -50) prev(); // swipe right

    startAutoSlide();
  };

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
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {Object.keys(catalog).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat as keyof typeof catalog);
              setIndex(0);
            }}
            className={`px-6 py-2 rounded-full border transition-all ${
              category === cat
                ? "border-[#D4AF37] text-[#D4AF37]"
                : "border-white/20 text-white/70"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ⭐ CAROUSEL */}
      <div className="relative max-w-4xl mx-auto px-6">

        <div
          className="overflow-hidden rounded-3xl luxury-card"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={catalog[category][index]}
            alt="Interior Design"
            className="w-full h-[420px] object-cover transition duration-700"
          />
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute top-1/2 -left-2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full"
        >
          ◀
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 -right-2 -translate-y-1/2 bg-black/60 px-3 py-2 rounded-full"
        >
          ▶
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {catalog[category].map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-[#D4AF37]" : "bg-white/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

