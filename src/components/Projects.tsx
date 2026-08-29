import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <Reveal>
        <SectionHeading eyebrow="Vibe-coded projects" title="Personal projects" />
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/80">
          Built with AI-assisted development.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 100}>
            <a
              href={project.href}
              target={project.placeholder ? undefined : "_blank"}
              rel="noreferrer"
              className={`group relative flex h-full flex-col justify-between overflow-hidden p-8 transition-all duration-300 ${
                project.placeholder
                  ? "clip-corner-alt border-2 border-dashed border-border bg-transparent hover:border-secondary"
                  : "clip-corner border border-border bg-card hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/10"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-2xl font-semibold text-ink">{project.name}</h3>
                  {!project.placeholder && (
                    <span className="mt-1 text-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      project.placeholder
                        ? "border border-dashed border-border text-muted-foreground"
                        : "bg-pale text-ink/70"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
