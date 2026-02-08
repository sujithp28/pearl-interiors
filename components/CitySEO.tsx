export default function CitySEO() {
  const cities = [
    "Hyderabad",
    "Bangalore",
    "Anantapur",
    "Tirupati",
    "Vijayawada",
    "Guntur",
    "Kurnool",
  ];

  return (
    <section className="pt-24 pb-32 bg-gradient-to-b from-black to-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-8">
          Luxury Interior Designers Across South India
        </h2>

        <p className="text-gray-400 leading-relaxed max-w-4xl mx-auto">
          Pearl Interiors delivers premium residential and commercial interior
          design services across major cities in South India. From modular
          kitchens to full home interiors, we provide end-to-end execution with
          strict confidentiality, premium materials, and on-time delivery.
        </p>

        {/* Location Chips */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {cities.map((city, i) => (
            <span
              key={i}
              className="px-6 py-3 border border-white/10 rounded-full 
              text-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37]
              hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]
              transition duration-300"
            >
              {city}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

