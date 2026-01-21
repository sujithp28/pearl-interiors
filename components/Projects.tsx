"use client";
import { useState } from "react";

const bedroomSets: Record<string, string[]> = {
  Master: Array.from({ length: 4 }, (_, i) => `/projects/bedrooms/master/master${i + 1}.jpg`),
  Couple: Array.from({ length: 4 }, (_, i) => `/projects/bedrooms/couple/couple${i + 1}.jpg`),
  Kids: Array.from({ length: 4 }, (_, i) => `/projects/bedrooms/kids/kids${i + 1}.jpg`),
  Senior: Array.from({ length: 4 }, (_, i) => `/projects/bedrooms/senior/senior${i + 1}.jpg`),
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Bedroom");
  const [bedroomType, setBedroomType] = useState("Master");

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

      {/* Main Category Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {["Living", "Kitchen", "Bedroom", "Office", "Dining", "Wardrobe"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full border transition-all ${
              activeTab === tab
                ? "border-[#D4AF37] text-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                : "border-white/20 text-white/70"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Bedroom Sub Tabs */}
      {activeTab === "Bedroom" && (
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {["Master", "Couple", "Kids", "Senior"].map((type) => (
            <button
              key={type}
              onClick={() => setBedroomType(type)}
              className={`px-5 py-2 rounded-full border-2 text-sm tracking-wide transition-all ${
                bedroomType === type
                  ? "border-[#D4AF37] text-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                  : "border-white/20 text-white/70"
              }`}
            >
              {type} Bedroom
            </button>
          ))}
        </div>
      )}

      {/* Image Grid */}
      <div className="projects-grid">
        {bedroomSets[bedroomType].map((img, i) => (
          <div key={i} className="project-card luxury-card relative">
            <div className="project-image-wrapper">
              <img src={img} alt={bedroomType} className="project-image" />
            </div>
            <div className="project-title text-white">{bedroomType} Bedroom</div>

            <span className="absolute bottom-3 right-3 text-[11px] bg-black/70 text-[#D4AF37] px-2 py-1 rounded-full tracking-wide">
              Concept Design
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

