import { pageHead } from "@/lib/seo";
import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Blocks, BookOpen, Telescope, Heart, Brain, HandHeart } from "lucide-react";
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
    bilingualText:"As crianças têm contato com o inglês por meio de músicas, histórias e brincadeiras, reconhecendo palavras e expressões do dia a dia.",
    eyebrow:"EDUCAÇÃO INFANTIL",
    title:"Descobrir, brincar e aprender.",
    image:"/imagens/Arte%20Escolar_%20Folha%20Pintada%20no%20Col%C3%A9gio.webp",
    alt:"Atividade artística escolar com folha pintada",
    paragraphs:[
      "A Educação Infantil é uma etapa fundamental para o desenvolvimento da criança. Por meio de brincadeiras, interações e experiências lúdicas, buscamos estimular a curiosidade, a criatividade, a autonomia e a construção de vínculos.",
      "Nosso objetivo é proporcionar um ambiente acolhedor, onde cada criança possa explorar, descobrir e desenvolver suas habilidades respeitando seu próprio ritmo de aprendizagem."
    ],
    topics:["Brincadeiras e experiências","Desenvolvimento da autonomia","Interação e socialização","Criatividade e exploração","Aprendizagem lúdica"],
    development: {
      intro:"Na Educação Infantil, o desenvolvimento integral acontece por meio do brincar, das interações e das descobertas. Cada experiência respeita o tempo da criança e fortalece suas primeiras aprendizagens.",
      cards:[
        {icon:Blocks,title:"Descobertas e curiosidade",text:"Explorar, observar, perguntar e experimentar para conhecer o mundo ao redor."},
        {icon:Heart,title:"Acolhimento e segurança",text:"Construir vínculos afetivos em um ambiente de cuidado, confiança e respeito."},
        {icon:Brain,title:"Aprendizagem pelo brincar",text:"Desenvolver linguagem, imaginação, coordenação e pensamento em experiências lúdicas."},
        {icon:HandHeart,title:"Convivência e autonomia",text:"Aprender a compartilhar, expressar sentimentos e conquistar pequenas independências."}
      ]
    },
  },
  iniciais: {
    bilingualText:"Atividades contextualizadas ampliam o vocabulário e a compreensão do inglês, estimulando a escuta, a comunicação e o contato com outras culturas.",
    eyebrow:"ANOS INICIAIS DO ENSINO FUNDAMENTAL",
    title:"Conhecimento que constrói possibilidades.",
    image:"/imagens/IMG_3937.webp",
    alt:"Estudantes em atividade escolar",
    paragraphs:[
      "Nos Anos Iniciais, fortalecemos as bases da aprendizagem, incentivando a leitura, a escrita, o raciocínio lógico, a criatividade e o pensamento crítico.",
      "Valorizamos experiências educativas que estimulam a participação, a autonomia e a construção do conhecimento, acompanhando o desenvolvimento de cada estudante."
    ],
    topics:["Alfabetização e letramento","Leitura e escrita","Raciocínio lógico e matemática","Criatividade","Autonomia","Formação cidadã"],
    development: {
      intro:"Nos Anos Iniciais, o desenvolvimento integral une a consolidação das aprendizagens fundamentais à formação de atitudes, relações e habilidades. Os estudantes são incentivados a participar, pensar e agir com autonomia crescente.",
      cards:[
        {icon:BookOpen,title:"Curiosidade e investigação",text:"Estimular perguntas, observações e a busca por respostas em diferentes áreas do conhecimento."},
        {icon:Heart,title:"Acolhimento e confiança",text:"Valorizar cada trajetória, fortalecer a autoestima e respeitar diferentes ritmos de aprendizagem."},
        {icon:Brain,title:"Conhecimento e pensamento",text:"Consolidar leitura, escrita e raciocínio lógico, desenvolvendo criatividade e pensamento crítico."},
        {icon:HandHeart,title:"Autonomia e cidadania",text:"Ampliar a responsabilidade, a cooperação e o respeito nas relações com o outro."}
      ]
    },
  },
  finais: {
    bilingualText:"Os estudantes ampliam o vocabulário, interpretam textos e praticam a comunicação em inglês em situações do cotidiano e do mundo atual.",
    eyebrow:"ANOS FINAIS DO ENSINO FUNDAMENTAL",
    title:"Conhecimento, autonomia e novos horizontes.",
    image:"/imagens/IMG_3939.webp",
    alt:"Estudantes em atividade escolar",
    paragraphs:[
      "Nos Anos Finais do Ensino Fundamental, do 6º ao 9º ano, ampliamos e aprofundamos os conhecimentos construídos ao longo da trajetória escolar. Os estudantes são incentivados a investigar, argumentar, resolver problemas e desenvolver o pensamento crítico.",
      "Por meio de experiências contextualizadas e propostas interdisciplinares, estimulamos a autonomia, a responsabilidade e o protagonismo, preparando cada estudante para novos desafios acadêmicos e para a continuidade dos estudos."
    ],
    topics:["Aprofundamento dos conhecimentos","Pensamento crítico e investigação","Resolução de problemas","Projetos interdisciplinares","Autonomia e protagonismo","Preparação para novos desafios"],
    development: {
      intro:"Nos Anos Finais, o desenvolvimento integral aprofunda conhecimentos e fortalece a capacidade de analisar, argumentar e tomar decisões. A proposta valoriza o protagonismo, a responsabilidade e a preparação para novos desafios.",
      cards:[
        {icon:Telescope,title:"Investigação e inovação",text:"Transformar curiosidade em pesquisa, análise e construção de soluções para situações reais."},
        {icon:Heart,title:"Bem-estar e identidade",text:"Fortalecer autoestima, respeito às diferenças e relações saudáveis nesta fase de mudanças."},
        {icon:Brain,title:"Pensamento crítico",text:"Articular conhecimentos, interpretar informações e desenvolver argumentos consistentes."},
        {icon:HandHeart,title:"Protagonismo e responsabilidade",text:"Exercitar escolhas conscientes, colaboração e participação ativa na comunidade."}
      ]
    },
  }
};
function Ensino() {
  const [active,setActive]=useState<"infantil"|"iniciais"|"finais">("infantil");
  useEffect(() => {
    const segmentFromHash: Record<string, "infantil" | "iniciais" | "finais"> = {
      "#segmento-infantil": "infantil",
      "#segmento-iniciais": "iniciais",
      "#segmento-finais": "finais",
    };
    const requestedSegment = segmentFromHash[window.location.hash];
    if (!requestedSegment) return;
    setActive(requestedSegment);
    window.requestAnimationFrame(() => {
      document.getElementById("nossos-segmentos")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);
  const current=segmentos[active];
  const integralCardsRef = useRef<HTMLDivElement>(null);

  const selectSegment = (segment: "infantil" | "iniciais" | "finais") => {
    setActive(segment);
    window.requestAnimationFrame(() => {
      document.getElementById("segment-selector-anchor")?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  useEffect(() => {
    const container = integralCardsRef.current;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll<HTMLElement>(".integral-card"));
    cards.forEach((card) => card.classList.remove("is-icon-visible"));
    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-icon-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-icon-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -24px 0px" });
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [active]);

  return <SiteLayout>
    <PageHeader eyebrow="NOSSO ENSINO" title="Aprender, descobrir e evoluir." intro="Conheça nossa proposta de ensino, que respeita as etapas do desenvolvimento e valoriza o potencial de cada estudante."/>
    <section className="section-wrap section-decor-wrap grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
      <div className="bilingual-copy">
        <p className="eyebrow">APRENDIZAGEM SEM FRONTEIRAS</p>
        <h2 className="section-title mt-3">O ensino bilíngue faz parte da nossa jornada.</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">A presença da língua inglesa em nossa proposta educativa amplia as possibilidades de aprendizagem e comunicação. Por meio de experiências adequadas a cada etapa escolar, os estudantes têm contato com novos vocabulários, expressões e culturas, desenvolvendo gradualmente a compreensão e a confiança para se comunicar em outro idioma.</p>
        <div className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-accent px-5 py-4 font-display text-base font-bold text-accent-foreground shadow-lg">
          <span className="text-2xl leading-none" role="img" aria-label="Globo terrestre">🌍</span>
          <span>Aprender novos idiomas é descobrir novos mundos.</span>
        </div>
      </div>
      <div className="bilingual-image-wrap relative">
        <img src="/imagens/Atividade%20de%20cartas%20ilustradas%20na%20sala%20de%20aula.webp" alt="Atividade de cartas ilustradas na sala de aula" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl"/>
        <div className="absolute -bottom-5 -right-3 rounded-2xl bg-primary px-6 py-5 font-display text-lg font-bold text-white shadow-lg sm:-right-5">Learning together</div>
      </div>
    </section>
    <section id="nossos-segmentos" className="section-wrap py-20 lg:py-24">
      <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">NOSSOS SEGMENTOS</p><h2 className="section-title">Cada fase tem suas descobertas. Cada estudante, seu jeito de aprender.</h2><p className="mt-5 leading-8 text-muted-foreground">Conheça as etapas de ensino oferecidas pelo Instituto Educacional G.I.</p></div>
      <div id="segment-selector-anchor" className="segment-selector-anchor" aria-hidden="true" />
      <div role="tablist" aria-label="Segmentos de ensino" className="school-segment-tabs mx-auto mt-10 flex max-w-3xl flex-wrap gap-2 rounded-2xl border border-primary/10 bg-white p-2 shadow-[0_10px_28px_rgba(36,51,111,0.14)] sm:flex-nowrap sm:gap-1.5 sm:rounded-full sm:bg-soft sm:shadow-sm">
        <button role="tab" aria-selected={active==="infantil"} onClick={()=>selectSegment("infantil")} className={`min-w-0 flex-1 rounded-xl px-2 py-3 text-xs font-bold leading-tight transition sm:rounded-full sm:px-4 sm:text-sm ${active==="infantil"?"bg-primary text-white shadow-[0_5px_14px_rgba(50,69,148,0.28)] ring-2 ring-primary/15":"text-primary hover:bg-soft"}`}>Educação<br className="sm:hidden"/> Infantil</button>
        <button role="tab" aria-selected={active==="iniciais"} onClick={()=>selectSegment("iniciais")} className={`min-w-0 flex-1 rounded-xl px-2 py-3 text-xs font-bold leading-tight transition sm:rounded-full sm:px-4 sm:text-sm ${active==="iniciais"?"bg-primary text-white shadow-[0_5px_14px_rgba(50,69,148,0.28)] ring-2 ring-primary/15":"text-primary hover:bg-soft"}`}><span className="block sm:inline">Anos</span>{" "}<span className="block sm:inline">Iniciais</span></button>
        <button role="tab" aria-selected={active==="finais"} onClick={()=>selectSegment("finais")} className={`min-w-0 flex-1 rounded-xl px-2 py-3 text-xs font-bold leading-tight transition sm:rounded-full sm:px-4 sm:text-sm ${active==="finais"?"bg-primary text-white shadow-[0_5px_14px_rgba(50,69,148,0.28)] ring-2 ring-primary/15":"text-primary hover:bg-soft"}`}><span className="block sm:inline">Anos</span>{" "}<span className="block sm:inline">Finais</span></button>
      </div>
      <div key={active} role="tabpanel" className="segment-content-enter mt-10 grid items-center gap-10 lg:grid-cols-2">
        <div className="segment-feature-image-wrap overflow-hidden rounded-[2rem]"><img key={current.image} src={current.image} alt={current.alt} className="segment-feature-image w-full object-cover shadow-lg"/></div>
        <div><p className="eyebrow">{current.eyebrow}</p><h3 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">{current.title}</h3>{current.paragraphs.map(p=><p key={p} className="mt-5 leading-8 text-muted-foreground">{p}</p>)}<div className="bilingual-segment-note mt-6"><span className="bilingual-segment-note__icon" role="img" aria-label="Globo terrestre">🌍</span><div><p className="text-sm font-extrabold text-primary">Ensino bilíngue nesta etapa</p><p className="mt-2 text-sm leading-7 text-muted-foreground">{current.bilingualText}</p></div></div><div className="mt-7 grid gap-3 sm:grid-cols-2">{current.topics.map((topic,i)=><div key={topic} className="flex items-center gap-3 rounded-xl bg-soft px-4 py-3 text-sm font-semibold text-primary"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-primary">{i+1}</span>{topic}</div>)}</div></div>
      </div>
    </section>
    <section className="integral-section bg-soft py-16 lg:py-20"><div className="section-wrap"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow">DESENVOLVIMENTO INTEGRAL</p><h2 className="section-title">{active==="infantil"?"Crescer descobrindo, brincando e criando vínculos.":active==="iniciais"?"Aprender, participar e construir autonomia.":"Aprofundar conhecimentos e assumir novos desafios."}</h2><p className="mt-4 leading-8 text-muted-foreground">{current.development.intro}</p></div><div key={active} ref={integralCardsRef} className="integral-cards segment-content-enter mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{current.development.cards.map(({icon:Icon,title,text},i)=><article key={title} className="integral-card" style={{"--card-index":i} as React.CSSProperties}><span className="integral-card__icon"><Icon size={24}/></span><h3 className="mt-5 font-display text-lg font-bold text-primary">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p><span className="integral-card__number">0{i+1}</span></article>)}</div></div></section>
  </SiteLayout>;
}
