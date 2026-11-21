import { pageHead } from "@/lib/seo";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route=createFileRoute("/estrutura")({head: () => pageHead("/estrutura",{title:"Nossa Estrutura | Instituto Educacional G.I.",description:"Conheça os ambientes de aprendizagem e convivência do Instituto Educacional G.I.",keywords:"estrutura escolar, ambientes de aprendizagem, Instituto Educacional G.I."}),component:Estrutura});
const fotos=[
  {title:"Ambientes de aprendizagem",description:"Espaços preparados para apoiar as descobertas e a construção do conhecimento.",image:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85"},
  {title:"Leitura e imaginação",description:"Momentos de contato com histórias, livros e novas ideias.",image:"https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=85"},
  {title:"Brincar e conviver",description:"A convivência e as experiências coletivas também fazem parte da aprendizagem.",image:"https://images.unsplash.com/photo-1472162314594-eba3c3d2b7e3?auto=format&fit=crop&w=1400&q=85"},
  {title:"Criatividade em ação",description:"Atividades que incentivam a expressão, a curiosidade e a imaginação.",image:"https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=1400&q=85"}
];
function Estrutura(){
  const [selected,setSelected]=useState<number|null>(null);
  const current=selected!==null?fotos[selected]:undefined;
  const close=()=>setSelected(null);
  return <SiteLayout>
    <PageHeader eyebrow="NOSSA ESTRUTURA" title="Um ambiente preparado para acolher e ensinar." intro="Conheça os espaços e ambientes que fazem parte da experiência educativa da nossa escola."/>
    <section className="section-wrap py-20">
      <div className="mx-auto max-w-2xl text-center"><p className="eyebrow">NOSSA ESTRUTURA</p><h2 className="section-title">Espaços para aprender, conviver e descobrir.</h2><p className="mt-4 leading-8 text-muted-foreground">Acreditamos que o ambiente escolar contribui para experiências significativas. Esta galeria apresenta referências visuais provisórias e será atualizada com fotografias reais da escola.</p></div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">{fotos.map((foto,i)=><button key={foto.title} onClick={()=>setSelected(i)} className="gallery-button text-left focus-visible:outline-offset-4"><img src={foto.image} alt={foto.title+" — imagem ilustrativa"} loading="lazy" className="h-64 w-full object-cover"/><span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14245f]/90 to-transparent p-6 pt-14 text-left text-white"><strong className="block font-display text-xl">{foto.title}</strong><span className="mt-1 block text-sm text-white/85">Ver imagem ampliada</span></span></button>)}</div>
      <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground"><Images size={17}/> Imagens ilustrativas. Fotos reais da instituição serão adicionadas posteriormente.</p>
    </section>
    {selected!==null&&current&&<div role="dialog" aria-modal="true" aria-label={current.title} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101936]/95 p-4" onClick={close}><button onClick={close} aria-label="Fechar galeria" className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><X/></button><button onClick={e=>{e.stopPropagation();setSelected((selected+fotos.length-1)%fotos.length)}} aria-label="Imagem anterior" className="absolute left-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-8"><ChevronLeft/></button><div className="max-w-5xl" onClick={e=>e.stopPropagation()}><img src={current.image} alt={current.title+" — imagem ilustrativa"} className="max-h-[78vh] w-auto rounded-xl object-contain"/><p className="mt-4 text-center font-semibold text-white">{current.title}</p></div><button onClick={e=>{e.stopPropagation();setSelected((selected+1)%fotos.length)}} aria-label="Próxima imagem" className="absolute right-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-8"><ChevronRight/></button></div>}
  </SiteLayout>;
}
