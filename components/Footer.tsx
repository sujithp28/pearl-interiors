import Link from "next/link";
import { DISPLAY_PHONE, PHONE_NUMBER, SITE_URL } from "@/utils/constants";

const footerLinks = [
  { label: "Services", href: "/#services" },
  { label: "Design Gallery", href: "/#designs" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

const cityLinks = [
  { label: "Hyderabad", href: "/hyderabad-interior-designers" },
  { label: "Bangalore", href: "/bangalore-interior-designers" },
  { label: "Anantapur", href: "/anantapur-interior-designers" },
  { label: "Tirupati", href: "/tirupati-interior-designers" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-center">
      <div className="mx-auto max-w-6xl px-6">
        <Link href="/" className="font-serif text-2xl text-pearl-gold">
          Pearl Interiors
        </Link>

        <p className="mx-auto mt-4 max-w-3xl text-sm italic text-gray-400">
          We do not publicly display client residences. Every design we create is
          bespoke, confidential, and remains private and exclusive to its owner.
        </p>

        <p className="mt-3 text-xs text-pearl-gold/80">
          Up to 15 years warranty on modular kitchens and wardrobes.
        </p>

        <nav
          aria-label="Footer navigation"
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-pearl-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <nav
          aria-label="City pages"
          className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-500"
        >
          {cityLinks.map((city) => (
            <Link
              key={city.href}
              href={city.href}
              className="transition hover:text-pearl-gold"
            >
              {city.label}
            </Link>
          ))}
        </nav>

        <a
          href={`https://wa.me/${PHONE_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-sm font-medium text-pearl-gold transition hover:underline"
        >
          WhatsApp: {DISPLAY_PHONE}
        </a>

        <p className="mt-6 text-xs text-gray-600">
          © {new Date().getFullYear()} Pearl Interiors ·{" "}
          <a href={SITE_URL} className="hover:text-gray-500">
            thepearlinteriors.com
          </a>
        </p>
      </div>
    </footer>
  );
}
