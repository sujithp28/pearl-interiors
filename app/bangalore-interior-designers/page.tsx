import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function BangaloreSEOPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">
            Professional Turnkey Interior Designers in Bangalore
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Pearl Interiors is a professional turnkey interior design studio in Bangalore,
            delivering end-to-end solutions for apartments, villas, modular kitchens, and
            commercial interiors. We ensure premium quality, structured execution, on-time
            delivery, and complete client confidentiality.
          </p>

          <a
            href="https://wa.me/919391045855"
            className="inline-block mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                       text-black font-medium shadow-[0_0_25px_rgba(255,215,0,0.6)]
                       hover:shadow-[0_0_45px_rgba(255,215,0,0.9)]
                       hover:scale-105 transition-all duration-300"
          >
            Talk to Our Bangalore Design Expert
          </a>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
            Serving Prime Locations Across Bangalore
          </h2>
          <p className="text-gray-400">
            Whitefield, Sarjapur Road, Electronic City, HSR Layout, Koramangala,
            Indiranagar, Yelahanka, Hebbal, Devanahalli, and surrounding areas.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl text-[#D4AF37] mb-2">Apartment Interior Designers in Bangalore</h3>
            <p className="text-gray-400">
              Modern apartment interiors with modular kitchens, wardrobes, lighting,
              false ceilings, and space-optimized layouts.
            </p>
          </div>

          <div>
            <h3 className="text-xl text-[#D4AF37] mb-2">Villa Interior Designers in Bangalore</h3>
            <p className="text-gray-400">
              Bespoke villa interiors with luxury materials, custom furniture,
              vastu-aligned planning, and turnkey execution.
            </p>
          </div>

          <div>
            <h3 className="text-xl text-[#D4AF37] mb-2">Commercial Interior Designers in Bangalore</h3>
            <p className="text-gray-400">
              Office, startup, showroom, clinic, and retail interiors designed for
              productivity, branding, and long-term durability.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
            Why Choose Pearl Interiors in Bangalore?
          </h2>
          <ul className="text-gray-300 space-y-3">
            <li>✔ Professional Turnkey Execution</li>
            <li>✔ Experienced Design & Site Teams</li>
            <li>✔ Premium Materials & Branded Fittings</li>
            <li>✔ Transparent Process & On-Time Delivery</li>
            <li>✔ Strict Client Confidentiality</li>
            <li>✔ Dedicated Project Management</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-[#D4AF37] text-center mb-8">
            Frequently Asked Questions – Interior Designers in Bangalore
          </h2>

          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white">Do you provide complete turnkey interiors in Bangalore?</h3>
              <p>
                Yes, we provide end-to-end turnkey interior solutions including design,
                execution, modular kitchens, wardrobes, lighting, furniture, and handover.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Do you handle villas and high-rise apartments?</h3>
              <p>
                Yes, we design and execute interiors for luxury villas, gated communities,
                and premium apartment projects across Bangalore.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">How long does an interior project take?</h3>
              <p>
                Apartments usually take 6–10 weeks. Villas and commercial spaces depend
                on scale and customization.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Is client confidentiality maintained?</h3>
              <p>
                Yes, all projects are handled with strict privacy and never publicly disclosed.
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
                "name": "Do you provide turnkey interior solutions in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Pearl Interiors offers complete turnkey interior design and execution services in Bangalore."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle villas and apartments in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we handle luxury villas, gated communities, and premium apartment interiors across Bangalore."
                }
              },
              {
                "@type": "Question",
                "name": "How long does an interior project take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Apartment interiors take 6–10 weeks. Villas and commercial interiors depend on scope."
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

