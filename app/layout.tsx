import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import LocalSchema from "@/components/LocalSchema";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { SITE_URL } from "@/utils/constants";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Luxury Interior Designers in Hyderabad, Bangalore & Anantapur | Pearl Interiors",
  description:
    "Pearl Interiors is a premium interior design studio serving Hyderabad, Bangalore, and Anantapur, specializing in luxury apartments, villas, modular kitchens, and commercial interiors with complete client confidentiality.",
  keywords: [
    "Interior Designers in Hyderabad",
    "Interior Designers in Bangalore",
    "Interior Designers in Anantapur",
    "Luxury Interior Designers Hyderabad",
    "Luxury Interior Designers Bangalore",
    "Luxury Interior Designers Anantapur",
    "Villa Interior Designers Hyderabad",
    "Modular Kitchen Designers Bangalore",
    "Commercial Interior Designers Hyderabad",
    "Best Interior Designers South India",
  ],
  openGraph: {
    title:
      "Pearl Interiors – Luxury Interior Designers in Hyderabad, Bangalore & Anantapur",
    description:
      "Bespoke luxury interiors for apartments, villas, and commercial spaces across South India.",
    url: SITE_URL,
    siteName: "Pearl Interiors",
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
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="bg-black text-white overflow-x-hidden pb-16 md:pb-0"
      >
        {children}
        <LocalSchema />
        <FloatingWhatsApp />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
