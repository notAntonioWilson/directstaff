# Direct Staff Inc. — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Built for deployment on Vercel.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy
1. Push this folder to a new GitHub repo.
2. Import the repo in Vercel. Framework preset: **Next.js** (auto-detected). No env vars required.
3. Once the client's domain is delegated, add it under Vercel → Project → Domains.

## Replacing the images (IMPORTANT)
Every photo lives in `public/images/` as a **branded placeholder** labeled with what it should be.
Replace each file with a real photo using the **exact same filename** — no code changes needed.

| File | What it should show | Aspect |
|------|--------------------|--------|
| hero.jpg | Engineering / automotive program floor, dark, premium | 16:9 |
| cta.jpg | Professional workspace, hands writing (footer CTA band) | 16:9 |
| about.jpg | Technical team collaborating | 4:5 (portrait) |
| solution-contract.jpg | On-site engineers / facility | 4:3 |
| solution-direct.jpg | Professionals at work | 4:3 |
| solution-workforce.jpg | Managed project team in a room | 4:3 |
| industry-automotive.jpg | Vehicle / automotive assembly | 3:4 (portrait) |
| industry-defense.jpg | Aerospace / defense, mission-critical | 3:4 |
| industry-engineering.jpg | CAD / mechanical design | 3:4 |
| industry-industrial.jpg | Manufacturing / automation / plant floor | 3:4 |

A purple grade overlay sits on hero/industry/CTA images automatically, so even mixed-source photos read as one cohesive brand. Use clean, real photography graded slightly cool/dark for best fit.

## Content to confirm with client
These are placeholders in `src/lib/site.ts` — update when the client provides:
- **Email** (`info@dirstaff.com`) — swap for the ghost email.
- **LinkedIn URL** — currently a best-guess company slug.
- **Stats** — "30+ years / 48h shortlist" etc. Adjust if real numbers differ.
- **Tagline / differentiator copy** — written to brand; refine with client input.

## Forms
Contact, request-talent, and resume forms currently submit client-side (confirmation state only).
To wire real delivery, connect each form's `onSubmit` in:
- `src/components/RequestTalentForm.tsx`
- `src/components/ResumeForm.tsx`
to an email service / API route. (e.g. a `/app/api/contact/route.ts` handler, Formspree, or Resend.)

## Structure
```
src/
  app/            home, about, employers, job-seekers, contact, sitemap, robots
  components/     Header, Footer, Logo, forms, Photo, PageHero, ui
  lib/site.ts     single source of truth for nav + content
public/images/    branded placeholders (replace with real photos)
```
