"use client";

import { PHONE_NUMBER, DISPLAY_PHONE } from "@/utils/constants";

export default function Contact() {
  return (
    <section className="py-20 bg-black text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-4">
        Schedule a Private Consultation
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto mb-8">
        Every project begins with a confidential design discussion. We respect your
        privacy and craft each space exclusively for you.
      </p>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${PHONE_NUMBER}?text=Hi%20I%20am%20interested%20in%20interior%20design`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-500 text-black font-medium px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
      >
        Call / WhatsApp: {DISPLAY_PHONE}
      </a>

      <p className="text-gray-500 text-sm mt-4">
        All consultations are strictly confidential.
      </p>
    </section>
  );
}
