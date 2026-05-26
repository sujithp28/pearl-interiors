import { SITE_URL } from "@/utils/constants";

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/#services`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/#designs`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/#contact`,
      lastModified: new Date(),
    },
  ];
}
