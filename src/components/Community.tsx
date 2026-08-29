import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { community } from "@/data/content";

export function Community() {
  return (
    <section id="community" className="bg-pale/40 py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading eyebrow="Community" title="Community involvement" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {community.map((item, i) => (
            <Reveal key={item.title} delay={i * 60} className="h-full">
              <div className="group h-full bg-card p-7 transition-colors duration-300 hover:bg-white">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-spark-soft font-serif text-sm font-semibold text-primary transition-transform duration-300 group-hover:scale-110">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-serif text-base font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
