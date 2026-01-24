import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function CoupleBedroomPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">
            Modern & Luxury Couple Bedroom Interior Designs
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Create a warm, romantic, and comfortable bedroom designed specially for couples.
            Pearl Interiors designs elegant couple bedrooms with premium wardrobes, soft lighting,
            vastu-friendly layouts, and customized finishes that balance beauty and functionality.
          </p>

          <a
            href="https://wa.me/919391045855"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                       text-black font-medium shadow-[0_0_25px_rgba(255,215,0,0.6)]
                       hover:shadow-[0_0_45px_rgba(255,215,0,0.9)]
                       hover:scale-105 transition-all duration-300"
          >
            Talk to Our Bedroom Design Expert
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-8 text-center">
            Couple Bedroom Design Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }, (_, i) => (
              <img
                key={i}
                src={`/projects/bedrooms/couple/couple${i + 1}.jpg`}
                alt="Couple Bedroom Interior Design"
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
              What We Design in a Couple Bedroom
            </h2>
            <ul className="text-gray-300 space-y-3">
              <li>✔ Soft lighting & mood-enhancing ceiling designs</li>
              <li>✔ Custom wardrobes & dressing units</li>
              <li>✔ Elegant bed back panels & wall textures</li>
              <li>✔ Vastu-compliant planning</li>
              <li>✔ Space-saving storage solutions</li>
              <li>✔ Premium flooring & curtains</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
              Our Execution Process
            </h2>
            <ol className="text-gray-300 space-y-2">
              <li>1. Requirement Discussion & Layout Planning</li>
              <li>2. 3D Visualization & Design Finalization</li>
              <li>3. Material & Finish Selection</li>
              <li>4. Site Execution & Quality Checks</li>
              <li>5. Final Styling & Handover</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
            Why Choose Pearl Interiors for Couple Bedroom Design?
          </h2>
          <p className="text-gray-300 mb-6">
            We design couple bedrooms that combine comfort, elegance, and long-lasting quality.
            Every project is executed with complete privacy, premium materials, and on-time delivery.
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>✔ Customized Designs for Couples</li>
            <li>✔ Branded Materials & Fittings</li>
            <li>✔ Transparent Pricing</li>
            <li>✔ On-Time Completion</li>
            <li>✔ 100% Client Confidentiality</li>
          </ul>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}

