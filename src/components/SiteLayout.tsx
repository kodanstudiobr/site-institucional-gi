import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X, Instagram, Phone, ArrowUpRight, Mail, Star, ShieldCheck, Cookie } from "lucide-react";
import { institutionalConfig } from "@/data/institutional";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Nossa escola" },
  { to: "/ensino", label: "Ensino" },
  { to: "/vivencias", label: "Galeria" },
  { to: "/ensino-integral", label: "Ensino Integral" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteLayout({ children, transparentHeader = false }: { children: ReactNode; transparentHeader?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookieVisible, setCookieVisible] = useState(false);
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [preloaderLeaving, setPreloaderLeaving] = useState(false);
  const [gigiVisible, setGigiVisible] = useState(false);
  const [gigiFrame, setGigiFrame] = useState<0 | 1 | 2>(0);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const whatsappUrl = `https://wa.me/${institutionalConfig.whatsapp}?text=${encodeURIComponent("Olá, gostaria de conhecer mais sobre a escola e fazer parte da família G.I.! 😊")}`;

  useEffect(() => {
    let active = true;
    let sequenceTimer: number | undefined;
    const mascotEntryTimer = window.setTimeout(() => {
      if (active) setGigiVisible(true);
    }, 1400);
    const imagePaths = [
      "/imagens/gigi-normal.webp",
      "/imagens/gigi-piscando.webp",
      "/imagens/gigi-acenando.webp",
    ];
    const preloadImages = Promise.all(imagePaths.map((src) => new Promise<void>((resolve) => {
      const image = new Image();
      image.onload = () => resolve();
      image.onerror = () => resolve();
      image.src = src;
      if (image.complete) resolve();
    })));

    // Cada pose permanece 2 segundos: normal, piscadinha e aceno.
    const playSequence = (frame: 0 | 1 | 2) => {
      if (!active) return;
      setGigiFrame(frame);
      sequenceTimer = window.setTimeout(() => {
        playSequence(frame === 0 ? 1 : frame === 1 ? 2 : 0);
      }, 2000);
    };
    playSequence(0);

    const minimumTime = new Promise<void>((resolve) => window.setTimeout(resolve, 6000));
    const safetyTimeout = new Promise<void>((resolve) => window.setTimeout(resolve, 7500));
    Promise.race([Promise.all([preloadImages, minimumTime]).then(() => undefined), safetyTimeout]).then(() => {
      if (!active) return;
      setPreloaderLeaving(true);
      window.setTimeout(() => { if (active) setPreloaderVisible(false); }, 1050);
    });
    return () => {
      active = false;
      if (sequenceTimer !== undefined) window.clearTimeout(sequenceTimer);
      window.clearTimeout(mascotEntryTimer);
    };
  }, []);

  useEffect(() => {
    try {
      setCookieVisible(!window.localStorage.getItem("gi-cookie-preferences"));
    } catch {
      setCookieVisible(false);
    }
  }, []);

  const saveCookieChoice = (choice: "all" | "necessary") => {
    try { window.localStorage.setItem("gi-cookie-preferences", JSON.stringify({ choice, savedAt: new Date().toISOString() })); } catch { /* Preferência permanece válida nesta visita. */ }
    setCookieVisible(false);
  };

  useEffect(() => {
    const main = document.querySelector(".site-main");
    if (!main) return;

    const horizontalCarousels = ".experience-carousel, .school-segments-grid, .structure-carousel";
    const candidates = Array.from(main.querySelectorAll<HTMLElement>(
      [
        "section > div",
        "section > article",
        "section > figure",
        "section > header",
        "section > div > *",
        "section .section-wrap > *",
        "section article",
        "section figure",
        "section [class*='-card']",
        "section .feature-card",
        "section .mission-paper-card",
        "section .mission-vision-card",
        "section .testimonial-card",
        "section .integral-card",
        "section .experience-card",
        "section .bilingual-segment-note",
        "section .gallery-button",
        ".page-hero__content",
        ".school-page-hero > .relative",
      ].join(", ")
    )).filter((element) =>
      !element.closest(".learning-words-section") &&
      !element.closest(horizontalCarousels) &&
      !element.matches(horizontalCarousels)
    );

    // Revela blocos e cards em todos os formatos de seção, sem animar
    // simultaneamente um contêiner e seus descendentes.
    const cardSelector = [
      "article", "figure", "[class*='-card']", ".feature-card",
      ".mission-paper-card", ".mission-vision-card", ".testimonial-card",
      ".integral-card", ".experience-card", ".bilingual-segment-note",
      ".gallery-button",
    ].join(", ");
    const eligibleCandidates = candidates.filter((element) => {
      const containsCards = element.querySelector(cardSelector) !== null;
      const isCard = element.matches(cardSelector);
      return !containsCards || isCard;
    });
    // Mantém somente o nível mais externo de cada bloco elegível.
    // Assim, um mesmo conteúdo nunca recebe dois reveals em elementos aninhados.
    const targets = eligibleCandidates.filter((element) =>
      !eligibleCandidates.some((other) => other !== element && other.contains(element))
    );

    const sectionIndexes = new Map<Element, number>();
    targets.forEach((element) => {
      const section = element.closest("section") ?? main;
      const index = sectionIndexes.get(section) ?? 0;
      sectionIndexes.set(section, index + 1);
      element.setAttribute("data-scroll-reveal", "");
      element.classList.remove("is-visible");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 95}ms`);
    });

    if (!("IntersectionObserver" in window)) {
      targets.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -7% 0px" });

    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  // A navegação começa sempre no topo. O banner mantém seu fundo institucional
  // visível enquanto a imagem é carregada, sem ocultar toda a página.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 36);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [pathname]);

  // O mesmo header transparente no topo e branco após a rolagem em todas as rotas.
  const compactHeader = scrolled || menuOpen;
  const headerClass = `site-header site-header--overlay fixed inset-x-0 top-0 z-50 ${compactHeader ? "is-scrolled" : ""} ${menuOpen ? "is-menu-open" : ""}`;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {preloaderVisible && <div className={`gi-preloader ${preloaderLeaving ? "is-leaving" : ""}`} role="status" aria-label="Carregando o site do Instituto Educacional G.I.">
        <div className={`gi-preloader__content gi-preloader__content--enter ${gigiVisible ? "has-mascot" : ""}`}>
          <div className="gi-preloader__copy">
            <p className="gi-preloader__title gi-preloader__foreground">Olá! Eu sou a Gigi!</p>
            <p className="gi-preloader__message gi-preloader__foreground">Estamos preparando tudo para você...</p>
            <div className="gi-preloader__track gi-preloader__foreground"><span /></div>
          </div>
          <div className="gi-preloader__mascot-stage" aria-hidden="true">
            {[
              "/imagens/gigi-normal.webp",
              "/imagens/gigi-piscando.webp",
              "/imagens/gigi-acenando.webp",
            ].map((src, index) => <img key={src} className={`gi-preloader__mascot ${gigiFrame === index ? "is-active" : ""}`} src={src} alt="" fetchPriority={index === 0 ? "high" : "auto"} />)}
          </div>
        </div>
      </div>}
      <header className={headerClass}>
        <div className={`mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 transition-all duration-300 lg:px-8 ${compactHeader ? "py-1.5" : "py-3"}`}>
          <Link to="/" className={`flex shrink-0 items-center justify-start transition-all duration-300 ${compactHeader ? "h-16 w-20 sm:h-16 sm:w-20 2xl:h-24 2xl:w-24" : "h-32 w-36 sm:h-24 sm:w-28 2xl:h-40 2xl:w-40"}`} onClick={(event) => { setMenuOpen(false); if (pathname === "/") { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); } }}>
            <img src="/imagens/logo-gi.svg" alt="Instituto Educacional G.I." className={`object-contain transition-all duration-300 ${compactHeader ? "h-16 w-16 sm:h-16 sm:w-16 2xl:h-24 2xl:w-24" : "h-32 w-32 sm:h-24 sm:w-24 2xl:h-40 2xl:w-40"}`} />
          </Link>
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegação principal">
            {links.map(({ to, label }) => <Link key={to} to={to} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }} activeOptions={{ exact: true }}>{label === "Ensino Integral" ? <span className="inline-flex items-center gap-1.5"><Star size={14} fill="currentColor" strokeWidth={1.8} />{label}</span> : label}</Link>)}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="header-cta rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-accent-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">Faça sua matrícula</a></div>
            <button className="header-menu rounded-xl border border-border p-2 text-primary lg:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
          </div>
        </div>
        <nav className={`mobile-menu-panel lg:hidden ${menuOpen ? "is-open" : ""}`} aria-label="Menu móvel" aria-hidden={!menuOpen}><div className="mobile-menu-panel__divider" /><div className="mobile-menu-panel__links">{links.map(l => <Link key={l.to} to={l.to} onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, left: 0, behavior: "auto" }); }} className="mobile-menu-panel__link" activeProps={{ className: "mobile-menu-panel__link mobile-menu-panel__link-active" }} activeOptions={{ exact: true }}>{l.label === "Ensino Integral" ? <span className="mobile-menu-panel__integral"><Star size={18} fill="#fff12c" color="#fff12c" strokeWidth={1.8} />{l.label}</span> : l.label}</Link>)}</div><div className="mobile-menu-panel__footer"><a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="mobile-menu-panel__cta">Faça sua matrícula</a></div></nav>
      </header>
      <main key={pathname} className="site-main page-transition-enter flex-1">{children}</main>
      <footer className={`gi-footer bg-primary text-primary-foreground ${pathname === "/contato" ? "gi-footer--contact" : ""}`}>
        <div className="gi-footer__main mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[1.15fr_1.2fr_.75fr] lg:items-center lg:px-8">
          <section className="gi-footer__contact" aria-labelledby="footer-contact-title">
            <h2 id="footer-contact-title" className="font-display text-2xl font-bold text-white">Contato</h2>
            <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              <div><h3 className="gi-footer__label">ENDEREÇO</h3><p className="mt-2 text-sm leading-6 text-white/90">{institutionalConfig.address}</p></div>
              <div><h3 className="gi-footer__label">TELEFONES</h3><a href="tel:+558321825088" className="mt-2 block text-sm leading-6 text-white/90 hover:text-accent">Fixo: (83) 2182-5088</a><a href="https://wa.me/5583994200019" target="_blank" rel="noreferrer" className="block text-sm leading-6 text-white/90 hover:text-accent">WhatsApp: (83) 99420-0019</a></div>
              <div><h3 className="gi-footer__label">E-MAIL</h3><a href={`mailto:${institutionalConfig.email}`} className="mt-2 block break-all text-sm text-white/90 underline underline-offset-4 hover:text-accent">{institutionalConfig.email}</a></div>
              <div><h3 className="gi-footer__label">ATENDIMENTO</h3><p className="mt-2 text-sm text-white/90">Entre em contato para informações e visitas</p></div>
            </div>
            <a href="https://www.instagram.com/institutoeducacionalgi/" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-3 text-sm font-medium text-white hover:text-accent"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35"><Instagram size={18}/></span>Instagram <ArrowUpRight size={14} className="text-accent"/></a>
          </section>
          <section className="gi-footer__brand flex flex-col items-center text-center">
            <img src="/imagens/logo-gi.svg" alt="Logotipo do Instituto Educacional G.I." className="h-24 w-24 object-contain"/>
            <h2 className="mt-3 font-display text-xl font-bold text-white">Instituto Educacional G.I.</h2>
            <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">Educação que acolhe, ensina e transforma vidas.<br/>Uma jornada de descobertas, conhecimento e desenvolvimento.</p>
            <div className="mt-6 hidden flex-wrap justify-center gap-3 lg:flex">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="gi-footer__primary-cta">FAÇA SUA MATRÍCULA</a>
              <a href={`mailto:${institutionalConfig.email}`} className="gi-footer__secondary-cta">FALE COM A NOSSA EQUIPE</a>
            </div>
          </section>
          <nav className="gi-footer__quick-links" aria-label="Links rápidos">
            <h2 className="font-display text-2xl font-bold text-white">Links rápidos</h2>
            <div className="mt-5 grid grid-cols-2 gap-x-7 gap-y-4 text-sm text-white/85">
              {links.filter(link => link.to !== "/").map(l=><Link key={l.to} to={l.to} className="transition-colors hover:text-accent">{l.label}</Link>)}
              <Link to="/contato" className="transition-colors hover:text-accent">Fale conosco</Link>
            </div>
          </nav>
        </div>
        <div className="gi-footer__bottom border-t border-white/15 px-5 py-5 text-center text-xs text-white/65">
          <span>© {new Date().getFullYear()} Instituto Educacional G.I. Todos os direitos reservados.</span>
          <button type="button" onClick={() => setPrivacyOpen(true)} className="gi-footer__privacy-link">Política de Privacidade</button>
        </div>
      </footer>
      {cookieVisible && <div className="gi-cookie-banner" role="dialog" aria-modal="true" aria-labelledby="gi-cookie-title">
        <div className="gi-cookie-banner__icon"><Cookie size={22}/></div>
        <div className="min-w-0 flex-1"><h2 id="gi-cookie-title" className="font-display text-base font-bold text-primary">Um cuidado com a sua privacidade 💛</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">Usamos armazenamento local para lembrar sua escolha e manter o site funcionando. <button type="button" className="font-semibold text-primary underline underline-offset-2" onClick={() => setPrivacyOpen(true)}>Leia nossa Política de Privacidade.</button></p>
          <div className="mt-4 flex flex-wrap gap-2"><button type="button" className="gi-cookie-banner__accept" onClick={() => saveCookieChoice("all")}>Aceitar</button><button type="button" className="gi-cookie-banner__necessary" onClick={() => saveCookieChoice("necessary")}>Somente necessários</button></div>
        </div>
      </div>}
      {privacyOpen && <div className="gi-privacy-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setPrivacyOpen(false); }}>
        <section className="gi-privacy-modal" role="dialog" aria-modal="true" aria-labelledby="gi-privacy-title">
          <button type="button" className="gi-privacy-modal__close" aria-label="Fechar política de privacidade" onClick={() => setPrivacyOpen(false)}><X size={22}/></button>
          <div className="gi-privacy-modal__heading"><ShieldCheck size={25}/><span>INSTITUTO EDUCACIONAL G.I.</span></div>
          <h2 id="gi-privacy-title" className="mt-3 font-display text-2xl font-bold text-primary sm:text-3xl">Política de Privacidade</h2>
          <p className="mt-2 text-xs text-muted-foreground">Última atualização: 24 de novembro de 2026</p>
          <div className="gi-privacy-modal__body">
            <p>O Instituto Educacional G.I. respeita a privacidade das famílias, estudantes, responsáveis e visitantes do nosso site. Esta política explica, de forma transparente, quais informações podem ser tratadas durante a navegação e como cuidamos delas, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).</p>
            <h3>1. Quem somos</h3><p>O responsável pelas informações relacionadas a este site é o Instituto Educacional G.I., localizado na Avenida Floriano Peixoto, 230 — Jaguaribe, João Pessoa — PB. Para dúvidas sobre privacidade, entre em contato pelo e-mail <a href={`mailto:${institutionalConfig.email}`}>{institutionalConfig.email}</a>.</p>
            <h3>2. Quais informações podem ser tratadas</h3><p>Este site é institucional e não possui formulário de cadastro ou matrícula. Podemos tratar dados técnicos básicos gerados durante a navegação, como endereço IP, tipo de navegador, dispositivo, páginas acessadas e data e horário de acesso, quando disponibilizados pela infraestrutura de hospedagem e segurança. Se você entrar em contato por telefone, e-mail ou WhatsApp, os dados que decidir compartilhar serão tratados para responder à sua solicitação.</p>
            <h3>3. Para quais finalidades</h3><p>As informações podem ser utilizadas para disponibilizar o site, manter sua segurança e estabilidade, compreender eventuais falhas técnicas e responder aos contatos iniciados por famílias e visitantes. Não utilizamos os dados enviados em conversas para finalidades incompatíveis com o atendimento solicitado.</p>
            <h3>4. Cookies e armazenamento local</h3><p>O site utiliza armazenamento local do navegador para guardar sua escolha sobre o aviso de privacidade. Essa preferência evita que a janela de cookies seja exibida novamente a cada visita. Não utilizamos, por meio deste aviso, cookies publicitários ou de rastreamento. Recursos de terceiros eventualmente acessados por links externos, como WhatsApp e Instagram, possuem suas próprias políticas e controles.</p>
            <h3>5. Compartilhamento e serviços de terceiros</h3><p>Dados técnicos podem ser processados pela infraestrutura de hospedagem e segurança necessária para manter o site disponível. Não comercializamos dados pessoais. Ao acessar serviços externos por links do site, o tratamento passa a seguir também as regras dos respectivos fornecedores.</p>
            <h3>6. Proteção e armazenamento</h3><p>Adotamos cuidados técnicos e organizacionais razoáveis para proteger as informações contra acessos não autorizados, perda ou uso indevido. O prazo de retenção depende da finalidade, das necessidades operacionais e das obrigações legais aplicáveis.</p>
            <h3>7. Direitos dos titulares</h3><p>Nos termos da LGPD, você pode solicitar confirmação do tratamento, acesso, correção, anonimização, bloqueio ou eliminação de dados, quando aplicável, além de informações sobre compartilhamento e demais direitos previstos em lei. Para exercer seus direitos ou esclarecer dúvidas, escreva para <a href={`mailto:${institutionalConfig.email}`}>{institutionalConfig.email}</a>.</p>
            <h3>8. Privacidade de crianças e adolescentes</h3><p>Por sermos uma instituição de ensino, tratamos a privacidade de crianças e adolescentes com atenção especial. Este site institucional não solicita dados de estudantes por formulários. Pedimos às famílias que não enviem informações pessoais sensíveis de crianças por canais públicos ou comentários em redes sociais.</p>
            <h3>9. Atualizações desta política</h3><p>Esta política poderá ser atualizada para refletir mudanças no site, nos serviços utilizados ou na legislação. A versão vigente estará disponível neste painel, acessível pelo rodapé.</p>
          </div>
          <div className="mt-5 flex justify-end"><button type="button" className="gi-cookie-banner__accept" onClick={() => setPrivacyOpen(false)}>Entendi</button></div>
        </section>
      </div>}
    </div>
  );
}

export function PageHeader({ title, intro, eyebrow = "INSTITUTO EDUCACIONAL G.I.", className = "" }: { title: ReactNode; intro: string; eyebrow?: string; className?: string }) {
  return <section className={`page-hero ${className}`}><div className="page-hero__content mx-auto max-w-7xl px-5 pt-36 pb-16 lg:px-8 lg:pt-44 lg:pb-20"><p className="mb-4 text-xs font-extrabold tracking-[.22em] text-accent">{eyebrow}</p><h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">{intro}</p></div><span className="absolute bottom-4 right-5 z-10 rounded-full bg-black/35 px-3 py-1 text-[10px] font-medium text-white/85">Imagem ilustrativa</span></section>;
}
