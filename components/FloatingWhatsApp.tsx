"use client";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%20Pearl%20Interiors%20I%20want%20consultation"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-4 right-4 
        sm:bottom-6 sm:right-6
        z-[9999] 
        flex items-center gap-2
        bg-green-500 hover:bg-green-600
        text-white font-semibold
        px-4 py-3 rounded-full
        shadow-2xl
        transition-all duration-300
      "
    >
      <span className="text-lg">💬</span>
      <span className="hidden sm:inline">Chat with Designer</span>
    </a>
  );
}

