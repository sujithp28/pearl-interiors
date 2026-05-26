import type { Metadata } from "next";
import { SITE_URL } from "@/utils/constants";

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

/** Shared metadata fields for all pages */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    ...baseMetadata,
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Pearl Interiors",
      type: "website",
      images: [
        {
          url: "/hero-bg.jpg",
          width: 1200,
          height: 630,
          alt: "Pearl Interiors Luxury Design Studio",
        },
      ],
    },
  };
}
