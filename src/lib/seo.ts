export function canonicalLink(path: string) {
  const base = import.meta.env.VITE_SITE_URL?.trim().replace(/\/+$/, "");
  if (!base) return [];
  return [{ rel: "canonical", href: `${base}${path}` }];
}
