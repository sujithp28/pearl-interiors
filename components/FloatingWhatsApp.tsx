"use client";

export default function FloatingWhatsApp() {
  const phoneNumber = "919391045855";

  const message =
    "Hi Pearl Interiors, I would like to discuss my interior project.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] group"
    >
      <div
        className="
          flex items-center gap-3
          bg-black
          border border-[#D4AF37]
          px-5 py-3
          rounded-full
          shadow-[0_0_18px_rgba(212,175,55,0.45)]
          hover:shadow-[0_0_35px_rgba(212,175,55,0.85)]
          transition-all duration-300
        "
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-5 h-5"
        >
          <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.4 0 .02 5.38.02 12.04c0 2.12.55 4.18 1.6 5.99L0 24l6.18-1.62a12.03 12.03 0 005.88 1.5h.01c6.66 0 12.04-5.38 12.04-12.04 0-3.21-1.25-6.23-3.59-8.36z" />
        </svg>

        <span className="text-[#D4AF37] font-medium hidden sm:inline">
          Chat with Designer
        </span>
      </div>
    </a>
  );
}
