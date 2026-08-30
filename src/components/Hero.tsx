import { photoDataUri } from "@/assets/photo";
import { profile } from "@/data/content";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
      {/* Off-center decorative backdrop: teal blobs + dot grid, never a centered/purple gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-96 w-96 rounded-full bg-spark/25 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-[560px] bg-grain opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h1 className="font-serif text-4xl font-semibold leading-[1.08] text-ink text-balance sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-xl font-serif text-lg italic text-primary sm:text-xl">
            {profile.tagline}
          </p>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink/80 sm:text-base">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("links")}
              className="clip-corner-sm group inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-semibold text-paper transition-all hover:-translate-y-0.5 hover:bg-primary"
            >
              Let's connect
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button
              onClick={() => scrollTo("experience")}
              className="clip-corner-sm inline-flex items-center gap-2 border border-ink/15 bg-card px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-secondary"
            >
              See the career path
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
            {profile.languages.map((lang) => (
              <span key={lang}>{lang}</span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm justify-self-center lg:justify-self-end">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-secondary/30 via-spark/20 to-transparent blur-2xl" />
          <div className="clip-corner animate-float border border-white/40 bg-card p-3 shadow-xl">
            <img
              src={photoDataUri}
              alt="Portrait of Pedro Oliveira da Silva"
              className="clip-corner aspect-square w-full object-cover"
            />
          </div>
          <div className="relative z-10 -ml-6 -mt-9 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-spark-soft font-serif text-sm font-semibold text-primary">
              RTE
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold text-ink">Human with a passion for excellent Teamwork.</p>
            </div>
          </div>

          {/* Below the picture, on purpose: not the first thing a visitor reads. */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-spark" />
              {profile.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
