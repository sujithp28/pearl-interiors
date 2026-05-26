import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

const cities: { name: string; href?: string }[] = [
  { name: "Hyderabad", href: "/hyderabad-interior-designers" },
  { name: "Bangalore", href: "/bangalore-interior-designers" },
  { name: "Anantapur", href: "/anantapur-interior-designers" },
  { name: "Tirupati", href: "/tirupati-interior-designers" },
  { name: "Vijayawada" },
  { name: "Guntur" },
  { name: "Kurnool" },
];

export default function CitySEO() {
  return (
    <section className="bg-gradient-to-b from-black to-pearl-dark pb-32 pt-24 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <SectionHeader
          title="Luxury Interior Designers Across South India"
          subtitle="Pearl Interiors delivers premium residential and commercial interior design services across major cities in South India. From modular kitchens to full home interiors, we provide end-to-end execution with strict confidentiality, premium materials, and on-time delivery."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {cities.map((city) => {
            const className =
              "rounded-full border border-white/10 px-6 py-3 text-gray-300 transition duration-300 hover:border-pearl-gold hover:text-pearl-gold hover:shadow-gold-sm";

            if (city.href) {
              return (
                <Link key={city.name} href={city.href} className={className}>
                  {city.name}
                </Link>
              );
            }

            return (
              <span key={city.name} className={className}>
                {city.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
