"use client";

export default function FloatingWhatsApp() {
  const phoneNumber = "919391045855"; // 🔴 Your real number

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
      className="
        hidden md:block
        fixed bottom-20 right-6 z-[999]
      "
    >
      <div
        className="
          flex items-center gap-3
          bg-black
          border border-[#D4AF37]
          px-5 py-3
          rounded-full
          shadow-[0_0_20px_rgba(212,175,55,0.4)]
          hover:shadow-[0_0_35px_rgba(212,175,55,0.8)]
          transition-all duration-300
        "
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-5 h-5"
        >
          <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.4 0 .02 5.38.02 12.04c0 2.12.55 4.18 1.6 5.99L0 24l6.18-1.62a12.03 12.03 0 005.88 1.5h.01c6.66 0 12.04-5.38 12.04-12.04 0-3.21-1.25-6.23-3.59-8.36zm-8.46 18.1h-.01a9.94 9.94 0 01-5.08-1.39l-.36-.21-3.67.96.98-3.58-.23-.37a9.9 9.9 0 01-1.53-5.35c0-5.49 4.47-9.96 9.97-9.96 2.66 0 5.16 1.04 7.03 2.91a9.88 9.88 0 012.92 7.05c0 5.49-4.47 9.96-9.97 9.96zm5.48-7.44c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35z" />
        </svg>

        <span className="text-[#D4AF37] font-medium">
          Chat with Designer
        </span>
      </div>
    </a>
  );
}
