"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import SectionHeader from "@/components/SectionHeader";

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
  const [category, setCategory] = useState<keyof typeof catalog>("Bedroom");
  const [index, setIndex] = useState(0);

  const images = catalog[category];

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
      className="relative bg-gradient-to-b from-zinc-900 via-black to-zinc-900 py-28 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Portfolio"
          title="Design Styles"
          subtitle="Explore our curated interior design styles across different spaces."
        />

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {Object.keys(catalog).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setCategory(cat as keyof typeof catalog);
                setIndex(0);
              }}
              className={`rounded-full border px-5 py-2 text-sm transition-all duration-300 ${
                category === cat
                  ? "border-pearl-gold bg-pearl-gold/10 text-pearl-gold"
                  : "border-white/20 text-white/70 hover:border-pearl-gold/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence mode="wait">
              {currentImage ? (
                <motion.div
                  key={`${category}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentImage}
                    alt={`${category} interior design ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    quality={90}
                    className="object-cover"
                    priority={index === 0}
                  />
                </motion.div>
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-gray-400">
                  No image available
                </div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-sm transition hover:bg-black/70 md:left-4"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={next}
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-sm transition hover:bg-black/70 md:right-4"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-pearl-gold" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
