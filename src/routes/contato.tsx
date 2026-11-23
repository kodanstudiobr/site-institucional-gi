import { pageHead } from "@/lib/seo";
import { institutionalConfig } from "@/data/institutional";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

function WhatsAppIcon({ size = 30 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#25D366" />
    <path fill="#fff" d="M17.47 14.38c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.52s1.09 2.92 1.24 3.12c.15.2 2.14 3.27 5.18 4.58.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.44.25-.7.25-1.31.18-1.44-.08-.12-.28-.2-.58-.35Z"/>
    <path fill="#fff" d="M12.02 2.5a9.45 9.45 0 0 0-8.1 14.32L2.5 21.5l4.8-1.26a9.5 9.5 0 1 0 4.72-17.74Zm0 17.2c-1.45 0-2.87-.39-4.1-1.13l-.3-.18-2.85.75.76-2.78-.2-.31a7.7 7.7 0 1 1 6.69 3.65Z"/>
  </svg>;
}

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
    <PageHeader eyebrow="FALE CONOSCO" title={<><span className="block">Estamos aqui</span><span className="block">para receber <span className="contact-title-mobile-break">você.</span></span></>} intro="Entre em contato com nossa equipe ou venha conhecer de perto o Instituto Educacional G.I. Será um prazer receber sua família." className="contact-page-hero"/>
    <section className="section-wrap py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div>
          <p className="eyebrow">CANAIS OFICIAIS</p>
          <h2 className="section-title mt-3">Fale com a <span className="title-highlight">nossa escola.</span></h2>
          <p className="mt-5 leading-8 text-muted-foreground">Nossa equipe está à disposição para atender você, esclarecer dúvidas e apresentar nossa proposta educacional.</p>
          <div className="mt-8 space-y-6">
            <div className="contact-item"><MapPin/><div><strong>Endereço</strong><p>{institutionalConfig.address}</p></div></div>
            <div className="contact-item"><Phone/><div><strong>Telefone fixo</strong><p><a className="transition hover:text-primary" href="tel:+558321825088">{institutionalConfig.phone}</a></p></div></div>
            <div className="contact-item"><WhatsAppIcon/><div><strong>WhatsApp</strong><p><a className="transition hover:text-primary" href={`https://wa.me/${institutionalConfig.whatsapp}`} target="_blank" rel="noreferrer">(83) 99420-0019</a></p></div></div>
            <div className="contact-item"><Mail/><div><strong>E-mail</strong><p><a className="transition hover:text-primary" href={`mailto:${institutionalConfig.email}`}>{institutionalConfig.email}</a></p></div></div>
            <div className="contact-item"><Instagram/><div><strong>Instagram</strong><p><a className="transition hover:text-primary" href="https://www.instagram.com/institutoeducacionalgi/" target="_blank" rel="noreferrer">{institutionalConfig.instagram}</a></p></div></div>
          </div>
          <a href={`https://wa.me/${institutionalConfig.whatsapp}`} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-extrabold text-accent-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><WhatsAppIcon size={26}/> Fale pelo WhatsApp</a>
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
