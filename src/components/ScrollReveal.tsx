import { useEffect, useRef, useState, type ReactNode } from "react";

export function ScrollReveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry && (entry.isIntersecting || entry.intersectionRatio > 0)) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0, rootMargin: "0px 0px 80px 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`scroll-reveal ${visible ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
