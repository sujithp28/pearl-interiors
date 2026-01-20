"use client";
import { useState } from "react";

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    city: "",
    phone: "",
    property: "",
    budget: "",
    time: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const message = `New Private Consultation Request

Name: ${form.name}
City: ${form.city}
WhatsApp: ${form.phone}
Property Type: ${form.property}
Budget: ${form.budget}
Preferred Call Time: ${form.time}`;

    const whatsappURL = `https://wa.me/919391045855?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900 to-black text-white">
      <h2 className="text-4xl font-serif text-center text-[#D4AF37] mb-4">
        Request a Private Design Consultation
      </h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
        Share a few details and our lead designer will connect with you.
        All information is treated with strict confidentiality.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6"
      >
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          className="bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-[#D4AF37]"
        />

        <input
          name="city"
          type="text"
          placeholder="City"
          onChange={handleChange}
          className="bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-[#D4AF37]"
        />

        <input
          name="phone"
          type="tel"
          placeholder="WhatsApp Number"
          onChange={handleChange}
          className="bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-[#D4AF37]"
        />

        <select
          name="property"
          onChange={handleChange}
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
          className="bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-[#D4AF37]"
        >
          <option value="">Preferred Call Time</option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>

        <div className="md:col-span-2 text-center mt-6">
          <button
            type="submit"
            className="px-10 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                       text-black font-medium shadow-[0_0_25px_rgba(255,215,0,0.6)]
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
    </section>
  );
}

