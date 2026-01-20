export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white text-center px-4"
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-serif mb-4">Pearl Interiors</h1>

        <p className="max-w-xl mx-auto mb-6">
          Designing spaces that reflect elegance, comfort, and timeless luxury.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <a href="#contact" className="bg-white text-black px-6 py-2 rounded">
            Book a Design Consultation
          </a>
          <a href="#projects" className="border border-white px-6 py-2 rounded">
            View Projects
          </a>
        </div>

        {/* Luxury Trust Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-white/80">
          <div>
            <div className="text-xl font-semibold">750+</div>
            <div>Completed Luxury Interiors</div>
          </div>

          <div>
            <div className="text-xl font-semibold">5 Years</div>
            <div>Trusted Design Leadership</div>
          </div>

          <div>
            <div className="text-xl font-semibold">South India</div>
            <div>AP · Telangana · Karnataka</div>
          </div>
        </div>
      </div>
    </section>
  );
}

