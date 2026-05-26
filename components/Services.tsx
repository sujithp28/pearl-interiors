import {
  HomeModernIcon,
  BuildingOffice2Icon,
  FireIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    title: "Residential Interiors",
    desc: "Bespoke living spaces crafted for elegance and comfort.",
    Icon: HomeModernIcon,
  },
  {
    title: "Commercial Interiors",
    desc: "High-end workspaces that reflect brand identity and prestige.",
    Icon: BuildingOffice2Icon,
  },
  {
    title: "Modular Kitchens",
    desc: "Precision-crafted kitchens blending beauty and functionality.",
    Icon: FireIcon,
  },
  {
    title: "Custom Furniture",
    desc: "Handcrafted furniture designed exclusively for your space.",
    Icon: CubeIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-black to-zinc-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="Our Services"
          subtitle="Every service is delivered with complete confidentiality and tailored craftsmanship."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="luxury-card rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-gold-sm"
            >
              <Icon className="mb-4 h-8 w-8 text-pearl-gold" aria-hidden />
              <div className="mb-2 text-xl font-semibold text-pearl-gold">{title}</div>
              <p className="text-sm leading-relaxed text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
