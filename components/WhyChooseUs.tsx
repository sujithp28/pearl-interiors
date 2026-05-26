import {
  LockClosedIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  SwatchIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import SectionHeader from "@/components/SectionHeader";

const points = [
  {
    title: "100% Client Confidentiality",
    desc: "Your home, your privacy. We never display client residences publicly.",
    Icon: LockClosedIcon,
  },
  {
    title: "Bespoke Design Approach",
    desc: "Every space is designed from scratch. No templates. No repeats.",
    Icon: SparklesIcon,
  },
  {
    title: "End-to-End Execution",
    desc: "From concept to handover, everything is managed by our expert team.",
    Icon: WrenchScrewdriverIcon,
  },
  {
    title: "Premium Materials & Craftsmanship",
    desc: "We work only with trusted brands and skilled artisans.",
    Icon: SwatchIcon,
  },
  {
    title: "On-Time Delivery",
    desc: "Structured planning ensures timely completion without compromise.",
    Icon: ClockIcon,
  },
  {
    title: "South India Expertise",
    desc: "Serving AP, Telangana, and Karnataka with local execution excellence.",
    Icon: MapPinIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-zinc-900 to-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Why Choose Pearl Interiors"
          subtitle="Trusted by homeowners, villa developers, and commercial brands across South India. A design studio trusted for discretion, craftsmanship, and timeless luxury."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {points.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="luxury-card rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-gold-sm"
            >
              <Icon className="mb-4 h-7 w-7 text-pearl-gold" aria-hidden />
              <h3 className="mb-2 text-lg font-semibold text-pearl-gold">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
