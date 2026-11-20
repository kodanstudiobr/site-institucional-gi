import { pageHead } from "@/lib/seo";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Heart, Brain, HandHeart } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/ensino")({
  head: () => pageHead("/ensino", {
    title: "Educação Infantil, Anos Iniciais e Anos Finais | Instituto Educacional G.I.",
    description: "Conheça os segmentos de Educação Infantil, Anos Iniciais e Anos Finais do Instituto Educacional G.I. e nossa proposta de aprendizagem.",
    keywords: "Educação Infantil, Anos Iniciais, Anos Finais do Ensino Fundamental, aprendizagem, Instituto Educacional G.I.",
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
    development: {
      intro:"Na Educação Infantil, o desenvolvimento integral acontece por meio do brincar, das interações e das descobertas. Cada experiência respeita o tempo da criança e fortalece suas primeiras aprendizagens.",
      cards:[
        {icon:Sparkles,title:"Descobertas e curiosidade",text:"Explorar, observar, perguntar e experimentar para conhecer o mundo ao redor."},
        {icon:Heart,title:"Acolhimento e segurança",text:"Construir vínculos afetivos em um ambiente de cuidado, confiança e respeito."},
        {icon:Brain,title:"Aprendizagem pelo brincar",text:"Desenvolver linguagem, imaginação, coordenação e pensamento em experiências lúdicas."},
        {icon:HandHeart,title:"Convivência e autonomia",text:"Aprender a compartilhar, expressar sentimentos e conquistar pequenas independências."}
      ]
    },
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
    development: {
      intro:"Nos Anos Iniciais, o desenvolvimento integral une a consolidação das aprendizagens fundamentais à formação de atitudes, relações e habilidades. Os estudantes são incentivados a participar, pensar e agir com autonomia crescente.",
      cards:[
        {icon:Sparkles,title:"Curiosidade e investigação",text:"Estimular perguntas, observações e a busca por respostas em diferentes áreas do conhecimento."},
        {icon:Heart,title:"Acolhimento e confiança",text:"Valorizar cada trajetória, fortalecer a autoestima e respeitar diferentes ritmos de aprendizagem."},
        {icon:Brain,title:"Conhecimento e pensamento",text:"Consolidar leitura, escrita e raciocínio lógico, desenvolvendo criatividade e pensamento crítico."},
        {icon:HandHeart,title:"Autonomia e cidadania",text:"Ampliar a responsabilidade, a cooperação e o respeito nas relações com o outro."}
      ]
    },
  },
  finais: {
    eyebrow:"ANOS FINAIS DO ENSINO FUNDAMENTAL",
    title:"Conhecimento, autonomia e novos horizontes.",
    image:"https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=85",
    alt:"Estudantes em atividade de aprendizagem — imagem ilustrativa",
    paragraphs:[
      "Nos Anos Finais do Ensino Fundamental, do 6º ao 9º ano, ampliamos e aprofundamos os conhecimentos construídos ao longo da trajetória escolar. Os estudantes são incentivados a investigar, argumentar, resolver problemas e desenvolver o pensamento crítico.",
      "Por meio de experiências contextualizadas e propostas interdisciplinares, estimulamos a autonomia, a responsabilidade e o protagonismo, preparando cada estudante para novos desafios acadêmicos e para a continuidade dos estudos."
    ],
    topics:["Aprofundamento dos conhecimentos","Pensamento crítico e investigação","Resolução de problemas","Projetos interdisciplinares","Autonomia e protagonismo","Preparação para novos desafios"]
    development: {
      intro:"Nos Anos Finais, o desenvolvimento integral aprofunda conhecimentos e fortalece a capacidade de analisar, argumentar e tomar decisões. A proposta valoriza o protagonismo, a responsabilidade e a preparação para novos desafios.",
      cards:[
        {icon:Sparkles,title:"Investigação e inovação",text:"Transformar curiosidade em pesquisa, análise e construção de soluções para situações reais."},
        {icon:Heart,title:"Bem-estar e identidade",text:"Fortalecer autoestima, respeito às diferenças e relações saudáveis nesta fase de mudanças."},
        {icon:Brain,title:"Pensamento crítico",text:"Articular conhecimentos, interpretar informações e desenvolver argumentos consistentes."},
        {icon:HandHeart,title:"Protagonismo e responsabilidade",text:"Exercitar escolhas conscientes, colaboração e participação ativa na comunidade."}
      ]
    },
  }
};
function Ensino() {
  const [active,setActive]=useState<"infantil"|"iniciais"|"finais">("infantil");
  const current=segmentos[active];
  return <SiteLayout>
    <PageHeader title="Aprender, descobrir e evoluir." intro="Uma proposta educativa que respeita as etapas do desenvolvimento e valoriza o potencial de cada estudante."/>
    <section className="section-wrap py-20 lg:py-24">
      <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">NOSSOS SEGMENTOS</p><h2 className="section-title">Cada fase tem suas descobertas. Cada estudante, seu jeito de aprender.</h2><p className="mt-5 leading-8 text-muted-foreground">Conheça as etapas de ensino oferecidas pelo Instituto Educacional G.I.</p></div>
      <div role="tablist" aria-label="Segmentos de ensino" className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-2 rounded-2xl border border-primary/10 bg-white p-2 shadow-[0_10px_28px_rgba(36,51,111,0.14)] sm:flex-nowrap sm:gap-1.5 sm:rounded-full sm:bg-soft sm:shadow-sm">
        <button role="tab" aria-selected={active==="infantil"} onClick={()=>setActive("infantil")} className={`min-w-0 flex-1 rounded-xl px-2 py-3 text-xs font-bold leading-tight transition sm:rounded-full sm:px-4 sm:text-sm ${active==="infantil"?"bg-primary text-white shadow-[0_5px_14px_rgba(50,69,148,0.28)] ring-2 ring-primary/15":"text-primary hover:bg-soft"}`}>Educação<br className="sm:hidden"/> Infantil</button>
        <button role="tab" aria-selected={active==="iniciais"} onClick={()=>setActive("iniciais")} className={`min-w-0 flex-1 rounded-xl px-2 py-3 text-xs font-bold leading-tight transition sm:rounded-full sm:px-4 sm:text-sm ${active==="iniciais"?"bg-primary text-white shadow-[0_5px_14px_rgba(50,69,148,0.28)] ring-2 ring-primary/15":"text-primary hover:bg-soft"}`}><span className="block sm:inline">Anos</span>{" "}<span className="block sm:inline">Iniciais</span></button>
        <button role="tab" aria-selected={active==="finais"} onClick={()=>setActive("finais")} className={`min-w-0 flex-1 rounded-xl px-2 py-3 text-xs font-bold leading-tight transition sm:rounded-full sm:px-4 sm:text-sm ${active==="finais"?"bg-primary text-white shadow-[0_5px_14px_rgba(50,69,148,0.28)] ring-2 ring-primary/15":"text-primary hover:bg-soft"}`}><span className="block sm:inline">Anos</span>{" "}<span className="block sm:inline">Finais</span></button>
      </div>
      <div role="tabpanel" className="mt-10 grid items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem]"><img key={current.image} src={current.image} alt={current.alt} className="aspect-[4/3] w-full object-cover shadow-lg"/><p className="bg-soft px-4 py-2 text-xs text-muted-foreground">Fotografia ilustrativa — será substituída por imagens reais da escola.</p></div>
        <div><p className="eyebrow">{current.eyebrow}</p><h3 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">{current.title}</h3>{current.paragraphs.map(p=><p key={p} className="mt-5 leading-8 text-muted-foreground">{p}</p>)}<div className="mt-7 grid gap-3 sm:grid-cols-2">{current.topics.map((topic,i)=><div key={topic} className="flex items-center gap-3 rounded-xl bg-soft px-4 py-3 text-sm font-semibold text-primary"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-primary">{i+1}</span>{topic}</div>)}</div></div>
      </div>
    </section>
    <section className="integral-section bg-soft py-16 lg:py-20"><div className="section-wrap"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow">DESENVOLVIMENTO INTEGRAL</p><h2 className="section-title">{active==="infantil"?"Crescer descobrindo, brincando e criando vínculos.":active==="iniciais"?"Aprender, participar e construir autonomia.":"Aprofundar conhecimentos e assumir novos desafios."}</h2><p className="mt-4 leading-8 text-muted-foreground">{current.development.intro}</p></div><div className="integral-cards mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{current.development.cards.map(({icon:Icon,title,text},i)=><article key={title} className="integral-card" style={{"--card-index":i} as React.CSSProperties}><span className="integral-card__icon"><Icon size={24}/></span><h3 className="mt-5 font-display text-lg font-bold text-primary">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p><span className="integral-card__number">0{i+1}</span></article>)}</div></div></section>
  </SiteLayout>;
}
