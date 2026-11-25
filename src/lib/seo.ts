const SITE_URL = (import.meta.env["VITE_SITE_URL"]?.trim() || "https://institutogi.vercel.app").replace(/\\/+$/, "");

const DEFAULT_SHARE_IMAGE = "/imagens/Fachada%20Escolar%20Azul%20e%20Amarela.webp";
const DEFAULT_SHARE_IMAGE_ALT = "Fachada do Instituto Educacional G.I.";

export function canonicalLink(path: string) {
  return [{ rel: "canonical", href: `${SITE_URL}${path}` }];
}

type PageMeta = {
  title: string;
  description: string;
  keywords?: string;
  type?: string;
  image?: string;
  imageAlt?: string;
};

// Metadados completos de SEO e compartilhamento para cada página.
export function pageHead(path: string, {
  title,
  description,
  keywords,
  type = "website",
  image = DEFAULT_SHARE_IMAGE,
  imageAlt = DEFAULT_SHARE_IMAGE_ALT,
}: PageMeta) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image.startsWith("/") ? "" : "/"}${image}`;

  return {
    links: canonicalLink(path),
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      ...(keywords ? [{ name: "keywords", content: keywords }] : []),
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Instituto Educacional G.I." },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: imageAlt },
    ],
  };
}
