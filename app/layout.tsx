import "./globals.css";
import LocalSchema from "../components/LocalSchema";

export const metadata = {
  metadataBase: new URL("https://pearl-interiors.vercel.app"),

  title: {
    default:
      "Luxury Interior Designers in Hyderabad, Bangalore & Anantapur | Pearl Interiors",
    template: "%s | Pearl Interiors",
  },

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
      "Bespoke luxury interiors for apartments, villas, and commercial spaces across Hyderabad, Bangalore, and Anantapur.",
    url: "https://pearl-interiors.vercel.app",
    siteName: "Pearl Interiors",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pearl Interiors Luxury Design Studio",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ⭐ Local Business Schema for Google */}
        <LocalSchema />

        {children}
      </body>
    </html>
  );
}

