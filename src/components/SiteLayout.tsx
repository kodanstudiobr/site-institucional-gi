import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/ensino", label: "Ensino" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-5">
          <Link to="/" className="font-display text-2xl text-primary">Colégio Horizonte</Link>
          <nav className="flex gap-6 text-sm">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-primary" activeProps={{ className: "text-primary font-semibold" }} activeOptions={{ exact: true }}>{l.label}</Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm flex flex-wrap justify-between gap-4">
          <span className="font-display text-lg">Colégio Horizonte</span>
          <span>Rua das Acácias, 120 · (11) 4000-1234 · contato@colegiohorizonte.com.br</span>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-display text-5xl text-primary">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>
      </div>
    </section>
  );
}
