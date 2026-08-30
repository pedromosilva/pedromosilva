import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { education } from "@/data/content";

export function Education() {
  return (
    <section id="education" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading eyebrow="Academic foundation" title="Education" />
        </Reveal>

        <div className="mt-14 space-y-6">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 60}>
              <div className="clip-corner-sm overflow-hidden border border-border bg-card p-6 sm:p-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="font-serif text-xl font-semibold text-ink">{item.degree}</p>
                    <p className="text-sm text-secondary">{item.institution}</p>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {item.dates}
                  </p>
                </div>

                {(item.thesis || item.paper) && (
                  <ul className="mt-5 space-y-2.5 border-t border-border pt-4">
                    {item.thesis && (
                      <li className="flex gap-3 text-sm leading-relaxed text-ink/80">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-spark" />
                        <span>
                          <span className="font-medium text-ink">Thesis: </span>
                          {item.thesis}
                        </span>
                      </li>
                    )}
                    {item.paper && (
                      <li className="flex gap-3 text-sm leading-relaxed text-ink/80">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-spark" />
                        <span>
                          Co-authored{" "}
                          <a
                            href={item.paper.href}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-secondary underline decoration-secondary/40 underline-offset-2 hover:text-primary"
                          >
                            &ldquo;{item.paper.title}&rdquo;
                          </a>
                          , {item.paper.venue}.
                        </span>
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
