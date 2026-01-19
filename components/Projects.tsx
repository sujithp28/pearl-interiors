export default function Projects() {
  const projects = [
    { title: "Living Room", image: "/projects/living-room.jpg" },
    { title: "Kitchen", image: "/projects/kitchen.jpg" },
    { title: "Bedroom", image: "/projects/bedroom.jpg" },
    { title: "Office", image: "/projects/office.jpg" },
    { title: "Dining", image: "/projects/dining.jpg" },
    { title: "Wardrobe", image: "/projects/wardrobe.jpg" },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <h2 className="text-4xl font-semibold text-center mb-12">Our Projects</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <div className="project-image-wrapper">
              <img src={p.image} alt={p.title} className="project-image" />
            </div>
            <div className="project-title">{p.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

