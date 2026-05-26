import { StarIcon } from "@heroicons/react/24/solid";
import SectionHeader from "@/components/SectionHeader";

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
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Client Confidence"
            title="Designed with privacy, clarity, and long-term comfort."
            className="mb-0"
          />
          <p className="max-w-md text-sm leading-relaxed text-zinc-400 md:text-right">
            Representative feedback themes from the kind of projects Pearl Interiors serves:
            homes, villas, kitchens, and private turnkey interiors.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="relative border border-white/10 bg-white/[0.04] p-7"
            >
              <span
                className="pointer-events-none absolute left-4 top-2 font-serif text-5xl leading-none text-pearl-gold/20"
                aria-hidden
              >
                &ldquo;
              </span>

              <div className="mb-4 flex gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-pearl-gold" />
                ))}
              </div>

              <blockquote className="relative mb-6 text-sm leading-7 text-zinc-300">
                {item.quote}
              </blockquote>

              <figcaption>
                <div className="font-semibold text-pearl-gold">{item.name}</div>
                <div className="text-sm text-zinc-500">{item.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
