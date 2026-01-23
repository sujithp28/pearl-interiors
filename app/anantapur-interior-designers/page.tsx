import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function AnantapurSEOPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">
            Interior Designers in Anantapur – Villas, Apartments & Commercial Spaces
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Pearl Interiors is one of the leading interior design studios serving Anantapur,
            specializing in luxury villas, modern apartments, modular kitchens, and
            commercial interiors. We deliver turnkey solutions with complete confidentiality
            and budgets ranging from ₹2 Lakhs to ₹50 Lakhs and above.
          </p>

          <a
            href="https://wa.me/919391045855"
            className="inline-block mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                       text-black font-medium shadow-[0_0_25px_rgba(255,215,0,0.6)]
                       hover:shadow-[0_0_45px_rgba(255,215,0,0.9)]
                       hover:scale-105 transition-all duration-300"
          >
            Get a Free Site Visit in Anantapur
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl text-[#D4AF37] mb-2">Villa Interior Designers in Anantapur</h2>
            <p className="text-gray-400">
              Luxury villa interiors with premium materials, vastu-compliant layouts,
              custom furniture, and complete project execution.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-[#D4AF37] mb-2">Apartment Interior Designers in Anantapur</h2>
            <p className="text-gray-400">
              Modern apartment interiors including modular kitchens, wardrobes,
              false ceilings, lighting, and space-optimized layouts.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-[#D4AF37] mb-2">Commercial Interior Designers in Anantapur</h2>
            <p className="text-gray-400">
              Office, showroom, hospital, and retail interiors designed for functionality,
              branding, and long-term durability.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
            Why Choose Pearl Interiors in Anantapur?
          </h2>
          <ul className="text-gray-300 space-y-3">
            <li>✔ Turnkey Interior Solutions</li>
            <li>✔ Budget Friendly Packages (₹2L – ₹50L+)</li>
            <li>✔ 100% Client Confidentiality</li>
            <li>✔ Premium Materials & Branded Fittings</li>
            <li>✔ On-Time Project Delivery</li>
            <li>✔ Local Execution Team in Anantapur</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-[#D4AF37] text-center mb-8">
            Frequently Asked Questions – Interior Designers in Anantapur
          </h2>

          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white">How much does interior design cost in Anantapur?</h3>
              <p>Interior design costs start from ₹2 Lakhs for apartments and can go up to ₹50 Lakhs+ for luxury villas and commercial projects.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Do you provide turnkey interior solutions in Anantapur?</h3>
              <p>Yes, we offer complete turnkey interiors including design, execution, modular kitchens, wardrobes, lighting and furniture.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Do you follow Vastu?</h3>
              <p>Yes, all residential and commercial projects can be designed as per Vastu principles.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">How long does an interior project take?</h3>
              <p>A typical 2BHK project takes 6–10 weeks. Villas and commercial spaces depend on scope and customization.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Are client projects kept confidential?</h3>
              <p>Yes, all client residences and commercial interiors are handled with strict privacy and never publicly displayed.</p>
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
                "name": "How much does interior design cost in Anantapur?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Interior design costs in Anantapur start from ₹2 Lakhs for apartments and go up to ₹50 Lakhs+ for luxury villas and commercial projects."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide turnkey interior solutions in Anantapur?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Pearl Interiors offers complete turnkey interior solutions in Anantapur."
                }
              },
              {
                "@type": "Question",
                "name": "Do you follow Vastu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all designs can be planned according to Vastu while maintaining modern luxury."
                }
              },
              {
                "@type": "Question",
                "name": "How long does an interior project take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A standard 2BHK takes 6–10 weeks. Villas and commercial projects depend on scope."
                }
              },
              {
                "@type": "Question",
                "name": "Do you keep client projects confidential?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all client residences and commercial spaces are handled with strict confidentiality."
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

