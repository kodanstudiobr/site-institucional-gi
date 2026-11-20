import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Instagram, Phone, MapPin } from "lucide-react";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Nossa escola" },
  { to: "/ensino", label: "Ensino" },
  { to: "/estrutura", label: "Estrutura" },
  { to: "/vivencias", label: "Vivências" },
  { to: "/noticias", label: "Notícias" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="site-header sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
            <img src="/logo-gi.svg" alt="Instituto Educacional G.I." className="h-14 w-14 rounded-xl object-cover" />
            <span className="hidden font-display text-lg font-bold leading-tight text-primary sm:block">Instituto Educacional<br/><span className="text-secondary-foreground">G.I.</span></span>
          </Link>
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Navegação principal">
            {links.map((l) => <Link key={l.to} to={l.to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }} activeOptions={{ exact: true }}>{l.label}</Link>)}
          </nav>
          <Link to="/contato" className="hidden rounded-full bg-accent px-6 py-3 text-sm font-extrabold text-accent-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:inline-flex">Matrículas e informações</Link>
          <button className="rounded-xl border border-border p-2 text-primary xl:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-white px-5 py-4 shadow-lg xl:hidden" aria-label="Menu móvel">{links.map(l => <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 font-semibold text-primary hover:bg-secondary">{l.label}</Link>)}<Link to="/contato" onClick={() => setMenuOpen(false)} className="mt-2 block rounded-full bg-accent px-4 py-3 text-center font-bold text-accent-foreground">Matrículas e informações</Link></nav>}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 lg:px-8">
          <div><div className="flex items-center gap-3"><img src="/logo-gi.svg" alt="" className="h-14 w-14 rounded-xl"/><span className="font-display text-xl font-bold">Instituto Educacional G.I.</span></div><p className="mt-4 max-w-sm text-sm leading-7 text-white/80">Educação que acolhe, ensina e transforma vidas. Uma jornada de descobertas, conhecimento e desenvolvimento.</p></div>
          <div><h2 className="font-display text-lg font-bold text-accent">Navegue</h2><div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/85">{links.map(l=><Link key={l.to} to={l.to} className="hover:text-accent">{l.label}</Link>)}</div></div>
          <div><h2 className="font-display text-lg font-bold text-accent">Fale com a escola</h2><p className="mt-4 flex items-center gap-2 text-sm text-white/85"><Phone size={16}/> WhatsApp e telefone: em atualização</p><p className="mt-3 flex items-center gap-2 text-sm text-white/85"><MapPin size={16}/> Endereço: em atualização</p><p className="mt-3 flex items-center gap-2 text-sm text-white/85"><Instagram size={16}/> Instagram: em atualização</p></div>
        </div>
        <div className="border-t border-white/15 px-5 py-4 text-center text-xs text-white/65">© {new Date().getFullYear()} Instituto Educacional G.I. — Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}

export function PageHeader({ title, intro, eyebrow = "INSTITUTO EDUCACIONAL G.I." }: { title: string; intro: string; eyebrow?: string }) {
  return <section className="page-hero"><div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20"><p className="mb-4 text-xs font-extrabold tracking-[.22em] text-accent">{eyebrow}</p><h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">{intro}</p></div></section>;
}
