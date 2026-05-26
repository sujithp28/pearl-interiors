"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import SectionHeader from "@/components/SectionHeader";

const faqs = [
  {
    q: "How much do home interiors cost?",
    a: "Most 2–3BHK interior projects range between ₹4L – ₹7L depending on materials, scope, and customization.",
  },
  {
    q: "How long does an interior project take?",
    a: "Most apartment interiors are completed within 45–60 days after final design approval. Larger villas, custom furniture, or commercial projects may take longer depending on scope, materials, and site readiness.",
  },
  {
    q: "Do you provide warranty?",
    a: "Yes. We provide up to 15 years warranty on modular kitchens and wardrobes.",
  },
  {
    q: "Do you offer EMI options?",
    a: "Yes. Flexible EMI plans are available for eligible customers.",
  },
  {
    q: "Which cities do you serve?",
    a: "We currently work in Anantapur, Hyderabad, Bangalore, and Tirupati.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-b from-pearl-dark to-black py-24 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="Questions"
          title="Frequently Asked Questions"
          className="mb-16"
        />

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;

            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-gray-800 bg-white/[0.02] transition-colors hover:border-pearl-gold/30"
              >
                <button
                  type="button"
                  id={`faq-trigger-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <h3 className="text-lg font-semibold">{item.q}</h3>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-pearl-gold transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-400 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
