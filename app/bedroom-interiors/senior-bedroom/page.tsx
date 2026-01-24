import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function SeniorBedroomPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">
            Comfortable & Senior-Friendly Bedroom Interior Designs
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Create a calm, safe, and comfortable bedroom for elders with Pearl Interiors.
            We design senior-friendly bedrooms focusing on easy movement, soft lighting,
            ergonomic furniture, and clutter-free layouts for long-term comfort.
          </p>

          <a
            href="https://wa.me/919391045855"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                       text-black font-medium shadow-[0_0_25px_rgba(255,215,0,0.6)]
                       hover:shadow-[0_0_45px_rgba(255,215,0,0.9)]
                       hover:scale-105 transition-all duration-300"
          >
            Talk to Our Senior Bedroom Design Expert
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-8 text-center">
            Senior Bedroom Design Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }, (_, i) => (
              <img
                key={i}
                src={`/projects/bedrooms/senior/senior${i + 1}.jpg`}
                alt="Senior Bedroom Interior Design"
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
              What We Design in a Senior Bedroom
            </h2>
            <ul className="text-gray-300 space-y-3">
              <li>✔ Easy-access wardrobes & low-height storage</li>
              <li>✔ Anti-skid flooring & soft carpets</li>
              <li>✔ Comfortable bed height & side tables</li>
              <li>✔ Proper night lighting & reading lights</li>
              <li>✔ Grab-handle friendly layout planning</li>
              <li>✔ Calm colors & minimal clutter</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
              Our Design & Execution Process
            </h2>
            <ol className="text-gray-300 space-y-2">
              <li>1. Understanding mobility & comfort needs</li>
              <li>2. Layout planning for safety & circulation</li>
              <li>3. 3D visualization & material selection</li>
              <li>4. Execution with safety-focused fittings</li>
              <li>5. Final inspection & handover</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
            Why Choose Pearl Interiors for Senior Bedroom Design?
          </h2>
          <p className="text-gray-300 mb-6">
            We design senior bedrooms with special care for safety, comfort, and ease of use,
            while maintaining a warm and elegant look that feels like home.
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>✔ Safety-Oriented Design</li>
            <li>✔ Comfortable & Ergonomic Furniture</li>
            <li>✔ Premium Yet Soothing Materials</li>
            <li>✔ On-Time Delivery</li>
            <li>✔ Complete Client Confidentiality</li>
          </ul>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}

