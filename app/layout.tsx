import "./globals.css";

export const metadata = {
  title: "Luxury Interior Designers in Hyderabad & Bangalore | Pearl Interiors",
  description:
    "Pearl Interiors is a premium interior design studio in Hyderabad and Bangalore, specializing in luxury apartments, villas, modular kitchens, and commercial interiors with complete client confidentiality.",
  keywords: [
    "Interior Designers in Hyderabad",
    "Interior Designers in Bangalore",
    "Luxury Interior Designers Hyderabad",
    "Luxury Interior Designers Bangalore",
    "Villa Interior Designers Hyderabad",
    "Modular Kitchen Designers Bangalore",
    "Commercial Interior Designers Hyderabad",
    "Best Interior Designers South India",
  ],
  openGraph: {
    title: "Pearl Interiors – Luxury Interior Designers in Hyderabad & Bangalore",
    description:
      "Bespoke luxury interiors for apartments, villas, and commercial spaces across Hyderabad and Bangalore. Confidential. Premium. Timeless.",
    url: "https://pearl-interiors.vercel.app",
    siteName: "Pearl Interiors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pearl Interiors Luxury Design Studio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

