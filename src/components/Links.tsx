import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { links } from "@/data/content";

export function Links() {
  const hasPlaceholder = links.some((l) => l.editable);

  return (
    <section id="links" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading eyebrow="Elsewhere" title="Links and profiles" />
          {hasPlaceholder ? (
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/80">
              A personal link hub. Cards marked{" "}
              <span className="font-semibold text-secondary">add your link</span> are still placeholders.
            </p>
          ) : (
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/80">
              A personal link hub, everything below is live.
            </p>
          )}
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {links.map((link, i) => (
            <Reveal key={link.label} delay={i * 70}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`group flex items-center justify-between gap-4 p-6 transition-all duration-300 ${
                  link.editable
                    ? "clip-corner-alt border-2 border-dashed border-border hover:border-secondary"
                    : "clip-corner-sm border border-border bg-card hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/10"
                }`}
              >
                <div>
                  <p className="font-serif text-lg font-semibold text-ink">{link.label}</p>
                  <p
                    className={`mt-1 text-sm ${
                      link.editable ? "text-muted-foreground italic" : "text-secondary"
                    }`}
                  >
                    {link.value}
                  </p>
                </div>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    link.editable ? "border border-dashed border-border text-muted-foreground" : "bg-pale text-primary"
                  }`}
                >
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
