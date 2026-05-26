import { DISPLAY_PHONE } from "@/utils/constants";

export default function LocalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pearl Interiors",
    url: "https://pearl-interiors.vercel.app",
    telephone: DISPLAY_PHONE,
    areaServed: ["Hyderabad", "Bangalore", "Anantapur"],
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
