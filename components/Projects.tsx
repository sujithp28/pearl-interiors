export default function Projects() {
  const designs = [
    { title: "Living Room", image: "/projects/living-room.jpg" },
    { title: "Kitchen", image: "/projects/kitchen.jpg" },
    { title: "Bedroom", image: "/projects/bedroom.jpg" },
    { title: "Office", image: "/projects/office.jpg" },
    { title: "Dining", image: "/projects/dining.jpg" },
    { title: "Wardrobe", image: "/projects/wardrobe.jpg" },
  ];

  return (
    <section
      id="designs"
      className="py-24 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white"
    >
      <h2 className="text-4xl font-serif text-center mb-3 text-[#D4AF37]">
        Design Inspirations
      </h2>

      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        Sample design visuals shown for style reference. For client confidentiality,
        completed residences are never displayed publicly.
      </p>

      <div className="projects-grid">
        {designs.map((d) => (
          <div
            key={d.title}
            className="project-card luxury-card relative hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="project-image-wrapper">
              <img src={d.image} alt={d.title} className="project-image" />
            </div>

            <div className="project-title text-white">{d.title}</div>

            {/* Sample Design Tag */}
            <span className="absolute bottom-3 right-3 text-[11px] bg-black/70 text-[#D4AF37] px-2 py-1 rounded-full tracking-wide">
              Sample Design
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

