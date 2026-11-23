import { pageHead } from "@/lib/seo";
import { institutionalConfig } from "@/data/institutional";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Instagram, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/contato")({
  head: () => pageHead("/contato", {
    title: "Contato e Localização | Instituto Educacional G.I.",
    description: "Encontre o Instituto Educacional G.I. em Jaguaribe, João Pessoa. Confira nosso endereço e canais oficiais de contato.",
    keywords: "contato escola, localização, Instituto Educacional G.I., Jaguaribe, João Pessoa",
  }),
  component: Contato,
});

function Contato() {
  const mapQuery = encodeURIComponent("Avenida Floriano Peixoto, 230 - Jaguaribe, João Pessoa - PB, Brasil");
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return <SiteLayout>
    <PageHeader eyebrow="FALE CONOSCO" title={<>Estamos aqui para <span className="text-accent">receber você.</span></>} intro="Entre em contato com nossa equipe ou venha conhecer de perto o Instituto Educacional G.I. Será um prazer receber sua família."/>
    <section className="section-wrap py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div>
          <p className="eyebrow">CANAIS OFICIAIS</p>
          <h2 className="section-title mt-3">Fale com a <span className="title-highlight">nossa escola.</span></h2>
          <p className="mt-5 leading-8 text-muted-foreground">Nossa equipe está à disposição para atender você, esclarecer dúvidas e apresentar nossa proposta educacional.</p>
          <div className="mt-8 space-y-6">
            <div className="contact-item"><MapPin/><div><strong>Endereço</strong><p>{institutionalConfig.address}</p></div></div>
            <div className="contact-item"><Phone/><div><strong>Telefone fixo</strong><p><a className="transition hover:text-primary" href="tel:+558321825088">{institutionalConfig.phone}</a></p></div></div>
            <div className="contact-item"><MessageCircle/><div><strong>WhatsApp</strong><p><a className="transition hover:text-primary" href={`https://wa.me/${institutionalConfig.whatsapp}`} target="_blank" rel="noreferrer">(83) 99420-0019</a></p></div></div>
            <div className="contact-item"><Mail/><div><strong>E-mail</strong><p><a className="transition hover:text-primary" href={`mailto:${institutionalConfig.email}`}>{institutionalConfig.email}</a></p></div></div>
            <div className="contact-item"><Instagram/><div><strong>Instagram</strong><p><a className="transition hover:text-primary" href="https://www.instagram.com/institutoeducacionalgi/" target="_blank" rel="noreferrer">{institutionalConfig.instagram}</a></p></div></div>
          </div>
          <a href={`https://wa.me/${institutionalConfig.whatsapp}`} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-extrabold text-accent-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><MessageCircle size={18}/> Fale pelo WhatsApp</a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-xl">
          <div className="flex items-center gap-3 px-5 py-4 md:px-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-soft text-primary"><MapPin size={22}/></span>
            <div className="min-w-0"><h3 className="font-display text-lg font-bold text-primary">Como chegar</h3><p className="text-sm text-muted-foreground">{institutionalConfig.address}</p></div>
          </div>
          <iframe title="Localização do Instituto Educacional G.I. no Google Maps" src={mapEmbedUrl} width="100%" height="440" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 md:px-6">
            <span className="text-sm text-muted-foreground">Jaguaribe · João Pessoa · PB</span>
            <a href={mapDirectionsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-accent-foreground">Abrir rotas no Google Maps <ArrowUpRight size={16}/></a>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-soft py-14"><div className="section-wrap flex flex-wrap items-center justify-between gap-5"><div><h2 className="font-display text-2xl font-bold text-primary">Quer conhecer nossa proposta de ensino?</h2><p className="mt-2 text-muted-foreground">Explore os segmentos e descubra nossa jornada educacional.</p></div><Link to="/ensino" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white"><ArrowUpRight size={17}/> Conheça nossos segmentos</Link></div></section>
  </SiteLayout>;
}
