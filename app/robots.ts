import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/atacado/obrigado"],
    },
    sitemap: "https://customic.com.br/sitemap.xml",
  };
}
