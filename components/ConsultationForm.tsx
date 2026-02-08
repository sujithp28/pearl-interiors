"use client";
import { useState } from "react";

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    project: "",
    budget: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 📲 Send form to WhatsApp
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `New Consultation Request:
Name: ${form.name}
Phone: ${form.phone}
Project Type: ${form.project}
Budget: ${form.budget}
Preferred Time: ${form.time}`;

    const whatsappURL = `https://wa.me/919391045855?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="consultation"
      className="py-24 bg-gradient-to-b from-black to-zinc-900 text-white"
    >
      <div className="max-w-2xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] text-center mb-6">
          Schedule a Private Consultation
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Share a few details and our lead designer will contact you on WhatsApp.
          All information is strictly confidential.
        </p>

        <form
          onSubmit={handleWhatsAppSubmit}
          className="space-y-6 bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
        >
          {/* Name */}
          <input
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full p-4 bg-black border border-white/10 rounded-lg"
          />

          {/* Phone */}
          <input
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full p-4 bg-black border border-white/10 rounded-lg"
          />

          {/* Project Type */}
          <select
            name="project"
            required
            onChange={handleChange}
            className="w-full p-4 bg-black border border-white/10 rounded-lg"
          >
            <option value="">Project Type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Office</option>
            <option>Kitchen</option>
            <option>Full Home</option>
          </select>

          {/* Budget */}
          <select
            name="budget"
            required
            onChange={handleChange}
            className="w-full p-4 bg-black border border-white/10 rounded-lg"
          >
            <option value="">Budget Range</option>
            <option>Below ₹2L</option>
            <option>₹2L – ₹5L</option>
            <option>₹5L – ₹10L</option>
            <option>₹10L+</option>
          </select>

          {/* Time */}
          <select
            name="time"
            required
            onChange={handleChange}
            className="w-full p-4 bg-black border border-white/10 rounded-lg"
          >
            <option value="">Preferred Contact Time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#D4AF37] text-black font-semibold py-4 rounded-full text-lg hover:scale-105 transition"
          >
            Send Details on WhatsApp
          </button>
        </form>

      </div>
    </section>
  );
}

