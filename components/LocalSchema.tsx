import { DISPLAY_PHONE, PHONE_NUMBER, SITE_URL } from "@/utils/constants";

const cities = [
  "Hyderabad",
  "Bangalore",
  "Anantapur",
  "Tirupati",
  "Vijayawada",
  "Guntur",
  "Kurnool",
];

const services = [
  "Residential Interior Design",
  "Commercial Interior Design",
  "Modular Kitchen Design",
  "Wardrobe Design",
  "Custom Furniture",
  "Turnkey Interior Execution",
];

export default function LocalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${SITE_URL}/#business`,
        name: "Pearl Interiors",
        url: SITE_URL,
        image: `${SITE_URL}/hero-bg.jpg`,
        telephone: DISPLAY_PHONE,
        description:
          "Premium interior designers for apartments, villas, modular kitchens, and commercial spaces across South India with turnkey execution and client confidentiality.",
        priceRange: "₹₹₹",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressRegion: "Andhra Pradesh",
        },
        areaServed: cities.map((city) => ({
          "@type": "City",
          name: city,
          containedInPlace: { "@type": "Country", name: "India" },
        })),
        knowsAbout: services,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Interior Design Services",
          itemListElement: services.map((name, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name,
              provider: { "@id": `${SITE_URL}/#business` },
            },
          })),
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${PHONE_NUMBER}`,
          contactType: "customer service",
          availableLanguage: ["English", "Telugu", "Hindi", "Kannada"],
          areaServed: "IN",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Pearl Interiors",
        description:
          "Luxury interior designers in Hyderabad, Bangalore, Anantapur, and Tirupati.",
        publisher: { "@id": `${SITE_URL}/#business` },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
