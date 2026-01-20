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
    <section id="designs" className="py-20 bg-white">
      <h2 className="text-4xl font-semibold text-center mb-3">
        Design Inspirations
      </h2>

      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
        Concept visuals representing our design language. For client confidentiality,
        completed residences are never displayed publicly.
      </p>

      <div className="projects-grid">
        {designs.map((d) => (
          <div key={d.title} className="project-card relative">
            <div className="project-image-wrapper">
              <img src={d.image} alt={d.title} className="project-image" />
            </div>

            <div className="project-title">{d.title}</div>

            {/* Privacy Tag */}
            <span className="absolute bottom-3 right-3 text-xs bg-black/60 text-white px-2 py-1 rounded">
              Concept Only
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

