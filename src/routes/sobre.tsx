import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [{ title: "Sobre — Colégio Horizonte" }, { name: "description", content: "Conheça a história, missão e valores do Colégio Horizonte." }, { property: "og:title", content: "Sobre — Colégio Horizonte" }, { property: "og:description", content: "Conheça a história, missão e valores do Colégio Horizonte." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Sobre,
});

function Sobre() {
  return (
    <SiteLayout>
      <PageHeader title="Nossa história" intro="Fundado em 1991, o Colégio Horizonte nasceu do sonho de oferecer uma educação próxima, humana e de qualidade." />
      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-8">
        {[["Missão","Formar cidadãos críticos, éticos e preparados para os desafios do mundo."],["Visão","Ser referência regional em educação inovadora e acolhedora."],["Valores","Respeito, curiosidade, responsabilidade e colaboração."]].map(([t,d])=>(
          <div key={t}><h2 className="font-display text-3xl text-primary">{t}</h2><p className="mt-3 text-muted-foreground">{d}</p></div>
        ))}
      </section>
    </SiteLayout>
  );
}
