"use client";

import { useState, useEffect } from "react";

type Props = {
  onClose: () => void;
};

export default function ConsultationForm({ onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    city: "",
    phone: "",
    property: "",
    budget: "",
    time: "",
  });

  // 🔒 Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `✨ *New Private Consultation Request*

👤 Name: ${form.name}
📍 City: ${form.city}
📱 WhatsApp: ${form.phone}
🏠 Property Type: ${form.property}
💰 Budget: ${form.budget}
⏰ Preferred Call Time: ${form.time}

— Pearl Interiors Website Lead`;

    const whatsappURL = `https://wa.me/9391045855?text=${encodeURIComponent(
      message
    )}`;

    // ✅ Direct redirect (no popup blocker issue)
    window.location.href = whatsappURL;

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-start justify-center overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative mt-24 mb-24 w-full max-w-2xl mx-auto px-6 animate-slideDown"
      >
        <div className="bg-gradient-to-b from-zinc-900 to-black border border-white/10 rounded-2xl p-8 shadow-2xl">

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute right-8 top-8 text-white/60 hover:text-white text-2xl"
          >
            ✕
          </button>

          <h2 className="text-3xl md:text-4xl font-serif text-center text-[#D4AF37] mb-4">
            Request a Private Design Consultation
          </h2>

          <p className="text-center text-gray-400 mb-10">
            Share a few details and our lead designer will connect with you.
            All information is treated with strict confidentiality.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-[#D4AF37]"
            />

            <input
              name="city"
              type="text"
              placeholder="City"
              onChange={handleChange}
              required
              className="bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-[#D4AF37]"
            />

            <input
              name="phone"
              type="tel"
              placeholder="WhatsApp Number"
              onChange={handleChange}
              required
              className="bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-[#D4AF37]"
            />

            <select
              name="property"
              onChange={handleChange}
              required
              className="bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="">Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Office</option>
              <option>Commercial Space</option>
            </select>

            <select
              name="budget"
              onChange={handleChange}
              required
              className="bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="">Estimated Budget</option>
              <option>Below ₹2L</option>
              <option>₹2L – ₹5L</option>
              <option>₹5L – ₹10L</option>
              <option>₹10L – ₹20L</option>
              <option>₹20L – ₹40L</option>
              <option>₹40L – ₹75L</option>
              <option>₹75L+</option>
            </select>

            <select
              name="time"
              onChange={handleChange}
              required
              className="bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="">Preferred Call Time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>

            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="px-10 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                text-black font-semibold shadow-[0_0_25px_rgba(255,215,0,0.6)]
                hover:shadow-[0_0_45px_rgba(255,215,0,0.9)]
                hover:scale-105 transition-all duration-300"
              >
                Send on WhatsApp
              </button>

              <p className="mt-4 text-xs text-gray-500 italic">
                Your details will never be shared. 100% private & secure.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
