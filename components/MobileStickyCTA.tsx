"use client";

import { PHONE_NUMBER } from "@/utils/constants";

export default function MobileStickyCTA() {
  return (
    <a
      href={`https://wa.me/${PHONE_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-pearl-gold/30 bg-gradient-to-r from-pearl-gold via-[#e8c84a] to-pearl-gold py-4 text-center text-sm font-semibold tracking-wide text-black shadow-[0_-4px_20px_rgba(0,0,0,0.4)] md:hidden"
    >
      Book a Private Design Consultation on WhatsApp
    </a>
  );
}
