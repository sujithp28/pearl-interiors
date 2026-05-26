const proofPoints = [
  {
    label: "Turnkey Delivery",
    detail: "Design, materials, execution, quality checks, and final handover managed end to end.",
  },
  {
    label: "Material Guidance",
    detail: "Clear recommendations for plywood, laminates, hardware, lighting, and finish durability.",
  },
  {
    label: "Site Discipline",
    detail: "Milestone-led planning for apartments, villas, modular kitchens, and commercial spaces.",
  },
];

const metrics = [
  "Design consultation",
  "2D planning",
  "3D visualization",
  "Material selection",
  "Execution tracking",
  "Final handover",
];

export default function TrustProof() {
  return (
    <section className="bg-gradient-to-b from-black via-[#080808] to-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8a6a18]">
            Built For Real Sites
          </p>
          <h2 className="mb-5 font-serif text-4xl text-white md:text-5xl">
            Premium design is only complete when execution feels effortless.
          </h2>
          <p className="max-w-xl text-zinc-400">
            Pearl Interiors focuses on practical luxury: beautiful concepts, precise material choices,
            and site execution that respects your timeline, privacy, and budget.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {proofPoints.map((point) => (
            <div
              key={point.label}
              className="border-l-2 border-[#D4AF37] bg-white/[0.03] px-5 py-4"
            >
              <h3 className="mb-2 text-lg font-semibold text-[#D4AF37]">{point.label}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{point.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 py-6 text-sm font-medium text-zinc-300 md:grid-cols-6">
          {metrics.map((metric) => (
            <div key={metric} className="text-center">
              {metric}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
