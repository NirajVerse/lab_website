# AIMS Lab Website

A production-ready, mostly static research-lab website built with the Next.js App Router, TypeScript, Tailwind CSS, and the OpenAI Sites runtime. The site includes a complete homepage, research and people profiles, current and completed projects, a trial-ready AI products catalog, project detail routes, publications, news, opportunity guidance, and contact information.

The provisional name is **AIMS Lab** (**Artificial Intelligence & Machine Systems**). The Mississippi State University and Department of Sustainable Bioproducts affiliation is confirmed. Other lab-specific facts remain bracketed placeholders and must be replaced or removed before publishing. Template guidance is controlled by `siteConfig.isTemplate` in `data/site.ts`; leave it enabled while content is incomplete.

## Requirements

- Node.js 22.13 or newer
- npm 10 or newer

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by the development server.

## Quality checks

```bash
npm run lint
npm run build
```

Preview the production worker after a successful build:

```bash
npm start
```

## Content updates

Most content changes require editing only one typed data file:

| Content | File | What to update |
| --- | --- | --- |
| Lab name, affiliation wording, email, address, logo paths, and template mode | `data/site.ts` | Update `labName`, `shortName`, and `labExpansion` together if the provisional name changes; preserve the confirmed MSU affiliation and approved asset paths |
| Research page copy | `data/pages.ts` | Update the research overview and collaboration note |
| People and alumni | `data/people.ts` | Add or edit a `Person` record |
| Research directions | `data/research.ts` | Add explanations, questions, methods, and related records |
| Projects | `data/projects.ts` | Add project summaries, detail content, team IDs, and links |
| AI products and model trials | `data/products.ts` | Add verified product details and a public `demoUrl` only when a model trial is ready |
| Publications | `data/publications.ts` | Add verified citations and optional paper/code/data links |
| News | `data/news.ts` | Add confirmed updates in newest-first order |

Shared TypeScript models live in `types/index.ts`. Type checking will catch missing required fields and unsupported values.

### Add a person

Add one object to `data/people.ts`. Give it a unique `id` and one supported role:

- `principal-investigator`
- `staff`
- `phd`
- `masters`
- `undergraduate`
- `alumni`

Only supplied profile fields render. Remove unused placeholders instead of leaving empty labels.

### Add a project

Add one object to `data/projects.ts` with a unique `id` and URL-safe `slug`. The project listing and `/projects/[slug]` detail route are generated from the same record. Reference team members through their IDs from `data/people.ts` and related papers through IDs from `data/publications.ts`.

Do not add a results or outcomes section until the claims have been verified and approved for public release.

### Add a publication

Add a verified citation to `data/publications.ts`. Publications are grouped by numeric `year`, newest first. Remove `isPlaceholder: true` once the complete citation has been checked. Optional DOI, paper, code, dataset, and BibTeX fields render only when provided.

### Add news

Add a verified item near the top of `data/news.ts`. Keep the list newest first. Add `dateIso` in `YYYY-MM-DD` format when the date is confirmed so the page can emit semantic date markup. A short `content` field expands in place on the news page; use `externalUrl` when an update should link to an official university or publication page.

## Images

Local images are organized under:

```text
public/
├── brand/
├── fonts/
├── lab/
├── people/
├── projects/
├── research/
└── news/
```

Replace the placeholder files with approved lab imagery and update each data record’s image path and alt text. Preserve the displayed aspect ratio when possible to avoid layout shift. Use descriptive alt text that explains the image’s meaning, not its visual appearance alone.

The active site-wide social card is `public/og-aims.png`. Replace it and update `app/layout.tsx` when the lab name or visual identity changes.

## Mississippi State University affiliation and approved marks

This is a laboratory website on a privately owned domain. It represents a research laboratory affiliated with Mississippi State University in the Department of Sustainable Bioproducts; it is not the central Mississippi State University website.

Approved web assets supplied for this project are copied unchanged into `public/brand/`. Keep the lab name as the primary site identity and keep university or department marks visually separate from any lab identity. Do not redraw, recolor, crop, stretch, combine, or approximate an MSU mark. Preserve each asset’s aspect ratio and clear space. Do not substitute athletic, spirit, social-avatar, or campaign marks for the academic wordmark and department lockup already selected.

The original user-supplied logo packages remain in the local `logos/` folder and are excluded from source control. If a logo is updated, copy the newly approved asset exactly and verify that the source and public copy are identical.

## Metadata and canonical URL

Every major page defines a title and description. Sitemap, robots, and social-image URLs use `NEXT_PUBLIC_SITE_URL`.

Copy `.env.example` to `.env.local` and provide the final public origin:

```bash
NEXT_PUBLIC_SITE_URL=https://www.example-lab.org
```

This value is public and must include `https://` in production.

## Placeholder audit

Before launch, search for unresolved bracketed fields:

```bash
rg -n -U -P '\[[A-Z][^\]]*\]' app data public
```

Review every match. Public pages should contain confirmed lab information only. After the search is clean and the content has been approved, set `isTemplate: false` in `data/site.ts` to remove the preview banner and template-only notices.

## Deployment

### OpenAI Sites

This checkout is immediately deployable with OpenAI Sites. The included Vinext configuration builds Cloudflare Worker-compatible output. Run the quality checks above, set the canonical site URL, and publish through the Sites workflow.

### GitHub and Vercel

The recommended source workflow is:

```text
Local development → Git repository → GitHub → hosting provider
```

This checkout uses the Sites/Vinext worker runtime, so migrate the application layer before selecting Vercel as the production host:

1. Create a new standard Next.js App Router project with TypeScript and Tailwind CSS using the current `create-next-app` release.
2. Copy `app`, `components`, `data`, `lib`, `public`, and `types` into the new project, along with the relevant path aliases from `tsconfig.json`.
3. Install the UI dependencies used by the copied components: Base UI, Class Variance Authority, clsx, Lucide React, and tailwind-merge. The self-hosted Open Sans and Jost files are already included in `public/fonts/` with their licenses.
4. Use the standard `next dev`, `next build`, and `next start` scripts, then run lint and a production build locally.
5. Push that repository to GitHub, import it into Vercel, select Node.js 22.x, and add `NEXT_PUBLIC_SITE_URL` as a production and preview environment variable.

Review a Vercel preview deployment before promoting it to production. The pages and typed content model do not require a database or server migration.

Production is intentionally designed for a privately owned domain. Hosting can still be moved to a university server later if university IT supplies specific runtime, security, domain, and deployment requirements. Do not add Docker or a server backend unless the hosting environment explicitly requires it.

## Final publishing checklist

- Replace every bracketed placeholder and placeholder image.
- Set `isTemplate: false` only after the placeholder audit is clean.
- Confirm names, titles, affiliations, email addresses, citations, dates, and links.
- Confirm the private-domain affiliation notice remains visible and does not imply this is MSU’s central website.
- Confirm every university and department mark is an approved, unmodified asset from `public/brand/`.
- Confirm public permission for profile photos and research imagery.
- Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin.
- Run `npm run lint` and `npm run build`.
- Test the navigation and project routes on mobile and desktop.
- Review the sitemap, robots file, and social preview.
- Verify that no secrets, private student information, private links, or unpublished results are present.
