"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import { PHONE_NUMBER } from "@/utils/constants";
import SectionHeader from "@/components/SectionHeader";

const plans = [
  {
    name: "Essential Package",
    price: "₹2.5L – ₹3.5L",
    subtitle: "Perfect for 1BHK Apartments",
    features: [
      "Modular Kitchen",
      "Wardrobes (2 Rooms)",
      "TV Unit",
      "Basic False Ceiling",
      "45 Days Delivery",
    ],
  },
  {
    name: "Premium Package",
    price: "₹4L – ₹6.5L",
    subtitle: "Ideal for 2–3BHK Homes",
    features: [
      "Everything in Essential",
      "Premium Modular Kitchen",
      "Wardrobes (All Rooms)",
      "Designer False Ceiling",
      "Lighting & Decor",
      "50 Days Delivery",
    ],
    highlight: true,
  },
  {
    name: "Luxury Package",
    price: "₹7L+",
    subtitle: "Villas & High-End Homes",
    features: [
      "Fully Custom Interiors",
      "Luxury Materials",
      "Smart Storage Solutions",
      "Premium Lighting Design",
      "Complete Home Styling",
      "60 Days Delivery",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gradient-to-b from-black to-pearl-dark py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionHeader
          eyebrow="Packages"
          title="Interior Packages & Pricing"
          subtitle="Indicative starting ranges for different home sizes and lifestyles."
        />

        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-2xl border bg-[#111] p-8 ${
                plan.highlight
                  ? "border-pearl-gold shadow-lg shadow-pearl-gold/20"
                  : "border-gray-800"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-pearl-gold px-4 py-1 text-xs font-bold uppercase tracking-wide text-black">
                  Most Popular
                </span>
              )}

              <h3 className="mb-2 text-2xl font-semibold text-pearl-gold">{plan.name}</h3>
              <p className="mb-2 text-3xl font-bold">{plan.price}</p>
              <p className="mb-6 text-gray-400">{plan.subtitle}</p>

              <ul className="mb-8 space-y-3 text-left text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-pearl-gold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Get Free Quote
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-sm leading-relaxed text-gray-500">
          Final pricing depends on site measurements, material selection, hardware brands,
          finish complexity, civil/electrical scope, and customization requirements.
        </p>
      </div>
    </section>
  );
}
