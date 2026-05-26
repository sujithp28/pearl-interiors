import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/constants";

const routes = [
  "",
  "/hyderabad-interior-designers",
  "/bangalore-interior-designers",
  "/tirupati-interior-designers",
  "/anantapur-interior-designers",
  "/modular-kitchen-interior-designers",
  "/bedroom-interiors/master-bedroom",
  "/bedroom-interiors/kids",
  "/bedroom-interiors/couple-bedroom",
  "/bedroom-interiors/senior-bedroom",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-01-01T00:00:00.000Z");

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));
}
