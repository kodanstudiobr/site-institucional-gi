import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, HeartHandshake, ShieldCheck, HandHeart, BookOpen, Users, Scale, Lightbulb, Heart, Star } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/sobre")({
  head: () => pageHead("/sobre", {
    title: "Nossa Escola | Instituto Educacional G.I.",
    description: "Conheça a apresentação, missão, visão e valores do Instituto Educacional G.I.",
    keywords: "nossa escola, missão, visão, valores, Instituto Educacional G.I.",
  }),
  component: Sobre,
});
const pilares=[
  {icon:Target,title:"Nossa missão",text:"Promover uma educação de qualidade, oferecendo um ambiente acolhedor e estimulante que favoreça o desenvolvimento integral dos estudantes, valorizando o conhecimento, a formação humana e o respeito às individualidades."},
  {icon:Eye,title:"Nossa visão",text:"Ser reconhecida como uma instituição de ensino comprometida com a excelência educacional, a inovação nas práticas pedagógicas e a formação de cidadãos conscientes, autônomos e preparados para transformar a sociedade."},
  {icon:Lightbulb,title:"Proposta Pedagógica",text:"Nossa proposta pedagógica valoriza o desenvolvimento integral dos estudantes, unindo conhecimento, formação humana e experiências significativas. Por meio de práticas educativas que respeitam as individualidades, estimulamos a autonomia, a criatividade, o pensamento crítico e o prazer de aprender."}
];
const valores=[
  {icon:HeartHandshake,title:"Respeito e acolhimento",text:"Valorizar cada estudante em sua individualidade."},
  {icon:ShieldCheck,title:"Ética e responsabilidade",text:"Agir com compromisso, integridade e cuidado."},
  {icon:HandHeart,title:"Empatia",text:"Cultivar relações sensíveis e respeitosas."},
  {icon:BookOpen,title:"Compromisso com a aprendizagem",text:"Promover experiências educativas significativas."},
  {icon:Scale,title:"Inclusão e equidade",text:"Reconhecer diferenças e valorizar oportunidades."},
  {icon:Users,title:"Parcerias com as famílias",text:"Fortalecer o diálogo, a confiança e a participação das famílias na trajetória educativa dos estudantes."}
];
function Sobre() {
  return <SiteLayout>
    <section className="page-hero school-page-hero">
      <picture><source media="(max-width: 767px)" srcSet="/imagens/Atividade%20Escolar%20com%20Arte%20em%20Fam%C3%ADlia.webp"/><img className="school-page-hero__image" src="/imagens/Momento%20de%20arte%20com%20carinho.webp" alt="" aria-hidden="true" fetchPriority="high"/></picture>
      <div className="school-page-hero__overlay" aria-hidden="true"/>
      <div className="relative z-[2] mx-auto max-w-7xl px-5 pt-36 pb-16 lg:px-8 lg:pt-44 lg:pb-20">
        <p className="mb-4 text-xs font-extrabold tracking-[.22em] text-accent">NOSSA ESCOLA</p>
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">Uma escola que acredita no potencial de cada estudante.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">Um pouco sobre nossa escola: conheça nossa identidade, nossos princípios e o compromisso educativo com cada estudante.</p>
      </div>
    </section>
    <section id="apresentacao" className="section-wrap grid items-center gap-12 py-20 lg:grid-cols-2"><div><p className="eyebrow">APRESENTAÇÃO</p><h2 className="section-title">Educação que acolhe, transforma e prepara para o futuro.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">O Instituto Educacional G.I. acredita que a educação é um processo construído diariamente, por meio do conhecimento, do respeito, do acolhimento e das experiências vividas no ambiente escolar.</p></div></section>
    <section className="bg-soft py-20"><div className="section-wrap"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">NOSSA IDENTIDADE</p><h2 className="section-title">Princípios que orientam nossa caminhada.</h2></div><div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{pilares.map(({icon:Icon,title,text})=><article key={title} className="mission-paper-card p-8 md:p-10"><span className="icon-bubble"><Icon size={27}/></span><h3 className="mt-6 font-display text-2xl font-bold text-primary">{title}</h3><p className="mt-4 text-base leading-8 text-muted-foreground">{text}</p></article>)}</div></div></section>
    <section className="section-wrap py-20 lg:py-24"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">NOSSA ESSÊNCIA</p><h2 className="section-title">Valores que fazem parte de cada experiência.</h2><p className="mt-4 leading-8 text-muted-foreground">Acreditamos que a formação acontece também nas relações, nas atitudes e na maneira como construímos nossa comunidade escolar.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{valores.map(({icon:Icon,title,text})=><article key={title} className="feature-card feature-card--glow"><span className="icon-bubble feature-icon"><Icon size={24}/></span><h3 className="mt-4 font-display text-lg font-bold text-primary">{title}</h3><p className="mt-2 leading-7 text-muted-foreground">{text}</p><span className="feature-card__spark" aria-hidden="true"><Star size={14}/></span></article>)}</div></section>
  </SiteLayout>;
}
