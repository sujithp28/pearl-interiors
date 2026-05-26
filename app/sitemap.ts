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

export default function sitemap() {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
