import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/constants";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/hyderabad-interior-designers", priority: 0.9, changeFrequency: "monthly" },
  { path: "/bangalore-interior-designers", priority: 0.9, changeFrequency: "monthly" },
  { path: "/tirupati-interior-designers", priority: 0.85, changeFrequency: "monthly" },
  { path: "/anantapur-interior-designers", priority: 0.85, changeFrequency: "monthly" },
  { path: "/modular-kitchen-interior-designers", priority: 0.85, changeFrequency: "monthly" },
  { path: "/bedroom-interiors/master-bedroom", priority: 0.7, changeFrequency: "monthly" },
  { path: "/bedroom-interiors/kids", priority: 0.7, changeFrequency: "monthly" },
  { path: "/bedroom-interiors/couple-bedroom", priority: 0.7, changeFrequency: "monthly" },
  { path: "/bedroom-interiors/senior-bedroom", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
