"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Lightbox from "@/components/Lightbox";
import { blurMap } from "@/utils/blurData";

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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = catalog[category];

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i - 1 + images.length) % images.length
      ),
    [images.length]
  );

  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  return (
    <section
      id="designs"
      className="relative bg-gradient-to-b from-zinc-900 via-black to-zinc-900 py-16 text-white"
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
              onClick={() => setCategory(cat as keyof typeof catalog)}
              aria-pressed={category === cat}
              className={`rounded-full border px-5 py-3 text-sm transition-all duration-300 ${
                category === cat
                  ? "border-pearl-gold bg-pearl-gold/10 text-pearl-gold"
                  : "border-white/20 text-white/70 hover:border-pearl-gold/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {images.length ? (
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((src, i) => (
              <li key={src}>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View ${category} interior design ${i + 1} full screen`}
                  className="luxury-card group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                >
                  <Image
                    src={src}
                    alt={`${category} interior design ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                    placeholder="blur"
                    blurDataURL={blurMap[src]}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    priority={i === 0}
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute bottom-4 left-4 text-sm tracking-wide text-pearl-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View full screen
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-zinc-800 text-gray-400">
            No image available
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          label={category}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </section>
  );
}
