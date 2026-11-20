import { mkdir, writeFile } from "node:fs/promises";

const siteUrl = process.env.SITE_URL?.trim().replace(/\/+$/, "");
if (!siteUrl) {
  console.warn("SITE_URL não configurada: sitemap.xml não foi gerado. Configure a URL pública do site no ambiente de deploy.");
  process.exit(0);
}

const routes = ["/", "/sobre", "/ensino", "/estrutura", "/vivencias", "/noticias", "/contato"];
const urls = routes.map((route) => "  <url><loc>" + siteUrl + route + "</loc></url>").join("\n");
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls + "\n</urlset>\n";
const robots = "User-agent: *\nAllow: /\n\nSitemap: " + siteUrl + "/sitemap.xml\n";

await mkdir("public", { recursive: true });
await writeFile("public/sitemap.xml", xml, "utf8");
await writeFile("public/robots.txt", robots, "utf8");
console.log("Sitemap e robots.txt gerados para", siteUrl);
