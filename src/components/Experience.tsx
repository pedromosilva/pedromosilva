import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/content";

export function Experience() {
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  return (
    <section id="experience" className="bg-pale/40 py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <SectionHeading eyebrow="Career path" title="Work history" />
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block" />

          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="space-y-3"
            onValueChange={(value) => {
              if (!value) return;
              // Opening an item can collapse a long sibling above it, shifting
              // the whole list up so the item you just tapped scrolls out of
              // view. Nudge it back into view once the collapse animation
              // (200ms, see tailwind.config.js) settles. Plain scrollIntoView
              // doesn't know about the fixed header, so it can land the item
              // right under it, hiding the title; account for the header's
              // own height instead.
              window.setTimeout(() => {
                const el = itemRefs.current[value];
                if (!el) return;
                const header = document.querySelector("header");
                const headerHeight = header?.getBoundingClientRect().height ?? 0;
                const padding = 16;
                const rect = el.getBoundingClientRect();
                const availableHeight = window.innerHeight - headerHeight;
                // When the item's own content is taller than the visible area
                // (long bullet lists), it's impossible to show both its top and
                // bottom at once. Always prioritize the title: align it just
                // below the header rather than chasing the bottom edge, which
                // would push the title off-screen above.
                if (rect.top < headerHeight + padding || rect.height > availableHeight) {
                  window.scrollBy({
                    top: rect.top - headerHeight - padding,
                    behavior: "smooth",
                  });
                } else if (rect.bottom > window.innerHeight) {
                  window.scrollBy({
                    top: rect.bottom - window.innerHeight + padding,
                    behavior: "smooth",
                  });
                }
              }, 250);
            }}
          >
            {experience.map((role, i) => {
              const value = `item-${i}`;
              return (
              <Reveal key={role.role + role.dates} delay={i * 60}>
                <AccordionItem
                  ref={(el) => {
                    itemRefs.current[value] = el;
                  }}
                  value={value}
                  className="relative border-none pl-0 sm:pl-8"
                >
                  <span className="absolute left-0 top-6 hidden h-3.5 w-3.5 rounded-full border-2 border-secondary bg-paper sm:block" />
                  <div className="clip-corner-sm overflow-hidden border border-border bg-card">
                    <AccordionTrigger className="px-5 py-4 hover:no-underline sm:px-6">
                      <div className="flex flex-1 flex-col items-start gap-1 text-left sm:flex-row sm:items-baseline sm:justify-between sm:pr-4">
                        <div>
                          <p className="font-serif text-lg font-semibold text-ink">{role.role}</p>
                          <p className="text-sm text-secondary">{role.company}</p>
                        </div>
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {role.dates}
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5 sm:px-6">
                      <ul className="space-y-2.5 border-t border-border pt-4">
                        {role.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-ink/80">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-spark" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </Reveal>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
