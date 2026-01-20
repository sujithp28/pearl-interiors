export default function ProcessTimeline() {
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

  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-900 text-white">
      <h2 className="text-4xl font-serif text-center text-[#D4AF37] mb-4">
        Our Design Process
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        A transparent, structured journey from concept to completion — always confidential, always bespoke.
      </p>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#D4AF37]/40" />

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:w-1/2 p-6">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6
                                shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]
                                transition-all duration-300">
                  <h3 className="text-lg font-semibold text-[#D4AF37] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-center md:w-0">
                <div className="w-4 h-4 bg-[#D4AF37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

