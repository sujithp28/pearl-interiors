export default function Services() {
  const services = [
    "Residential Interiors",
    "Commercial Interiors",
    "Modular Kitchens",
    "Custom Furniture",
  ];

  return (
    <section id="services" className="py-20 bg-white text-center">
      <h2 className="text-3xl mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {services.map((s) => (
          <div
            key={s}
            className="p-6 border rounded shadow hover:shadow-lg transition"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}

