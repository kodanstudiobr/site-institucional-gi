import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Colégio Horizonte — Educação que transforma" }, { name: "description", content: "Escola da educação infantil ao ensino médio, com ensino de excelência e formação humana." }, { property: "og:title", content: "Colégio Horizonte — Educação que transforma" }, { property: "og:description", content: "Escola da educação infantil ao ensino médio, com ensino de excelência e formação humana." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Index,
});

const destaques = [
  ["Ensino de excelência", "Professores qualificados e metodologia que une teoria e prática."],
  ["Formação integral", "Esportes, artes, música e projetos socioemocionais."],
  ["Estrutura completa", "Laboratórios, biblioteca, quadra e espaços ao ar livre."],
];

function Index() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-accent-foreground">Matrículas 2027 abertas</p>
          <h1 className="font-display text-6xl leading-tight text-primary mt-4">Educação que transforma vidas.</h1>
          <p className="mt-6 text-lg text-muted-foreground">Da educação infantil ao ensino médio, preparamos alunos para o futuro com acolhimento e excelência.</p>
          <div className="mt-8 flex gap-4">
            <Link to="/contato" className="rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium">Agende uma visita</Link>
            <Link to="/ensino" className="rounded-md border border-primary px-6 py-3 text-primary font-medium">Nossos cursos</Link>
          </div>
        </div>
        <div className="aspect-square rounded-3xl bg-accent flex items-center justify-center">
          <span className="font-display text-9xl text-primary">35</span>
          <span className="ml-3 text-lg text-accent-foreground">anos<br/>educando</span>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-3 gap-8">
          {destaques.map(([t, d]) => (
            <div key={t} className="rounded-xl bg-card p-8 border border-border">
              <h3 className="font-display text-2xl text-primary">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
