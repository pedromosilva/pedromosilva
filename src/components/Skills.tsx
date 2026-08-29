import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/content";

export function Skills() {
  const [activeGroup, setActiveGroup] = useState(skillGroups[0].key);
  const current = skillGroups.find((g) => g.key === activeGroup)!;

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <Reveal>
        <SectionHeading eyebrow="Skills" title="Core Skills" />
      </Reveal>

      <Reveal delay={160}>
        <div className="clip-corner mt-10 border border-border bg-card p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Explore by category
          </p>
          <p className="mt-1 text-sm text-ink/70">Skills grouped by area of focus.</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {skillGroups.map((group) => (
              <button
                key={group.key}
                onClick={() => setActiveGroup(group.key)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  activeGroup === group.key
                    ? "bg-ink text-paper"
                    : "bg-pale text-ink/70 hover:bg-pale/70"
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {current.skills.map((skill, i) => (
              <span
                key={skill}
                className="animate-fade-up rounded-2xl border border-secondary/20 bg-spark-soft/50 px-4 py-2.5 text-sm font-medium text-primary"
                style={{ animationDelay: `${i * 45}ms`, opacity: 0 }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
