import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, HeartHandshake, ShieldCheck, HandHeart, BookOpen, Users, Scale, Lightbulb, Heart } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

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
  {icon:Eye,title:"Nossa visão",text:"Ser reconhecida como uma instituição de ensino comprometida com a excelência educacional, a inovação nas práticas pedagógicas e a formação de cidadãos conscientes, autônomos e preparados para transformar a sociedade."}
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
    <PageHeader title="Uma escola que acredita no potencial de cada estudante." intro="Conheça a identidade, os princípios e o compromisso educativo do Instituto Educacional G.I."/>
    <section id="apresentacao" className="section-wrap grid items-center gap-12 py-20 lg:grid-cols-2"><div className="overflow-hidden rounded-[2rem]"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=85" alt="Professor e estudantes em atividade escolar — imagem ilustrativa" className="aspect-[4/3] w-full object-cover shadow-lg"/><p className="bg-soft px-4 py-2 text-xs text-muted-foreground">Fotografia ilustrativa — será substituída por imagem real da escola.</p></div><div><p className="eyebrow">APRESENTAÇÃO</p><h2 className="section-title">Educação que acolhe, transforma e prepara para o futuro.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">O Instituto Educacional G.I. acredita que a educação é um processo construído diariamente, por meio do conhecimento, do respeito, do acolhimento e das experiências vividas no ambiente escolar.</p><p className="mt-4 leading-8 text-muted-foreground">Nossa proposta é oferecer uma educação que valorize cada estudante, incentive suas potencialidades e contribua para a construção de uma trajetória de aprendizagem significativa.</p></div></section>
    <section className="bg-soft py-20"><div className="section-wrap"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">NOSSA IDENTIDADE</p><h2 className="section-title">Princípios que orientam nossa caminhada.</h2></div><div className="mt-12 grid gap-6 lg:grid-cols-2">{pilares.map(({icon:Icon,title,text})=><article key={title} className="mission-paper-card p-8 md:p-10"><span className="icon-bubble"><Icon size={27}/></span><h3 className="mt-6 font-display text-2xl font-bold text-primary">{title}</h3><p className="mt-4 text-base leading-8 text-muted-foreground">{text}</p></article>)}</div></div></section>
    <section className="section-wrap py-20 lg:py-24"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">A ESSÊNCIA DO G.I.</p><h2 className="section-title">Valores que fazem parte de cada experiência.</h2><p className="mt-4 leading-8 text-muted-foreground">Acreditamos que a formação acontece também nas relações, nas atitudes e na maneira como construímos nossa comunidade escolar.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{valores.map(({icon:Icon,title,text})=><article key={title} className="feature-card"><span className="icon-bubble"><Icon size={24}/></span><h3 className="mt-4 font-display text-lg font-bold text-primary">{title}</h3><p className="mt-2 leading-7 text-muted-foreground">{text}</p></article>)}</div></section>
  </SiteLayout>;
}
