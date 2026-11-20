import { pageHead } from "@/lib/seo";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Heart, Brain, HandHeart } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/ensino")({
  head: () => pageHead("/ensino", {
    title: "Educação Infantil e Anos Iniciais | Instituto Educacional G.I.",
    description: "Conheça os segmentos de Educação Infantil e Anos Iniciais do Instituto Educacional G.I. e nossa proposta de aprendizagem.",
    keywords: "Educação Infantil, Anos Iniciais do Ensino Fundamental, aprendizagem, Instituto Educacional G.I.",
  }),
  component: Ensino,
});

const segmentos = {
  infantil: {
    eyebrow:"EDUCAÇÃO INFANTIL",
    title:"Descobrir, brincar e aprender.",
    image:"https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85",
    alt:"Crianças em atividade lúdica — imagem ilustrativa",
    paragraphs:[
      "A Educação Infantil é uma etapa fundamental para o desenvolvimento da criança. Por meio de brincadeiras, interações e experiências lúdicas, buscamos estimular a curiosidade, a criatividade, a autonomia e a construção de vínculos.",
      "Nosso objetivo é proporcionar um ambiente acolhedor, onde cada criança possa explorar, descobrir e desenvolver suas habilidades respeitando seu próprio ritmo de aprendizagem."
    ],
    topics:["Brincadeiras e experiências","Desenvolvimento da autonomia","Interação e socialização","Criatividade e exploração","Aprendizagem lúdica"]
  },
  iniciais: {
    eyebrow:"ANOS INICIAIS DO ENSINO FUNDAMENTAL",
    title:"Conhecimento que constrói possibilidades.",
    image:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    alt:"Estudantes em atividade de sala de aula — imagem ilustrativa",
    paragraphs:[
      "Nos Anos Iniciais, fortalecemos as bases da aprendizagem, incentivando a leitura, a escrita, o raciocínio lógico, a criatividade e o pensamento crítico.",
      "Valorizamos experiências educativas que estimulam a participação, a autonomia e a construção do conhecimento, acompanhando o desenvolvimento de cada estudante."
    ],
    topics:["Alfabetização e letramento","Leitura e escrita","Raciocínio lógico e matemática","Criatividade","Autonomia","Formação cidadã"]
  }
};
function Ensino() {
  const [active,setActive]=useState<"infantil"|"iniciais">("infantil");
  const current=segmentos[active];
  return <SiteLayout>
    <PageHeader title="Aprender, descobrir e evoluir." intro="Uma proposta educativa que respeita as etapas do desenvolvimento e valoriza o potencial de cada estudante."/>
    <section className="section-wrap py-20 lg:py-24">
      <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">NOSSOS SEGMENTOS</p><h2 className="section-title">Cada fase tem suas descobertas. Cada estudante, seu jeito de aprender.</h2><p className="mt-5 leading-8 text-muted-foreground">Conheça as etapas de ensino oferecidas pelo Instituto Educacional G.I.</p></div>
      <div role="tablist" aria-label="Segmentos de ensino" className="mx-auto mt-10 flex max-w-xl rounded-full bg-soft p-1.5">
        <button role="tab" aria-selected={active==="infantil"} onClick={()=>setActive("infantil")} className={`flex-1 rounded-full px-4 py-3 text-sm font-bold transition ${active==="infantil"?"bg-primary text-white shadow":"text-primary hover:bg-white"}`}>Educação Infantil</button>
        <button role="tab" aria-selected={active==="iniciais"} onClick={()=>setActive("iniciais")} className={`flex-1 rounded-full px-4 py-3 text-sm font-bold transition ${active==="iniciais"?"bg-primary text-white shadow":"text-primary hover:bg-white"}`}>Anos Iniciais</button>
      </div>
      <div role="tabpanel" className="mt-10 grid items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem]"><img key={current.image} src={current.image} alt={current.alt} className="aspect-[4/3] w-full object-cover shadow-lg"/><p className="bg-soft px-4 py-2 text-xs text-muted-foreground">Fotografia ilustrativa — será substituída por imagens reais da escola.</p></div>
        <div><p className="eyebrow">{current.eyebrow}</p><h3 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">{current.title}</h3>{current.paragraphs.map(p=><p key={p} className="mt-5 leading-8 text-muted-foreground">{p}</p>)}<div className="mt-7 grid gap-3 sm:grid-cols-2">{current.topics.map((topic,i)=><div key={topic} className="flex items-center gap-3 rounded-xl bg-soft px-4 py-3 text-sm font-semibold text-primary"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-primary">{i+1}</span>{topic}</div>)}</div></div>
      </div>
    </section>
    <section className="bg-soft py-16"><div className="section-wrap"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow">DESENVOLVIMENTO INTEGRAL</p><h2 className="section-title">Uma aprendizagem construída com cuidado e propósito.</h2><p className="mt-4 leading-8 text-muted-foreground">Em cada etapa, buscamos criar oportunidades para que os estudantes participem, experimentem, construam conhecimentos e desenvolvam suas potencialidades.</p></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[{icon:Sparkles,title:"Curiosidade",text:"Incentivo às descobertas e perguntas."},{icon:Heart,title:"Acolhimento",text:"Respeito às individualidades e aos ritmos."},{icon:Brain,title:"Conhecimento",text:"Construção de aprendizagens significativas."},{icon:HandHeart,title:"Convivência",text:"Vínculos, cooperação e respeito."}].map(({icon:Icon,title,text})=><article key={title} className="feature-card"><span className="icon-bubble"><Icon size={23}/></span><h3 className="mt-4 font-display font-bold text-primary">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div></section>
  </SiteLayout>;
}
