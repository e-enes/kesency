import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/"],
    },
    sitemap: "https://kesency.com/sitemap.xml",
  };
};

export default robots;
