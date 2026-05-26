"use client";

import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { PHONE_NUMBER } from "@/utils/constants";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";

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

  useBodyScrollLock(true);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
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

    const whatsappURL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappURL;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-start justify-center overflow-y-auto bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-form-title"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto mb-24 mt-24 w-full max-w-2xl animate-slideDown px-6"
      >
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-8 shadow-2xl">
          <button
            type="button"
            aria-label="Close form"
            onClick={onClose}
            className="absolute right-8 top-8 text-white/60 transition hover:text-white"
          >
            <XMarkIcon className="h-7 w-7" />
          </button>

          <h2
            id="consultation-form-title"
            className="mb-4 text-center font-serif text-3xl text-pearl-gold md:text-4xl"
          >
            Request a Private Design Consultation
          </h2>

          <p className="mb-10 text-center text-gray-400">
            Share a few details and our lead designer will connect with you.
            All information is treated with strict confidentiality.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="input-field"
            />

            <input
              name="city"
              type="text"
              placeholder="City"
              onChange={handleChange}
              required
              className="input-field"
            />

            <input
              name="phone"
              type="tel"
              placeholder="WhatsApp Number"
              onChange={handleChange}
              required
              className="input-field"
            />

            <select
              name="property"
              onChange={handleChange}
              required
              className="select-field"
              defaultValue=""
            >
              <option value="" disabled>
                Property Type
              </option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Office</option>
              <option>Commercial Space</option>
            </select>

            <select
              name="budget"
              onChange={handleChange}
              required
              className="select-field"
              defaultValue=""
            >
              <option value="" disabled>
                Estimated Budget
              </option>
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
              className="select-field"
              defaultValue=""
            >
              <option value="" disabled>
                Preferred Call Time
              </option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>

            <div className="mt-2 text-center md:col-span-2">
              <button type="submit" className="btn-primary px-10 py-3">
                Send on WhatsApp
              </button>

              <p className="mt-4 text-xs italic text-gray-500">
                Your details will never be shared. 100% private & secure.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
