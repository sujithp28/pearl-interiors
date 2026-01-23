import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function HyderabadSEOPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">
            Professional Turnkey Interior Designers in Hyderabad
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Pearl Interiors is a professional turnkey interior design studio in Hyderabad,
            delivering end-to-end solutions for apartments, villas, modular kitchens, and
            commercial interiors. From concept to execution, we ensure premium quality,
            on-time delivery, and complete client confidentiality.
          </p>

          <a
            href="https://wa.me/919391045855"
            className="inline-block mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                       text-black font-medium shadow-[0_0_25px_rgba(255,215,0,0.6)]
                       hover:shadow-[0_0_45px_rgba(255,215,0,0.9)]
                       hover:scale-105 transition-all duration-300"
          >
            Talk to Our Hyderabad Design Expert
          </a>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
            Serving Prime Locations Across Hyderabad
          </h2>
          <p className="text-gray-400">
            Gachibowli, Hitech City, Kondapur, Jubilee Hills, Banjara Hills, Miyapur,
            Kukatpally, Manikonda, Financial District, and surrounding areas.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl text-[#D4AF37] mb-2">Apartment Interior Designers in Hyderabad</h3>
            <p className="text-gray-400">
              Space-optimized apartment interiors including modular kitchens, wardrobes,
              lighting, false ceilings, and premium finishes.
            </p>
          </div>

          <div>
            <h3 className="text-xl text-[#D4AF37] mb-2">Villa Interior Designers in Hyderabad</h3>
            <p className="text-gray-400">
              Bespoke villa interiors with custom furniture, luxury materials,
              vastu-aligned planning, and turnkey execution.
            </p>
          </div>

          <div>
            <h3 className="text-xl text-[#D4AF37] mb-2">Commercial Interior Designers in Hyderabad</h3>
            <p className="text-gray-400">
              Office, showroom, clinic, and retail interiors designed for productivity,
              branding, and long-term durability.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-[#D4AF37] mb-4">
            Why Choose Pearl Interiors in Hyderabad?
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
            Frequently Asked Questions – Interior Designers in Hyderabad
          </h2>

          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white">Do you provide complete turnkey interiors in Hyderabad?</h3>
              <p>
                Yes, Pearl Interiors offers end-to-end turnkey interior solutions covering
                design, execution, modular kitchens, wardrobes, lighting, furniture,
                and final handover.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Do you handle both residential and commercial projects?</h3>
              <p>
                Yes, we design and execute apartments, villas, offices, clinics,
                showrooms, and retail spaces across Hyderabad.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">How long does a typical interior project take?</h3>
              <p>
                Apartment interiors usually take 6–10 weeks, while villas and
                commercial projects vary based on scope and customization.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Is client privacy maintained?</h3>
              <p>
                Absolutely. All client residences and commercial spaces are treated
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
                "name": "Do you provide complete turnkey interiors in Hyderabad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Pearl Interiors provides complete turnkey interior design and execution services in Hyderabad."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle residential and commercial projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we handle apartments, villas, offices, clinics, showrooms, and retail interiors in Hyderabad."
                }
              },
              {
                "@type": "Question",
                "name": "How long does an interior project take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Apartment interiors typically take 6–10 weeks. Villas and commercial projects depend on scope."
                }
              },
              {
                "@type": "Question",
                "name": "Is client confidentiality maintained?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all projects are handled with strict confidentiality."
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

