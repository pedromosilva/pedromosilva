import { profile } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
        <p>
          {profile.name} · {profile.location}
        </p>
        <p>© {year}</p>
      </div>
    </footer>
  );
}
