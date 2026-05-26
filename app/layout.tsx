import { Playfair_Display, Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import LocalSchema from "@/components/LocalSchema";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { SITE_URL } from "@/utils/constants";
import { baseMetadata } from "@/utils/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    default:
      "Luxury Interior Designers in Hyderabad, Bangalore, Anantapur & Tirupati | Pearl Interiors",
    template: "%s | Pearl Interiors",
  },
  description:
    "Pearl Interiors — premium interior designers for apartments, villas, modular kitchens, and commercial spaces in Hyderabad, Bangalore, Anantapur, and Tirupati. Turnkey execution with complete confidentiality.",
  keywords: [
    "Interior Designers in Hyderabad",
    "Interior Designers in Bangalore",
    "Interior Designers in Anantapur",
    "Interior Designers in Tirupati",
    "Modular Kitchen Designers Hyderabad",
    "Modular Kitchen Designers Bangalore",
    "Luxury Interior Designers South India",
    "Villa Interior Designers",
    "Home Interior Designers Near Me",
    "Turnkey Interior Designers",
  ],
  openGraph: {
    title:
      "Pearl Interiors – Luxury Interior Designers in Hyderabad, Bangalore & South India",
    description:
      "Bespoke luxury interiors for apartments, villas, and commercial spaces across South India.",
    url: SITE_URL,
    siteName: "Pearl Interiors",
    locale: "en_IN",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Pearl Interiors Luxury Design Studio",
      },
    ],
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable}`}>
      <body
        suppressHydrationWarning
        className="overflow-x-hidden bg-black pb-16 font-sans text-white md:pb-0"
      >
        {children}
        <LocalSchema />
        <FloatingWhatsApp />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
