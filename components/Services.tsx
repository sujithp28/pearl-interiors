export default function Services() {
  const services = [
    {
      title: "Residential Interiors",
      desc: "Bespoke living spaces crafted for elegance and comfort.",
    },
    {
      title: "Commercial Interiors",
      desc: "High-end workspaces that reflect brand identity and prestige.",
    },
    {
      title: "Modular Kitchens",
      desc: "Precision-crafted kitchens blending beauty and functionality.",
    },
    {
      title: "Custom Furniture",
      desc: "Handcrafted furniture designed exclusively for your space.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-zinc-900 text-white">
      <h2 className="text-4xl font-serif text-center mb-4 text-[#D4AF37]">
        Our Services
      </h2>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        Every service is delivered with complete confidentiality and tailored craftsmanship.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8
                       shadow-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]
                       hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-[#D4AF37] text-xl font-semibold mb-2">
              {s.title}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

