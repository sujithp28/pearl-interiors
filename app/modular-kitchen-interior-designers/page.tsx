import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ModularKitchenPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">
            Luxury Modular Kitchen Interior Designers in Hyderabad & Bangalore
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Pearl Interiors designs premium modular kitchens with high-quality
            cabinets, soft-close hardware, quartz & granite countertops,
            space-optimized layouts, and complete turnkey execution.
          </p>

          <a
            href="https://wa.me/919391045855"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                       text-black font-medium shadow-[0_0_25px_rgba(255,215,0,0.6)]
                       hover:shadow-[0_0_45px_rgba(255,215,0,0.9)]
                       hover:scale-105 transition-all duration-300"
          >
            Get Modular Kitchen Design Consultation
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-8 text-center">
            Modular Kitchen Design Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }, (_, i) => (
              <img
                key={i}
                src={`/projects/kitchen/kitchen${i + 1}.jpg`}
                alt="Modular Kitchen Design"
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
              Types of Modular Kitchens We Design
            </h2>
            <ul className="text-gray-300 space-y-3">
              <li>✔ L-Shaped Modular Kitchen</li>
              <li>✔ U-Shaped Modular Kitchen</li>
              <li>✔ Parallel Kitchen</li>
              <li>✔ Island Kitchen</li>
              <li>✔ Straight Kitchen</li>
              <li>✔ Open Kitchen with Breakfast Counter</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
              What We Provide
            </h2>
            <ul className="text-gray-300 space-y-3">
              <li>✔ Soft-close hinges & channels</li>
              <li>✔ Premium plywood & HDHMR boards</li>
              <li>✔ Quartz / Granite countertops</li>
              <li>✔ Branded accessories (Hettich, Hafele, Blum)</li>
              <li>✔ Chimney, Hob & Built-in Appliances</li>
              <li>✔ Complete Turnkey Execution</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
            Why Choose Pearl Interiors for Modular Kitchen?
          </h2>
          <p className="text-gray-300 mb-6">
            We design kitchens that combine beauty, functionality, and durability,
            customized for your cooking style, storage needs, and budget.
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>✔ Customized Layouts & 3D Designs</li>
            <li>✔ Factory Finish Cabinets</li>
            <li>✔ Transparent Pricing</li>
            <li>✔ On-Time Installation</li>
            <li>✔ 100% Client Confidentiality</li>
          </ul>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}

