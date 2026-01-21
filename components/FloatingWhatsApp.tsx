"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919391045855"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2
                 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg
                 hover:bg-green-600 hover:scale-105 transition-all duration-300"
    >
      <FaWhatsapp className="text-xl" />
      <span className="hidden md:inline font-medium">Chat with Designer</span>
    </a>
  );
}

