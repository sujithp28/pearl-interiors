import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function MasterBedroomPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">
            Modern & Luxury Master Bedroom Interior Designs
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Create a peaceful, elegant, and functional master bedroom with Pearl Interiors.
            We design premium master bedrooms with customized wardrobes, lighting, false ceilings,
            vastu-aligned layouts, and luxury finishes tailored to your lifestyle.
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
            Master Bedroom Design Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }, (_, i) => (
              <img
                key={i}
                src={`/projects/bedrooms/master/master${i + 1}.jpg`}
                alt="Master Bedroom Interior Design"
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
              What We Design in a Master Bedroom
            </h2>
            <ul className="text-gray-300 space-y-3">
              <li>✔ Custom wardrobes & walk-in closets</li>
              <li>✔ Premium bed back panels & wall cladding</li>
              <li>✔ False ceiling & layered lighting</li>
              <li>✔ Vastu-compliant layout planning</li>
              <li>✔ Luxury flooring & soft furnishings</li>
              <li>✔ Smart storage & space optimization</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
              Our Execution Process
            </h2>
            <ol className="text-gray-300 space-y-2">
              <li>1. Design Consultation & Requirement Study</li>
              <li>2. 2D Layout & 3D Visualization</li>
              <li>3. Material Selection & Final Approval</li>
              <li>4. Site Execution & Quality Control</li>
              <li>5. Final Styling & Handover</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
            Why Choose Pearl Interiors for Your Master Bedroom?
          </h2>
          <p className="text-gray-300 mb-6">
            We combine design aesthetics with comfort, functionality, and long-term durability.
            Every master bedroom is designed with complete privacy, premium materials,
            and precise execution.
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>✔ 100% Customized Designs</li>
            <li>✔ Premium Branded Materials</li>
            <li>✔ On-Time Project Delivery</li>
            <li>✔ Transparent Pricing</li>
            <li>✔ Strict Client Confidentiality</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-[#D4AF37] text-center mb-8">
            Master Bedroom Interior Design – FAQs
          </h2>

          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white">How much does a master bedroom interior cost?</h3>
              <p>
                The cost depends on size, materials, wardrobes, and finishes. Typical budgets range
                from ₹2 Lakhs to ₹10 Lakhs and above based on customization.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Do you provide complete turnkey execution?</h3>
              <p>
                Yes, we handle everything from design, materials, carpentry, lighting,
                electrical, and final installation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Can you design as per vastu?</h3>
              <p>
                Yes, all layouts can be planned as per vastu guidelines if required.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Is client privacy maintained?</h3>
              <p>
                Absolutely. We never display real client bedrooms publicly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a master bedroom interior cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Master bedroom interiors typically range from ₹2 Lakhs to ₹10 Lakhs and above depending on design and materials."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide turnkey execution?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Pearl Interiors provides complete turnkey design and execution."
                }
              },
              {
                "@type": "Question",
                "name": "Do you follow vastu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all layouts can be planned as per vastu guidelines."
                }
              },
              {
                "@type": "Question",
                "name": "Is client privacy maintained?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all client projects are handled with strict confidentiality."
                }
              }
            ]
          })
        }}
      />

      <Contact />
      <Footer />
    </>
  );
}

