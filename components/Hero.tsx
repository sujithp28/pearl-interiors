export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white text-center px-4">
      <div>
        <h1 className="text-4xl md:text-6xl font-serif mb-4">Pearl Interiors</h1>
        <p className="max-w-xl mx-auto mb-6">
          Designing spaces that reflect elegance, comfort, and timeless luxury.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="bg-white text-black px-6 py-2 rounded">
            Get Free Consultation
          </a>
          <a href="#projects" className="border border-white px-6 py-2 rounded">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

