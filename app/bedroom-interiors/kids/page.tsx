import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function KidsBedroomPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">
            Modern & Safe Kids Bedroom Interior Designs
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Create a fun, safe, and inspiring space for your child with Pearl Interiors.
            We design kids bedrooms that combine creativity, storage, study areas,
            and child-safe materials with long-lasting quality.
          </p>

          <a
            href="https://wa.me/919391045855"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                       text-black font-medium shadow-[0_0_25px_rgba(255,215,0,0.6)]
                       hover:shadow-[0_0_45px_rgba(255,215,0,0.9)]
                       hover:scale-105 transition-all duration-300"
          >
            Talk to Our Kids Bedroom Design Expert
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-8 text-center">
            Kids Bedroom Design Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }, (_, i) => (
              <img
                key={i}
                src={`/projects/bedrooms/kids/kids${i + 1}.jpg`}
                alt="Kids Bedroom Interior Design"
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
              What We Design in a Kids Bedroom
            </h2>
            <ul className="text-gray-300 space-y-3">
              <li>✔ Child-safe furniture & rounded edges</li>
              <li>✔ Study tables & ergonomic seating</li>
              <li>✔ Theme-based wall designs & colors</li>
              <li>✔ Smart toy storage & wardrobes</li>
              <li>✔ Soft lighting for reading & sleep</li>
              <li>✔ Durable, easy-to-clean materials</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
              Our Design & Execution Process
            </h2>
            <ol className="text-gray-300 space-y-2">
              <li>1. Understanding child’s age & lifestyle</li>
              <li>2. Layout planning with study & play zones</li>
              <li>3. 3D visualization & theme finalization</li>
              <li>4. Safe material selection & execution</li>
              <li>5. Final installation & handover</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
            Why Choose Pearl Interiors for Kids Bedroom Design?
          </h2>
          <p className="text-gray-300 mb-6">
            We design kids bedrooms that grow with your child, balancing safety,
            creativity, comfort, and functionality with long-term durability.
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>✔ Child-Safe & Eco-Friendly Materials</li>
            <li>✔ Customized Themes & Layouts</li>
            <li>✔ Smart Storage Solutions</li>
            <li>✔ On-Time Delivery</li>
            <li>✔ Complete Client Privacy</li>
          </ul>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}

