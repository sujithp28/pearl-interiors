"use client";

import { motion } from "framer-motion";

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
    <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-yellow-500 mb-6">
          Interior Packages & Pricing
        </h2>
        <p className="text-gray-400 mb-16">
          Transparent pricing tailored for different home sizes and lifestyles.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`p-8 rounded-2xl border ${
                plan.highlight
                  ? "border-yellow-500 shadow-lg shadow-yellow-500/20"
                  : "border-gray-800"
              } bg-[#111]`}
            >
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">
                {plan.name}
              </h3>

              <p className="text-3xl font-bold mb-2">{plan.price}</p>
              <p className="text-gray-400 mb-6">{plan.subtitle}</p>

              <ul className="space-y-3 text-gray-300 mb-8">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>

              <a
                href="https://wa.me/919391045855"
                target="_blank"
                className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition"
              >
                Get Free Quote
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

