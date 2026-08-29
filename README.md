# Pedro Oliveira da Silva — personal homepage

A single-page, no-backend site built with React, TypeScript, Tailwind and shadcn/ui, using the same
teal/sage color theme and Lora + Inter typography as the CV.

## Deploy to Vercel

**Option A — Vercel CLI (fastest)**
```
npm install -g vercel
cd pedro-homepage
vercel
```
Accept the defaults; Vercel auto-detects Vite. Every subsequent `vercel --prod` redeploys.

**Option B — GitHub + Vercel dashboard**
1. Push this folder to a new GitHub repo.
2. In Vercel, "Add New Project" → import the repo. Framework preset: Vite. No environment
   variables or backend needed.

**Option C — zero build, drop-in static file**
`bundle.html` in this folder is the entire site inlined into one file. Rename it to `index.html`
and drag the single file into a new Vercel project (or any static host) if you don't want to run
a build at all. It won't pick up future edits to the React source, though — Option A/B will.

## Personalize

Everything content-related lives in one file: `src/data/content.ts`.

- `links` — swap the placeholder `href: "#"` entries (marked `editable: true`) for your real
  LinkedIn and GitHub URLs.
- `projects` — add more vibe-coded projects, or edit the `guia.social` entry if the link isn't
  right (assumed `https://guia.social` from the project name, worth double-checking).
- `experience`, `certifications`, `community`, `skillGroups`, `keywordPriority` — edit freely,
  same structure as the CV.

Your photo is embedded as base64 in `src/assets/photo.ts`. To swap it, replace that file's
contents with a new `data:image/jpeg;base64,...` string.

## Local development

```
pnpm install
pnpm dev
```

## Rebuild the single-file bundle

```
pnpm run build
```
then inline `dist/assets/*.css` and `dist/assets/*.js` into `dist/index.html` (or ask Claude to
regenerate `bundle.html` for you).
