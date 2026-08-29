import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { frameworks, profile, tooling } from "@/data/content";

const stats = [
  { value: "16", label: "Years of international experience" },
  { value: "2", label: "Agile Release Trains led, sequentially" },
  { value: "10", label: "Practical experience in scaling context 10+ teams + stakeholders" },
  { value: "3", label: "Languages, day to day" },
];

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="group flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-xs font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:bg-spark-soft/40 hover:shadow-md hover:shadow-secondary/10">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary transition-colors group-hover:bg-primary" />
      {children}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading eyebrow="About" title="Professional background" />
          <p className="mt-6 text-[15px] leading-relaxed text-ink/80">{profile.summary}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/80">{profile.highlight}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`group border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/10 ${
                  i % 2 === 0 ? "clip-corner-sm" : "clip-corner-alt"
                }`}
              >
                <p className="font-serif text-4xl font-semibold text-primary transition-colors group-hover:text-spark">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <div className="clip-corner mt-12 divide-y divide-border border border-border bg-pale/30">
          <div className="p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Methodologies
            </p>
            <p className="mt-1 text-sm text-ink/70">
              Applied across Agile delivery, Lean manufacturing and formal project management.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {frameworks.map((framework) => (
                <Pill key={framework}>{framework}</Pill>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Day-to-day toolbox
            </p>
            <p className="mt-1 text-sm text-ink/70">
              Used day to day in that delivery work.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tooling.map((tool) => (
                <Pill key={tool}>{tool}</Pill>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
