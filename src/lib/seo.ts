const SITE_URL = (import.meta.env["VITE_SITE_URL"]?.trim() || "https://institutoeducacionalgi.lovable.app").replace(/\/+$/, "");

export function canonicalLink(path: string) {
  return [{ rel: "canonical", href: `${SITE_URL}${path}` }];
}

type PageMeta = {
  title: string;
  description: string;
  keywords?: string;
  type?: string;
};

// Metadados completos de SEO e compartilhamento para uma página.
export function pageHead(path: string, { title, description, keywords, type = "website" }: PageMeta) {
  const url = `${SITE_URL}${path}`;
  return {
    links: canonicalLink(path),
    meta: [
      { title },
      { name: "description", content: description },
      ...(keywords ? [{ name: "keywords", content: keywords }] : []),
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  };
}
