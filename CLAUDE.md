# Pedro's homepage — project notes

Personal single-page homepage for Pedro Oliveira da Silva. React + TypeScript + Vite + Tailwind CSS + shadcn/ui. No backend, no CMS, no database — content lives in one TypeScript file and the site is a static build.

Live at **https://pedromosilva.vercel.app**, deployed on Vercel (project "pedromosilva", team `pedromosilvas-projects`), auto-deploying from this repo's `main` branch on every push.

## Ground rule: no dynamic backend, ever

Pedro has explicitly said he does not want a dynamic backend, CMS, or admin UI added to this project, for anything — not projects, not links, not content in general. When he wants to change something, he edits `src/data/content.ts` (or the relevant component) directly and redeploys ("vibe-codes" the change himself). Do not add a form, an API route, a database, or any admin panel. This includes not resurrecting the "Your next build" placeholder project card pattern.

## How content works

`src/data/content.ts` is the single source of truth for all page copy: skills, experience, certifications, projects, community items, links, stat tiles. It's a plain TypeScript module — Vite inlines its exported strings into the production JS bundle at build time. The file itself, its path, and its structure are never sent to visitors; only the compiled bundle is. This is normal for any Vite/React app, not something specific to this project, but it came up as an explicit question worth documenting.

## Structure

Sections, in order: Hero, About (stat tiles + a "Methodologies"/"Day-to-day toolbox" card), Experience (accordion-style work history), Skills (single card, 4 category tabs), Certifications (Credly-linked badges), Projects (2 cards currently: guia.social, Cool Countdown — no placeholder card), Community, Links, Footer.

Skill tabs (`skillGroups` in `content.ts`): `delivery` (Agile Delivery and Product Management, 6+ years), `management` (Program and Project Management, 10+ years — includes PM/PMO skills plus Electrical Distribution Systems and ITIL 4 Foundation), `ai` (AI & Vibe Coding), `engineering` (Engineering Foundation — the MSc plus a set of university-curriculum keywords).

## Deploying a change

```
pnpm install        # or npm install — pnpm-lock.yaml is the tracked lockfile
pnpm run build       # tsc -b && vite build, must pass clean before pushing
git add -A
git commit -m "..."
git push origin main # Vercel picks this up automatically
```

If `pnpm install --frozen-lockfile` (what Vercel's build uses) ever fails with `ERR_PNPM_OUTDATED_LOCKFILE`, it means `pnpm-lock.yaml` drifted from `package.json` — fix by running a plain `pnpm install` (no `--frozen-lockfile`) locally to regenerate the lockfile, verify `pnpm install --frozen-lockfile` then passes, and push the updated lockfile.

If Vercel's dashboard shows the repo connected but "No Production Deployment", it means the git connection was made after existing commits and never fired a build — push a new commit (an empty one is fine: `git commit --allow-empty -m "Trigger deploy"`) to kick it off.

## Known quirks / past fixes worth knowing about

- **Mobile accordion scroll (Experience section)**: opening a work-history item can shift the whole list (Radix Accordion collapses the previously open sibling), which could scroll the tapped item out of view. Fixed with an `onValueChange` handler in `Experience.tsx` that manually scrolls the item into view after the collapse animation settles, accounting for the site's fixed header height (`document.querySelector("header")`) so the item's title doesn't end up hidden underneath it. If a future scroll-positioning bug shows up here, check that header-height/padding math first.
- **Vite config**: uses `import.meta.dirname` (not `__dirname`) for the `@` path alias — `__dirname` triggers a deprecation warning under Vite's native config loader.
- **No backend, no dynamic routes** — see ground rule above.

## Unconfirmed content assumptions

A few things in `content.ts` were filled in as reasonable guesses rather than confirmed facts, worth double-checking against reality at some point:
- Years-of-experience figures on the Skills tab labels (6+ / 10+ years) were computed from role dates in the `experience` array, not explicitly supplied.
- The 5 extra Engineering Foundation keywords beyond Pedro's own examples (Signal Processing, Analog Electronics, Microprocessors, Circuit Theory, Data Communications) were filled in to round out a list of 10 — confirm they match his actual university curriculum.
- The `guia.social` project link and the Cool Countdown project's description/stack are guesses from bare URLs/names.
- Six of the twelve Methodologies/Frameworks pills in the About section were added beyond Pedro's own named examples.
- The Mercedes-Benz.io AI Ambassador community item's detail line is inferred phrasing, not confirmed wording.
