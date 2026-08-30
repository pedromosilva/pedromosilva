import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "community", label: "Community" },
  { id: "links", label: "Links" },
];

export function Nav() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.querySelector("header");
    const headerHeight = header?.getBoundingClientRect().height ?? 0;
    const padding = 32;
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - padding;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/85 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <button
          onClick={() => go("top")}
          className="font-serif text-lg font-semibold tracking-tight text-ink"
        >
          Pedro<span className="text-secondary">.</span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === id ? "text-ink" : "text-muted-foreground hover:text-ink"
              }`}
            >
              {active === id && (
                <span className="absolute inset-0 rounded-full bg-pale" />
              )}
              <span className="relative">{label}</span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => go("links")}
          className="hidden whitespace-nowrap rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-primary lg:inline-flex"
        >
          Get in touch
        </button>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-full bg-ink transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[1.5px] w-full bg-ink transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-paper px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                  active === id ? "bg-pale text-ink" : "text-muted-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
