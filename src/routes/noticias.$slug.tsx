import { pageHead } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Newspaper } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route=createFileRoute("/noticias/$slug")({
  head: ({ params }) => pageHead("/noticias/" + params.slug,{title:"Notícia | Instituto Educacional G.I.",description:"Acompanhe as notícias e comunicados do Instituto Educacional G.I.",type:"article"}),
  component:Noticia,
});
function Noticia(){
  const {slug}=Route.useParams();
  return <SiteLayout>
    <PageHeader title="Notícias do Instituto G.I." intro="Informações e acontecimentos da nossa comunidade escolar." eyebrow="NOTÍCIAS E COMUNICADOS"/>
    <section className="section-wrap py-20"><div className="mx-auto max-w-2xl rounded-3xl border border-border bg-white p-10 text-center shadow-sm"><span className="icon-bubble"><Newspaper size={26}/></span><h2 className="mt-5 font-display text-2xl font-bold text-primary">Publicação não encontrada.</h2><p className="mt-3 leading-7 text-muted-foreground">A publicação “{slug}” ainda não está disponível ou foi removida. Volte à página de notícias para consultar os comunicados publicados.</p><Link to="/noticias" className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground"><ArrowLeft size={17}/> Voltar às notícias</Link></div></section>
  </SiteLayout>;
}
