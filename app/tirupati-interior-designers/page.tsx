import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function TirupatiSEOPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">
            Interior Designers in Tirupati – Villas, Apartments & Commercial Spaces
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Pearl Interiors is a premium interior design studio serving Tirupati,
            specializing in luxury villas, modern apartments, modular kitchens,
            and commercial interiors. We provide complete turnkey solutions with
            strict client confidentiality and project budgets ranging from ₹2 Lakhs
            to ₹50 Lakhs and above.
          </p>

          <a
            href="https://wa.me/919391045855"
            className="inline-block mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                       text-black font-medium shadow-[0_0_25px_rgba(255,215,0,0.6)]
                       hover:shadow-[0_0_45px_rgba(255,215,0,0.9)]
                       hover:scale-105 transition-all duration-300"
          >
            Get a Free Site Visit in Tirupati
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl text-[#D4AF37] mb-2">Villa Interior Designers in Tirupati</h2>
            <p className="text-gray-400">
              Luxury villa interiors with vastu-aligned layouts, premium materials,
              custom furniture, lighting, and full turnkey execution.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-[#D4AF37] mb-2">Apartment Interior Designers in Tirupati</h2>
            <p className="text-gray-400">
              Modern apartment interiors including modular kitchens, wardrobes,
              false ceilings, lighting design, and space optimization.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-[#D4AF37] mb-2">Commercial Interior Designers in Tirupati</h2>
            <p className="text-gray-400">
              Office, showroom, hotel, and retail interiors designed for brand
              identity, functionality, and long-term durability.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
            Why Choose Pearl Interiors in Tirupati?
          </h2>
          <ul className="text-gray-300 space-y-3">
            <li>✔ Turnkey Interior Solutions</li>
            <li>✔ Budget Friendly Packages (₹2L – ₹50L+)</li>
            <li>✔ Vastu-Compliant Luxury Designs</li>
            <li>✔ 100% Client Confidentiality</li>
            <li>✔ Premium Materials & Branded Fittings</li>
            <li>✔ On-Time Project Delivery</li>
            <li>✔ Dedicated South India Execution Team</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-[#D4AF37] text-center mb-8">
            Frequently Asked Questions – Interior Designers in Tirupati
          </h2>

          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white">How much does interior design cost in Tirupati?</h3>
              <p>
                Interior design costs in Tirupati start from ₹2 Lakhs for apartments
                and can go up to ₹50 Lakhs or more for luxury villas and commercial spaces.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Do you provide turnkey interior services in Tirupati?</h3>
              <p>
                Yes, Pearl Interiors offers complete turnkey solutions including
                design, execution, modular kitchens, wardrobes, lighting, and furniture.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Do you follow Vastu in Tirupati projects?</h3>
              <p>
                Yes, all residential and commercial interiors can be planned according
                to Vastu while maintaining a modern luxury aesthetic.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">How long does an interior project take?</h3>
              <p>
                A typical 2BHK interior project takes 6–10 weeks. Villas and commercial
                projects depend on size and level of customization.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Is client privacy maintained?</h3>
              <p>
                Absolutely. All client residences and commercial interiors are handled
                with strict confidentiality and are never publicly disclosed.
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
                "name": "How much does interior design cost in Tirupati?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Interior design in Tirupati starts from ₹2 Lakhs for apartments and can go up to ₹50 Lakhs+ for luxury villas and commercial projects."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide turnkey interior services in Tirupati?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Pearl Interiors provides complete turnkey interior design and execution services in Tirupati."
                }
              },
              {
                "@type": "Question",
                "name": "Do you follow Vastu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all projects can be planned as per Vastu principles along with modern luxury design."
                }
              },
              {
                "@type": "Question",
                "name": "How long does an interior project take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A standard 2BHK takes around 6–10 weeks. Villas and commercial interiors may take longer based on scope."
                }
              },
              {
                "@type": "Question",
                "name": "Is client privacy maintained?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all client residences and commercial projects are handled with strict confidentiality."
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

