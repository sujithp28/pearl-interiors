export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-black text-white text-center">
      <h2 className="text-4xl font-serif text-[#D4AF37] mb-4">
        Schedule a Private Consultation
      </h2>

      <p className="text-gray-400 mb-6 max-w-xl mx-auto">
        Every project begins with a confidential design discussion. 
        We respect your privacy and craft each space exclusively for you.
      </p>

      <a
        href="https://wa.me/919391045855"
        className="inline-block mt-4 px-8 py-3 rounded-full
                   bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                   text-black font-medium
                   shadow-[0_0_25px_rgba(255,215,0,0.5)]
                   hover:shadow-[0_0_45px_rgba(255,215,0,0.9)]
                   hover:scale-105 transition-all duration-300"
      >
        Call / WhatsApp: +91 93910 45855
      </a>

      <p className="mt-6 text-xs text-gray-500 italic">
        All consultations are strictly confidential.
      </p>
    </section>
  );
}

