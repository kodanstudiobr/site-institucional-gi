import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Instagram, Send, MessageCircle, Mail } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: [{ title: "Contato e Matrículas | Instituto Educacional G.I." }, { name: "description", content: "Entre em contato com o Instituto Educacional G.I. e solicite informações sobre matrículas e segmentos de ensino." }, { name: "keywords", content: "contato escola, matrículas, Educação Infantil, Anos Iniciais, Instituto Educacional G.I." }] }),
  component: Contato,
});

// Preencha com o WhatsApp oficial da escola, incluindo DDI e DDD, somente números.
const WHATSAPP_OFICIAL = "";

function Contato() {
  const [form,setForm] = useState({responsavel:"",aluno:"",telefone:"",etapa:"Educação Infantil",mensagem:""});
  const [feedback,setFeedback] = useState("");
  const update = (field:keyof typeof form,value:string) => setForm(old=>({...old,[field]:value}));
  const message = encodeURIComponent(`Olá! Gostaria de informações sobre matrículas no Instituto Educacional G.I.\nResponsável: ${form.responsavel}\nAluno: ${form.aluno}\nWhatsApp: ${form.telefone}\nEtapa: ${form.etapa}\nMensagem: ${form.mensagem}`);
  function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(!WHATSAPP_OFICIAL){setFeedback("O formulário está pronto. Para enviar, a escola precisa configurar o número oficial de WhatsApp no projeto.");return;}
    window.open(`https://wa.me/${WHATSAPP_OFICIAL}?text=${message}`,"_blank","noopener,noreferrer");
    setFeedback("O WhatsApp foi aberto para você revisar e enviar a mensagem.");
  }
  return <SiteLayout>
    <PageHeader title="Vamos conversar?" intro="Será um prazer apresentar o Instituto Educacional G.I. e ajudar você a conhecer nossa proposta de ensino."/>
    <section className="section-wrap grid gap-12 py-20 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">FALE COM A GENTE</p><h2 className="section-title">Estamos prontos para receber você.</h2><p className="mt-5 leading-8 text-muted-foreground">Entre em contato para tirar dúvidas, solicitar informações sobre os segmentos de ensino ou conversar sobre matrículas.</p><div className="mt-8 space-y-5"><div className="contact-item"><MapPin/><div><strong>Endereço</strong><p>Informação a ser confirmada pela escola</p></div></div><div className="contact-item"><Phone/><div><strong>Telefone e WhatsApp</strong><p>Contato oficial a ser informado</p></div></div><div className="contact-item"><Instagram/><div><strong>Instagram</strong><p>Perfil oficial a ser informado</p></div></div><div className="contact-item"><Mail/><div><strong>E-mail</strong><p>Endereço eletrônico a ser informado</p></div></div></div><div className="mt-8 rounded-2xl bg-soft p-5"><p className="text-sm leading-7 text-muted-foreground">Os dados oficiais de endereço, telefone, e-mail e redes sociais serão adicionados assim que forem disponibilizados pela instituição.</p></div></div>
      <form className="rounded-3xl border border-border bg-white p-6 shadow-xl md:p-9" onSubmit={submit}><h3 className="font-display text-2xl font-bold text-primary">Solicite informações sobre matrículas</h3><p className="mt-2 text-sm text-muted-foreground">Preencha os campos para preparar sua solicitação.</p><div className="mt-7 grid gap-5 sm:grid-cols-2"><label className="field-label">Nome do responsável<input required value={form.responsavel} onChange={e=>update("responsavel",e.target.value)} placeholder="Seu nome" className="field-input"/></label><label className="field-label">Nome do aluno<input value={form.aluno} onChange={e=>update("aluno",e.target.value)} placeholder="Nome da criança" className="field-input"/></label><label className="field-label">WhatsApp<input required type="tel" value={form.telefone} onChange={e=>update("telefone",e.target.value)} placeholder="(00) 00000-0000" className="field-input"/></label><label className="field-label">Etapa de interesse<select value={form.etapa} onChange={e=>update("etapa",e.target.value)} className="field-input"><option>Educação Infantil</option><option>Anos Iniciais</option></select></label><label className="field-label sm:col-span-2">Mensagem (opcional)<textarea value={form.mensagem} onChange={e=>update("mensagem",e.target.value)} rows={4} placeholder="Como podemos ajudar?" className="field-input"/></label></div><button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-extrabold text-accent-foreground transition hover:-translate-y-0.5"><Send size={17}/> Preparar solicitação</button>{feedback&&<p role="status" className="mt-4 rounded-xl bg-soft p-4 text-sm leading-6 text-primary">{feedback}</p>}<p className="mt-3 text-center text-xs text-muted-foreground">A mensagem só será enviada após a configuração do contato oficial da escola.</p></form></section>
    <section className="bg-soft py-14"><div className="section-wrap flex flex-wrap items-center justify-between gap-5"><div><h2 className="font-display text-2xl font-bold text-primary">Quer conhecer nossa escola?</h2><p className="mt-2 text-muted-foreground">Conheça os segmentos de ensino do Instituto Educacional G.I.</p></div><Link to="/ensino" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white"><MessageCircle size={17}/> Conheça nossos segmentos</Link></div></section>
  </SiteLayout>;
}
