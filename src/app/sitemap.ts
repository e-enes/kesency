import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://kesency.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: "https://kesency.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: "https://kesency.com/legal",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: "https://kesency.com/portfolio",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: "https://kesency.com/pricing",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
  ];
};

export default sitemap;
