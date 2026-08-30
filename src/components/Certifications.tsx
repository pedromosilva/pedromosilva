import { Reveal } from "@/components/Reveal";
import { certifications } from "@/data/content";

export function Certifications() {
  return (
    <section id="certifications" className="bg-ink py-24 text-paper">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="text-left">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-spark">
              <span className="h-px w-8 bg-spark/60" />
              Certifications
            </div>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-paper sm:text-4xl">
              Verified certifications
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const inner = (
              <div className="flex items-start gap-4">
                {cert.badge && (
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/90 p-1.5 shadow-sm">
                    <img
                      src={cert.badge}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-serif text-lg font-semibold leading-snug text-paper">
                      {cert.name}
                    </p>
                    {cert.href && (
                      <span className="mt-1 shrink-0 text-spark opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100">
                        ↗
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-paper/60">{cert.issuer}</p>
                  {cert.href && (
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-spark/80">
                      View credential
                    </p>
                  )}
                </div>
              </div>
            );
            const cardClass =
              "group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300";
            return (
              <Reveal key={cert.name} delay={i * 60}>
                {cert.href ? (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${cardClass} cursor-pointer hover:-translate-y-1 hover:border-spark/50 hover:bg-white/10`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cardClass}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
