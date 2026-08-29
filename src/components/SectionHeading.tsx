export function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <div
        className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        {align === "left" && <span className="h-px w-8 bg-secondary/60" />}
        {eyebrow}
        {align === "right" && <span className="h-px w-8 bg-secondary/60" />}
      </div>
      <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
