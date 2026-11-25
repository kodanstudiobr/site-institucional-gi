import { pageHead } from "@/lib/seo";
import { institutionalConfig } from "@/data/institutional";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Instagram, Mail, ArrowUpRight } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

function WhatsAppIcon({ size = 30 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path fill="currentColor" d="M16.02 3.2A12.7 12.7 0 0 0 5.08 22.35L3.3 28.8l6.6-1.73A12.7 12.7 0 1 0 16.02 3.2Zm0 23.1c-1.9 0-3.76-.5-5.38-1.45l-.39-.23-3.92 1.03 1.05-3.82-.25-.4a10.03 10.03 0 1 1 8.9 4.87Zm5.5-7.52c-.3-.15-1.8-.89-2.08-.99-.28-.1-.48-.15-.68.15-.2.3-.78.99-.96 1.19-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.81.38-.28.3-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.15.2 2.14 3.27 5.18 4.58.72.31 1.28.5 1.72.64.72.23 1.37.12 1.89.12.58-.09 1.8-.74 2.05-1.45.25-.71.25-1.32.18-1.45-.08-.13-.28-.2-.58-.35Z"/>
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
  const whatsappUrl = `https://wa.me/${institutionalConfig.whatsapp}?text=${encodeURIComponent("Olá, gostaria de conhecer mais sobre a escola e fazer parte da família G.I.! 😊")}`;
  const mapQuery = encodeURIComponent("Avenida Floriano Peixoto, 230 - Jaguaribe, João Pessoa - PB, Brasil");
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return <SiteLayout>
    <PageHeader eyebrow="FALE CONOSCO" title={<><span className="block">Estamos aqui</span><span className="block"><span className="text-accent">para receber <span className="contact-title-mobile-break">você.</span></span></span></>} intro="Entre em contato com nossa equipe ou venha conhecer de perto o Instituto Educacional G.I. Será um prazer receber sua família." className="contact-page-hero"/>
    <section className="section-wrap py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div>
          <p className="eyebrow">CANAIS OFICIAIS</p>
          <h2 className="section-title mt-3">Fale conosco</h2>
          <p className="mt-5 leading-8 text-muted-foreground">Nossa equipe está à disposição para atender você, esclarecer dúvidas e apresentar nossa proposta educacional.</p>
          <div className="mt-8 space-y-6">
            <div className="contact-item"><MapPin/><div><strong>Endereço</strong><p>{institutionalConfig.address}</p></div></div>
            <div className="contact-item"><Phone/><div><strong>Telefone fixo</strong><p><a className="transition hover:text-primary" href="tel:+558321825088">{institutionalConfig.phone}</a></p></div></div>
            <div className="contact-item"><WhatsAppIcon/><div><strong>WhatsApp</strong><p><a className="transition hover:text-primary" href={whatsappUrl} target="_blank" rel="noreferrer">(83) 99420-0019</a></p></div></div>
            <div className="contact-item"><Mail/><div><strong>E-mail</strong><p><a className="transition hover:text-primary" href={`mailto:${institutionalConfig.email}`}>{institutionalConfig.email}</a></p></div></div>
            <div className="contact-item"><Instagram/><div><strong>Instagram</strong><p><a className="transition hover:text-primary" href="https://www.instagram.com/institutoeducacionalgi/" target="_blank" rel="noreferrer">{institutionalConfig.instagram}</a></p></div></div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-extrabold text-accent-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><WhatsAppIcon size={26}/> Fale pelo WhatsApp</a>
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
    <section className="bg-soft py-16 md:py-20"><div className="section-wrap flex flex-col items-center text-center"><h2 className="font-display text-2xl font-bold text-primary sm:text-3xl md:text-4xl">Quer ficar por dentro de tudo?</h2><p className="mt-3 text-base text-muted-foreground sm:text-lg">Nos siga no Instagram</p><a href="https://www.instagram.com/institutoeducacionalgi/" target="_blank" rel="noreferrer" aria-label="Siga o Instituto Educacional G.I. no Instagram" className="mt-7 inline-flex items-center gap-3 text-primary transition duration-300 hover:-translate-y-1 hover:text-accent-foreground"><span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30"><Instagram size={22}/></span><span className="text-base font-semibold sm:text-lg">{institutionalConfig.instagram}</span><ArrowUpRight size={18} className="text-accent-foreground"/></a></div></section>
  </SiteLayout>;
}
