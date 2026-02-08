"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much do home interiors cost in Hyderabad?",
    a: "Most 2–3BHK interior projects range between ₹4L – ₹7L depending on materials, scope, and customization.",
  },
  {
    q: "How long does interior work take?",
    a: "Typical project completion time is 45–60 days from design approval.",
  },
  {
    q: "Do you provide warranty?",
    a: "Yes. We provide up to 5 years warranty on modular kitchens and wardrobes.",
  },
  {
    q: "Do you offer EMI options?",
    a: "Yes. Flexible EMI plans are available for eligible customers.",
  },
  {
    q: "Do you work outside Hyderabad?",
    a: "Yes, we serve Hyderabad, Bangalore, Tirupati and nearby cities.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center font-serif text-yellow-500 mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-800 rounded-xl p-6 cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <span className="text-yellow-500 text-xl">
                  {open === i ? "−" : "+"}
                </span>
              </div>

              {open === i && (
                <p className="text-gray-400 mt-4">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

