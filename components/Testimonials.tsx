const testimonials = [
  {
    quote:
      "The design team understood our apartment requirements clearly and helped us choose finishes that felt premium without becoming impractical.",
    name: "Apartment Homeowner",
    city: "Hyderabad",
  },
  {
    quote:
      "We wanted a private, end-to-end execution partner for our villa interiors. The process was structured and easy to follow.",
    name: "Villa Client",
    city: "Bangalore",
  },
  {
    quote:
      "The modular kitchen planning was the most useful part. Storage, lighting, and daily use details were handled thoughtfully.",
    name: "Kitchen Renovation Client",
    city: "Anantapur",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Client Confidence
            </p>
            <h2 className="font-serif text-4xl text-white md:text-5xl">
              Designed with privacy, clarity, and long-term comfort.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-zinc-400">
            Representative feedback themes from the kind of projects Pearl Interiors serves:
            homes, villas, kitchens, and private turnkey interiors.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="border border-white/10 bg-white/[0.04] p-7">
              <blockquote className="mb-6 text-sm leading-7 text-zinc-300">
                “{item.quote}”
              </blockquote>
              <figcaption>
                <div className="font-semibold text-[#D4AF37]">{item.name}</div>
                <div className="text-sm text-zinc-500">{item.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
