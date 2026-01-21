export default function WhyChooseUs() {
  const points = [
    {
      title: "100% Client Confidentiality",
      desc: "Your home, your privacy. We never display client residences publicly.",
    },
    {
      title: "Bespoke Design Approach",
      desc: "Every space is designed from scratch. No templates. No repeats.",
    },
    {
      title: "End-to-End Execution",
      desc: "From concept to handover, everything is managed by our expert team.",
    },
    {
      title: "Premium Materials & Craftsmanship",
      desc: "We work only with trusted brands and skilled artisans.",
    },
    {
      title: "On-Time Delivery",
      desc: "Structured planning ensures timely completion without compromise.",
    },
    {
      title: "South India Expertise",
      desc: "Serving AP, Telangana, and Karnataka with local execution excellence.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900 to-black text-white">
      <h2 className="text-4xl font-serif text-center text-[#D4AF37] mb-2">
        Why Choose Pearl Interiors
      </h2>

      <p className="text-center text-gray-300 mb-2">
        Trusted by homeowners, villa developers, and commercial brands across South India.
      </p>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        A design studio trusted for discretion, craftsmanship, and timeless luxury.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {points.map((p) => (
          <div
            key={p.title}
            className="luxury-card backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8
                       shadow-lg hover:shadow-[0_0_35px_rgba(212,175,55,0.25)]
                       hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-2">
              {p.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

