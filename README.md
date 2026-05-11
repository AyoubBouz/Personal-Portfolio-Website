# Ayoub Bouz — Personal Portfolio

Personal portfolio site for **Ayoub Bouz**, AI Engineer & Data Scientist. Built on Next.js 15 with Tailwind CSS, GSAP animations, and a PWA layer.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 3
- **Language:** TypeScript
- **Animations:** GSAP, Lottie, Framer Motion patterns
- **Icons:** Lucide React, React Icons (Simple Icons)
- **PWA:** `@ducanh2912/next-pwa`
- **Contact form:** EmailJS (optional — works once env vars are set)

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content

All site content lives in `utils/Data/`:

- `PersonalData.ts` — name, bio, contact links, socials
- `experience.ts` — work history
- `educations.ts` — education
- `projects-data.ts` — projects (first 3 show on home; full list at `/projects`)
- `skills.ts` — skill chips for the marquee

Profile photo is at `public/ayoub.jpg`. Update copy + photo, push, and Vercel redeploys automatically.

## Environment Variables (optional)

The contact form uses EmailJS. Without keys, the form renders but `Send` will fail silently. To enable:

```bash
cp example.env .env.local
```

Then fill in from https://www.emailjs.com:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

In Vercel, add these in **Project Settings → Environment Variables**.

## Deployment (Vercel)

1. Push the repo to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js — leave build settings as-is.
4. Click **Deploy**.

The build command is `next build`; output directory is `.next`.

## Project Structure

```
public/                     # Static assets, Lottie animations, PWA icons, photos
src/app/
  ├── components/           # Page sections (hero, about, experience, projects, skills, contact)
  ├── projects/             # /projects index + /projects/[id] detail
  ├── layout.tsx            # Root layout + metadata
  ├── manifest.ts           # PWA manifest
  └── page.tsx              # Home page composition
src/components/ui/          # Shared UI primitives (cards, buttons, carousel)
utils/Data/                 # All editable content lives here
utils/                      # Helpers (skill icons, scroll-to-top, email validation)
```

## License

MIT
