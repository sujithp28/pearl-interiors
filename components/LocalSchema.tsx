export default function LocalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pearl Interiors",
    url: "https://pearl-interiors.vercel.app",
    telephone: "+91 93910 45855",
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

