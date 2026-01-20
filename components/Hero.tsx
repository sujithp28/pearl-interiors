export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white text-center px-4 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-serif mb-4 tracking-wide">
          Pearl Interiors
        </h1>

        <p className="max-w-xl mx-auto mb-6 text-gray-300">
          Designing spaces that reflect elegance, comfort, and timeless luxury.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <a
            href="#contact"
            className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
          >
            Schedule Your Design Consultation
          </a>
          <a
            href="#projects"
            className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
          >
            View Projects
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 text-sm text-gray-300">
          <div>
            <div className="text-lg font-semibold text-white">750+</div>
            Completed Luxury Interiors
          </div>
          <div>
            <div className="text-lg font-semibold text-white">5+ Years</div>
            Trusted Design Leadership
          </div>
          <div>
            <div className="text-lg font-semibold text-white">South India</div>
            AP · Telangana · Karnataka
          </div>
        </div>
      </div>
    </section>
  );
}

