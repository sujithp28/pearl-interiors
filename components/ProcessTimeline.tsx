import SectionHeader from "@/components/SectionHeader";

const steps = [
  {
    title: "Private Consultation",
    desc: "Understanding your lifestyle, requirements, and budget in a confidential discussion.",
  },
  {
    title: "Concept & Design",
    desc: "Moodboards, layouts, and space planning tailored exclusively for you.",
  },
  {
    title: "3D Visualization",
    desc: "Realistic renders to help you experience the design before execution.",
  },
  {
    title: "Execution & Management",
    desc: "End-to-end coordination with premium materials and skilled craftsmen.",
  },
  {
    title: "Final Handover",
    desc: "On-time delivery with quality checks and a perfectly finished space.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-gradient-to-b from-black to-zinc-900 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          title="Our Design Process"
          subtitle="A transparent, structured journey from concept to completion — always confidential, always bespoke."
        />

        <div className="relative">
          {/* Desktop: center line */}
          <div
            className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-pearl-gold/40 md:block"
            aria-hidden
          />

          {/* Mobile: left line */}
          <div
            className="absolute bottom-0 left-4 top-0 w-0.5 bg-pearl-gold/40 md:hidden"
            aria-hidden
          />

          <ol className="space-y-10 md:space-y-12">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full pl-12 md:w-[calc(50%-2rem)] md:pl-0 md:pr-8">
                  <div
                    className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-gold-sm ${
                      index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                    }`}
                  >
                    <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-pearl-gold-muted">
                      Step {index + 1}
                    </span>
                    <h3 className="mb-2 text-lg font-semibold text-pearl-gold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-300">{step.desc}</p>
                  </div>
                </div>

                <div
                  className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-pearl-gold shadow-[0_0_15px_rgba(212,175,55,0.8)] md:left-1/2 md:top-1/2"
                  aria-hidden
                />

                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
