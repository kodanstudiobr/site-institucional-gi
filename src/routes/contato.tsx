import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: [{ title: "Contato — Colégio Horizonte" }, { name: "description", content: "Agende uma visita e fale com a secretaria do Colégio Horizonte." }, { property: "og:title", content: "Contato — Colégio Horizonte" }, { property: "og:description", content: "Agende uma visita e fale com a secretaria do Colégio Horizonte." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Contato,
});

function Contato() {
  return (
    <SiteLayout>
      <PageHeader title="Fale conosco" intro="Venha conhecer a escola. Nossa secretaria atende de segunda a sexta, das 7h às 18h." />
      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-8">
        {[["Endereço","Rua das Acácias, 120 — Centro"],["Telefone","(11) 4000-1234"],["E-mail","contato@colegiohorizonte.com.br"]].map(([t,d])=>(
          <div key={t} className="rounded-xl bg-secondary p-8"><h2 className="font-display text-2xl text-primary">{t}</h2><p className="mt-2">{d}</p></div>
        ))}
      </section>
    </SiteLayout>
  );
}
