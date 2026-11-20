import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/ensino")({
  head: () => ({ meta: [{ title: "Ensino — Colégio Horizonte" }, { name: "description", content: "Educação infantil, ensino fundamental e ensino médio no Colégio Horizonte." }, { property: "og:title", content: "Ensino — Colégio Horizonte" }, { property: "og:description", content: "Educação infantil, ensino fundamental e ensino médio no Colégio Horizonte." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Ensino,
});

const niveis = [
  ["Educação Infantil", "2 a 5 anos", "Aprender brincando, com foco em descoberta, convivência e linguagem."],
  ["Ensino Fundamental I", "1º ao 5º ano", "Alfabetização sólida, raciocínio lógico e projetos interdisciplinares."],
  ["Ensino Fundamental II", "6º ao 9º ano", "Autonomia, pensamento crítico e iniciação científica."],
  ["Ensino Médio", "1ª à 3ª série", "Preparação para o ENEM e vestibulares com projeto de vida."],
];

function Ensino() {
  return (
    <SiteLayout>
      <PageHeader title="Nosso ensino" intro="Uma jornada contínua, do primeiro dia na escola até a universidade." />
      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-6">
        {niveis.map(([t,i,d])=>(
          <div key={t} className="rounded-xl border border-border p-8">
            <p className="text-sm uppercase tracking-wider text-accent-foreground">{i}</p>
            <h2 className="font-display text-3xl text-primary mt-2">{t}</h2>
            <p className="mt-3 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
