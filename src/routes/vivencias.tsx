import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X, Images, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";

export const Route = createFileRoute("/vivencias")({
  head: () => pageHead("/vivencias", {
    title: "Vivências e Projetos | Instituto Educacional G.I.",
    description: "Conheça as experiências, atividades e projetos pedagógicos do Instituto Educacional G.I.",
    keywords: "projetos pedagógicos, atividades escolares, vivências educativas, Instituto Educacional G.I.",
  }),
  component: Vivencias,
});

const items = [
  { title: "Projetos pedagógicos", text: "Investigações, descobertas e atividades que aproximam o conhecimento da vida.", image: "/imagens/Setembro Amarelo_ Todos Pela Vida.webp", images: ["/imagens/Setembro Amarelo_ Todos Pela Vida.webp", "/imagens/Crianças na Canoa dos Povos Indígenas.webp", "/imagens/projeto-foto-1.webp", "/imagens/Jovens Apresentam Mostra Cultural.webp", "/imagens/Menina sorridente com carro rosa na escola.webp", "/imagens/Meninas na Feira de Sanduíches Escolares.webp"] },
  { title: "Arte e cultura", text: "Experiências que valorizam a expressão, a imaginação e a criatividade.", image: "/imagens/Atividade Escolar com Arte em Família.webp", images: ["/imagens/Atividade Escolar com Arte em Família.webp", "/imagens/Estudantes diante da exposição artística escolar.webp", "/imagens/Menina com máscara de fantasia colorida.webp", "/imagens/projeto-arte-3.webp", "/imagens/Pintura com balão azul.webp", "/imagens/Seminário de Saberes Indígenas e Mel.webp", "/imagens/Dança Caipira no Ginásio Escolar.webp"] },
  { title: "Convivência e cidadania", text: "Momentos coletivos que fortalecem vínculos, respeito e cooperação.", image: "/imagens/Atividade em grupo na sala de aula.webp", images: ["/imagens/Atividade em grupo na sala de aula.webp", "/imagens/Fila de Alunos no Ginásio Escolar.webp", "/imagens/Roda de atividades e criatividade.webp", "/imagens/Aula Infantil com Mesa Amarela e Aprendizado.webp", "/imagens/Crianças em Fantasias diante da Bandeira Brasileira.webp"] },
  { title: "Leitura e imaginação", text: "Histórias que despertam a curiosidade e ampliam o repertório das crianças.", image: "/imagens/Leitura em roda na sala de aula.webp", images: ["/imagens/Leitura em roda na sala de aula.webp", "/imagens/projeto-leitura-02.webp", "/imagens/projeto leitura-01.webp", "/imagens/Criança em fantasia branca na escolinha.webp"] },
  { title: "Descobertas e experiências", text: "Explorar, experimentar e aprender com o mundo ao redor.", image: "/imagens/IMG_3501.webp", images: ["/imagens/IMG_3501.webp", "/imagens/projeto-descorbertas-01.webp", "/imagens/projeto-descorbetas-02 (1).webp", "/imagens/projeto-descorbetas-03.webp"] },
  { title: "Criatividade em ação", text: "Atividades que valorizam a expressão, a imaginação e novas ideias.", image: "/imagens/Estudante Apresenta Terrário Escolar.webp", images: ["/imagens/Estudante Apresenta Terrário Escolar.webp", "/imagens/Duas Alunas com Projetos Escolares.webp", "/imagens/projeto-criatividade-01 (1).webp", "/imagens/Emoções e Sentimentos na Escola (1).webp", "/imagens/Dia da Meia Maluca Colorido (1).webp", "/imagens/Apresentação Escolar de Impactos Ambientais (1).webp"] },
  { title: "Esporte e Lazer", text: "Movimento, brincadeiras e atividades que estimulam a saúde, a integração e o espírito de equipe.", image: "/imagens/Momento de vôlei no ginásio.webp", images: ["/imagens/Momento de vôlei no ginásio.webp", "/imagens/Alegria no escorregador vermelho.webp", "/imagens/Meninas Sorridentes no Playground Escolar.webp", "/imagens/Menino sorridente no brinquedo azul.webp", "/imagens/Três Meninos Sorrindo no Playground.webp"] },
  { title: "Festividades e Eventos", text: "Celebrações, apresentações e momentos especiais que aproximam toda a comunidade escolar.", image: "/imagens/IMG_3991.webp", images: ["/imagens/IMG_3991.webp", "/imagens/IMG_3989.webp", "/imagens/IMG_3988.webp", "/imagens/IMG_3990.webp", "/imagens/IMG_3992.webp"] },
];

type ExperienceItem = (typeof items)[number];

function VivenciaCard({ item, index, onOpen }: { item: ExperienceItem; index: number; onOpen: () => void }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [outgoingImageIndex, setOutgoingImageIndex] = useState<number | null>(null);
  const [crossfadeStarted, setCrossfadeStarted] = useState(true);
  const cardRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (item.images.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const card = cardRef.current;
    if (!card) return;

    let interval: number | undefined;
    const start = () => {
      if (interval !== undefined) return;
      interval = window.setInterval(() => {
        setActiveImageIndex((current) => {
          const next = (current + 1) % item.images.length;
          setOutgoingImageIndex(current);
          setCrossfadeStarted(false);
          window.requestAnimationFrame(() => setCrossfadeStarted(true));
          return next;
        });
      }, 5000);
    };
    const stop = () => {
      if (interval !== undefined) window.clearInterval(interval);
      interval = undefined;
    };

    if (!("IntersectionObserver" in window)) start();
    else {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      }, { threshold: 0.15 });
      observer.observe(card);
      return () => {
        observer.disconnect();
        stop();
      };
    }
    return stop;
  }, [item.images.length, index]);
  useEffect(() => {
    if (outgoingImageIndex === null) return;
    const timeout = window.setTimeout(() => setOutgoingImageIndex(null), 1350);
    return () => window.clearTimeout(timeout);
  }, [outgoingImageIndex]);
  const focusFace = item.title === "Arte e cultura" || item.title === "Criatividade em ação";
  const imageFocusClass = focusFace ? "experience-card__background--face-focus" : "";
  return <article ref={cardRef} className="experience-card experience-card__button">
    {outgoingImageIndex !== null && <img className={`experience-card__background experience-card__background--slideshow is-outgoing ${imageFocusClass}`} src={item.images[outgoingImageIndex]} alt="" loading="lazy" decoding="async" aria-hidden="true" />}
    <img className={`experience-card__background experience-card__background--slideshow ${crossfadeStarted ? "is-active" : "is-entering"} ${imageFocusClass}`} src={item.images[activeImageIndex]} alt="" loading="lazy" decoding="async" aria-hidden="true" />
    <div className="experience-card__shade" />
    <span className="experience-card__number">0{index + 1}</span>
    <div className="experience-card__content">
      <h2 className="font-display text-xl font-bold text-white">{item.title}</h2>
      <p className="mt-2 leading-6 text-white/90">{item.text}</p>
      <button type="button" className="experience-card__gallery-button" onClick={onOpen} aria-label={`Ver galeria de ${item.title}`}>
        VER GALERIA <ArrowRight size={17} />
      </button>
    </div>
  </article>;
}

function Vivencias() {
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const selectedExperience = selectedGallery !== null ? items[selectedGallery] : null;
  const galleryImages = selectedExperience?.images ?? [];
  const showPrevious = () => swiperRef.current?.slidePrev();
  const showNext = () => swiperRef.current?.slideNext();

  useEffect(() => {
    if (!selectedExperience) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedGallery(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedGallery, galleryImages.length]);

  return <SiteLayout>
    <PageHeader className="vivencias-page-hero" eyebrow="GALERIA DE FOTOS" title={<>Momentos que <span className="text-accent">contam nossa história.</span></>} intro="Explore os registros das atividades, projetos, celebrações e experiências vividas pelos estudantes do Instituto Educacional G.I." />
    <section className="section-wrap py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="eyebrow">REGISTROS DA NOSSA ESCOLA</p>
        <h2 className="section-title">Uma galeria de <span className="title-highlight">momentos especiais.</span></h2>
        <p className="mt-4 leading-8 text-muted-foreground">Cada fotografia guarda uma experiência, uma descoberta e uma lembrança. Escolha uma galeria para ver todos os registros de cada categoria.</p>
      </div>
      <div className="experience-gallery-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => <VivenciaCard key={item.title} item={item} index={index} onOpen={() => { setSelectedGallery(index); setActiveGalleryImage(0); }} />)}
      </div>
    </section>
    {selectedExperience && createPortal(
      <div className="experience-lightbox experience-lightbox--fullscreen" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedGallery(null); }}>
        <section className="experience-lightbox__panel experience-lightbox__panel--fullscreen" role="dialog" aria-modal="true" aria-label={`Galeria: ${selectedExperience.title}`}>
          <button type="button" className="experience-lightbox__close experience-lightbox__close--floating" onClick={() => setSelectedGallery(null)} aria-label="Fechar galeria"><X size={24} /></button>
          <div className="experience-lightbox__stage experience-lightbox__stage--fullscreen">
            <Swiper className="experience-gallery-swiper" initialSlide={activeGalleryImage} onSwiper={(swiper) => { swiperRef.current = swiper; }} onSlideChange={(swiper) => setActiveGalleryImage(swiper.activeIndex)} speed={450} slidesPerView={1} allowTouchMove simulateTouch resistanceRatio={0.65}>
              {galleryImages.map((image, index) => <SwiperSlide key={`${image}-${index}`}><img src={image} alt={`${selectedExperience.title} — foto ${index + 1}`} /></SwiperSlide>)}
            </Swiper>
          </div>
          {galleryImages.length > 1 && <>
            <button type="button" className="experience-lightbox__arrow experience-lightbox__arrow--prev experience-lightbox__arrow--floating" onClick={showPrevious} aria-label="Foto anterior"><ChevronLeft size={30} /></button>
            <button type="button" className="experience-lightbox__arrow experience-lightbox__arrow--next experience-lightbox__arrow--floating" onClick={showNext} aria-label="Próxima foto"><ChevronRight size={30} /></button>
          </>}
          <div className="experience-lightbox__counter experience-lightbox__counter--below">{String(activeGalleryImage + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}</div>
        </section>
      </div>, document.body
    )}
  </SiteLayout>;
}
