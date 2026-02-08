"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul Reddy",
    city: "Hyderabad",
    text: "Pearl Interiors completed our 3BHK in just 40 days. The quality and finishing exceeded expectations!",
  },
  {
    name: "Sneha Kapoor",
    city: "Bangalore",
    text: "From design to execution, the process was smooth and completely transparent. Highly recommended.",
  },
  {
    name: "Karthik Varma",
    city: "Tirupati",
    text: "Loved the modular kitchen and wardrobes. Perfect blend of luxury and functionality.",
  },
  {
    name: "Ananya Sharma",
    city: "Hyderabad",
    text: "Professional team, on-time delivery and amazing attention to detail. Worth every rupee.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-yellow-500 mb-6">
          What Our Clients Say
        </h2>

        <p className="text-gray-400 mb-16">
          Trusted by homeowners across Hyderabad, Bangalore & Tirupati.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-[#111] border border-gray-800 p-6 rounded-2xl"
            >
              <div className="text-yellow-500 text-xl mb-3">★★★★★</div>

              <p className="text-gray-300 mb-6">“{review.text}”</p>

              <div className="text-yellow-500 font-semibold">
                {review.name}
              </div>
              <div className="text-gray-500 text-sm">{review.city}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

