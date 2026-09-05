# Lab Website — Codex Build Specification

## 1. Role and Objective

You are the implementation agent for a modern academic research laboratory website.

Your job is to build a polished, production-quality website for a university research lab. The website should communicate:

- Who leads the lab
- Who works in the lab
- What research the lab performs
- Current and past projects
- Publications
- News and accomplishments
- Opportunities for prospective students
- Contact information

The site must feel like a credible university research laboratory website, not a startup landing page or SaaS marketing site.

---

## 2. Important Content Rule

DO NOT invent factual information about the lab, professor, students, publications, funding, projects, universities, awards, contact information, or research results.

If real content has not yet been supplied:

- Use clearly labeled placeholders
- Keep placeholder text professional and easy to replace
- Store editable content in structured data files
- Do not fabricate author names, publication titles, DOIs, grants, awards, metrics, or affiliations

Examples of acceptable placeholders:

- `[LAB NAME]`
- `[PROFESSOR NAME]`
- `[UNIVERSITY NAME]`
- `[RESEARCH AREA]`
- `[PROJECT TITLE]`
- `[EMAIL ADDRESS]`

The codebase should make replacing placeholders with real lab information straightforward.

---

# 3. Recommended Technology Stack

Build the project with:

- Next.js using the App Router
- TypeScript
- Tailwind CSS
- React
- ESLint
- Next.js optimized `<Image />`
- Static or mostly-static rendering where appropriate

Prefer a simple architecture.

Do NOT add a database, authentication system, Redis, Docker, CMS, or backend API unless actual requirements later make them necessary.

For the initial lab website, content should live in typed TypeScript data files.

---

# 4. Project Goals

The finished website should be:

- Professional
- Academic
- Modern
- Fast
- Responsive
- Accessible
- Easy for future students to maintain
- Easy to deploy
- Easy to add new people, projects, publications, and news
- Appropriate for faculty, students, collaborators, industry visitors, and prospective graduate students

The design should prioritize research content over visual gimmicks.

---

# 5. Target Audiences

Design the website for these audiences:

1. Prospective undergraduate researchers
2. Prospective graduate students
3. Current students
4. Faculty and academic collaborators
5. Industry collaborators
6. Funding organizations
7. University administrators
8. Researchers who discover the lab through papers or search engines

---

# 6. Required Pages

Create the following main routes:

```text
/
├── /research
├── /people
├── /projects
├── /publications
├── /news
├── /join
└── /contact
```

Optional detail routes may include:

```text
/projects/[slug]
/news/[slug]
```

Do not create unnecessary pages.

---

# 7. Global Navigation

Desktop navigation should contain:

- Home
- Research
- People
- Projects
- Publications
- News
- Join Us
- Contact

Requirements:

- Sticky or clearly accessible header
- Lab name/logo area on the left
- Navigation on the right
- Responsive mobile menu
- Keyboard accessible
- Visible focus states
- Current page indication when appropriate
- No oversized navigation
- No complicated mega-menu

---

# 8. Homepage

The homepage should communicate the lab's identity within a few seconds.

Recommended structure:

## 8.1 Hero Section

Include:

- Lab name
- University or department
- Concise research mission statement
- One primary CTA such as `Explore Our Research`
- One secondary CTA such as `Meet the Team`
- Appropriate lab/research image placeholder

Avoid startup language such as:

- "Revolutionizing the future"
- "10x your research"
- "Industry-leading platform"
- "Transforming everything with AI"

Use a credible academic tone.

Example placeholder:

> The [LAB NAME] at [UNIVERSITY NAME] develops computational and experimental methods for [PRIMARY RESEARCH AREAS].

---

## 8.2 Research Areas

Show 3–6 research themes.

Each research area should have:

- Title
- Short description
- Optional icon or image
- Link to research page if useful

Example placeholder categories:

- Computer Vision
- Machine Learning
- Autonomous Systems
- Scientific Computing
- Remote Sensing
- Edge AI

Do not assume these are the real research topics unless later supplied.

---

## 8.3 Featured Projects

Show approximately 3 highlighted projects.

Each project card should contain:

- Project title
- Short summary
- Image
- Research tags
- Link to project detail page if implemented

---

## 8.4 Featured Publications

Show approximately 3 recent or highlighted publications.

Each should contain:

- Title
- Authors
- Venue
- Year
- Optional DOI / paper / code links

Only use real publication data once supplied.

---

## 8.5 People Preview

Show:

- Principal Investigator
- A small selection of current researchers
- Link to full People page

---

## 8.6 News / Updates Preview

Show recent lab activity such as:

- Publications
- Presentations
- Awards
- New projects
- Student achievements
- Conferences
- Demonstrations

Include 3 recent entries maximum on the homepage.

---

## 8.7 Join the Lab CTA

Include a professional section for prospective students.

Example:

> Interested in working with us? Learn about current opportunities for undergraduate and graduate researchers.

CTA:

`View Opportunities`

---

# 9. Research Page

Purpose: explain the lab's major research directions.

For each research area include:

- Research area title
- 1–3 paragraph explanation
- Important research questions
- Methods or technologies
- Related projects
- Related publications
- Relevant image/diagram placeholder

Avoid reducing the page to only a collection of cards.

The page should provide meaningful explanatory content.

Suggested structure:

```text
Research
│
├── Intro
├── Research Area 1
├── Research Area 2
├── Research Area 3
└── Collaboration / facilities note
```

---

# 10. People Page

Organize people by role.

Recommended order:

1. Principal Investigator
2. Research Scientists / Staff, if applicable
3. PhD Students
4. Master's Students
5. Undergraduate Researchers
6. Alumni

Do not create empty sections if a category has no members.

Each person card should support:

- Name
- Photo
- Role
- Degree/program
- Research interests
- Short bio
- Email
- Personal website
- LinkedIn
- Google Scholar
- GitHub
- ORCID

Only render fields that are actually provided.

A profile card should not show empty labels.

---

# 11. Projects Page

Projects should support:

- Current
- Completed

Each project should contain:

- Title
- Slug
- Short description
- Long description
- Status
- Start/end year
- Research areas/tags
- Team members
- Image
- Publications
- External links
- GitHub/repository link where available
- Funding organization only if supplied

Project cards should link to `/projects/[slug]` if detail pages are implemented.

---

# 12. Project Detail Page

Recommended structure:

1. Project title
2. Status / year / tags
3. Hero image
4. Problem or motivation
5. Research approach
6. Methods / system
7. Results or outcomes
8. Team
9. Related publications
10. Links such as paper, demo, dataset, repository

Never invent quantitative results.

If real results are missing, omit the result section or clearly mark content as placeholder.

---

# 13. Publications Page

Publications should be easy to scan.

Group publications by year, newest first.

Support these publication types:

- Journal article
- Conference paper
- Workshop paper
- Poster
- Technical report
- Thesis
- Preprint

Each entry may include:

- Title
- Authors
- Venue
- Year
- Type
- DOI
- Paper URL
- Code URL
- Dataset URL
- BibTeX

Optional filtering:

- Year
- Research area
- Publication type

Do not over-engineer filtering if the dataset is small.

---

# 14. News Page

Use news for lab updates such as:

- Paper accepted
- Student award
- Conference participation
- New research grant
- Research demonstration
- New lab member
- Graduation
- Outreach event

Each news entry should support:

- Title
- Date
- Summary
- Image
- Optional full content
- Optional external link

Sort newest first.

---

# 15. Join Us Page

This page should be useful to students considering the lab.

Suggested sections:

## Undergraduate Researchers

Explain:

- Typical ways undergraduate students participate
- Expected commitment, if supplied
- Relevant preparation
- How to express interest

## Master's / PhD Students

Explain:

- Research areas
- Expected technical background
- How to apply
- Whether students should contact the professor

## What to Include When Contacting the Lab

Recommend that prospective students provide, if appropriate:

- Short introduction
- Research interests
- Resume/CV
- Relevant coursework
- Relevant projects
- Reason for interest in this specific lab

Do not state that positions are funded or available unless confirmed.

Use language such as:

> Current opportunities vary by semester. Please review the information below and contact the lab using the listed instructions.

---

# 16. Contact Page

Support:

- Professor/lab email
- Department
- University
- Building
- Office/lab room
- Mailing address
- Google Maps link if provided
- University directory link if provided

Do not publish private personal information.

---

# 17. Footer

Include:

- Lab name
- University / department
- Navigation links
- Contact link
- Copyright year
- Optional social/research profile links

Example:

```text
© [YEAR] [LAB NAME], [UNIVERSITY NAME]
```

Do not imply endorsement or official university branding without supplied assets/permission.

---

# 18. Data Architecture

Create typed data files.

Recommended structure:

```text
src/
├── app/
├── components/
├── data/
│   ├── site.ts
│   ├── people.ts
│   ├── research.ts
│   ├── projects.ts
│   ├── publications.ts
│   └── news.ts
├── types/
│   └── index.ts
└── lib/
```

If the project uses `app/` at repository root instead of `src/app/`, remain consistent.

---

# 19. Suggested TypeScript Models

## Person

```ts
export interface Person {
  id: string;
  name: string;
  role:
    | "principal-investigator"
    | "staff"
    | "phd"
    | "masters"
    | "undergraduate"
    | "alumni";
  title?: string;
  program?: string;
  image?: string;
  bio?: string;
  researchInterests?: string[];
  email?: string;
  website?: string;
  linkedin?: string;
  googleScholar?: string;
  github?: string;
  orcid?: string;
}
```

---

## ResearchArea

```ts
export interface ResearchArea {
  id: string;
  title: string;
  shortDescription: string;
  description?: string;
  image?: string;
  topics?: string[];
  relatedProjects?: string[];
}
```

---

## Project

```ts
export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description?: string;
  status: "current" | "completed";
  startYear?: number;
  endYear?: number;
  image?: string;
  tags?: string[];
  people?: string[];
  publicationIds?: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  externalUrl?: string;
  funding?: string;
}
```

---

## Publication

```ts
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue?: string;
  year: number;
  type:
    | "journal"
    | "conference"
    | "workshop"
    | "poster"
    | "report"
    | "thesis"
    | "preprint";
  researchAreas?: string[];
  doi?: string;
  paperUrl?: string;
  codeUrl?: string;
  datasetUrl?: string;
  bibtex?: string;
}
```

---

## NewsItem

```ts
export interface NewsItem {
  id: string;
  slug?: string;
  title: string;
  date: string;
  summary: string;
  content?: string;
  image?: string;
  externalUrl?: string;
}
```

---

# 20. Reusable Components

Build reusable components instead of duplicating markup.

Recommended components:

```text
components/
├── Header.tsx
├── MobileNav.tsx
├── Footer.tsx
├── Container.tsx
├── SectionHeading.tsx
├── PersonCard.tsx
├── ProjectCard.tsx
├── PublicationItem.tsx
├── ResearchAreaCard.tsx
├── NewsCard.tsx
├── Tag.tsx
├── Button.tsx
└── EmptyState.tsx
```

Only add abstractions that improve maintainability.

Avoid creating dozens of tiny components without a clear benefit.

---

# 21. Visual Design Direction

The design should communicate:

- Serious academic work
- Technical credibility
- Clean modern presentation
- University/research context

Use:

- Strong typography
- Generous whitespace
- Clean grids
- Restrained use of color
- High quality research imagery
- Clear hierarchy
- Subtle borders
- Minimal animation

Avoid:

- Excessive gradients
- Neon effects
- Glassmorphism everywhere
- Huge rounded cards everywhere
- Startup pricing-page aesthetics
- Floating decorative blobs
- Unnecessary animated backgrounds
- Excessive motion
- Fake statistics
- AI-generated buzzwords
- Overuse of icons

---

# 22. Color System

Until official lab/university brand colors are supplied:

- Use a neutral professional base
- Keep primary accent easy to replace
- Define colors with CSS variables or Tailwind theme tokens

Do NOT assume university brand colors.

When official branding is later provided, centralize changes.

---

# 23. Typography

Use a professional and highly readable type system.

Requirements:

- Strong page titles
- Clear section hierarchy
- Comfortable body width
- Good line height
- Accessible font sizes
- Avoid overly stylized display fonts

Prefer system fonts or widely supported web fonts.

Do not load unnecessary font families.

---

# 24. Images

Use proper image handling.

Requirements:

- Use Next.js `<Image />`
- Add meaningful alt text
- Define image dimensions/aspect ratio
- Prevent layout shift
- Use placeholder files where real images are missing

Suggested asset organization:

```text
public/
├── lab/
├── people/
├── projects/
├── research/
└── news/
```

Do not use random external images in production.

---

# 25. Responsive Design

Test layouts for:

- Small mobile phones
- Large phones
- Tablets
- Laptop screens
- Desktop monitors

Minimum checks:

- Navigation works on mobile
- Cards do not overflow
- Text remains readable
- Images scale correctly
- Buttons remain tappable
- Publication entries do not break
- Long titles wrap gracefully

---

# 26. Accessibility

Meet common WCAG good practices.

Requirements:

- Semantic HTML
- Correct heading order
- Keyboard accessible navigation
- Visible focus states
- Sufficient color contrast
- Alt text for meaningful images
- Labels for form controls
- Do not rely only on color to communicate information
- Respect reduced-motion preferences
- Use buttons for actions and links for navigation

---

# 27. SEO and Metadata

Every major page should define sensible metadata.

Include:

- Page title
- Description
- Open Graph metadata where useful

Homepage title example:

```text
[LAB NAME] | [UNIVERSITY NAME]
```

Use proper semantic structure so search engines can understand:

- Research topics
- People
- Projects
- Publications

Add `robots.txt` and sitemap if straightforward in Next.js.

---

# 28. Performance

Prioritize:

- Static rendering
- Optimized images
- Minimal JavaScript
- No unnecessary libraries
- No huge client-side bundles
- Lazy loading where appropriate

Only mark components `"use client"` when actually necessary.

Prefer server components by default.

---

# 29. Security / Privacy

Do not expose:

- API keys
- Environment secrets
- Private student information
- Personal phone numbers unless intentionally supplied for public use
- Internal university systems
- Unpublished research data
- Private repository URLs
- Private documents

Never hard-code secrets.

---

# 30. Content Editing Experience

A future student worker should be able to update the website without understanding the entire application.

For example, adding a student should mainly require editing:

```text
data/people.ts
```

Adding a publication should mainly require editing:

```text
data/publications.ts
```

Adding a project should mainly require editing:

```text
data/projects.ts
```

Avoid forcing content updates across several unrelated components.

---

# 31. README Requirements

Create a useful `README.md`.

It should explain:

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm start
```

## Content updates

Explain where to:

- Add a person
- Add a project
- Add a publication
- Add a news item
- Replace photos
- Change lab metadata

## Deployment

Explain basic deployment to Vercel.

Also mention that deployment can later be moved to a university server if required.

---

# 32. Deployment Target

Initial recommended deployment:

- GitHub repository
- Vercel

Expected workflow:

```text
Developer
   ↓
Git repository
   ↓
GitHub
   ↓
Vercel
   ↓
Production website
```

Do not require Docker for initial deployment.

University hosting can be addressed later if university IT provides specific requirements.

---

# 33. Code Quality Requirements

Use:

- TypeScript strict typing where practical
- Consistent naming
- Reusable components
- Clear folder structure
- Clean imports
- No dead code
- No unused dependencies
- No console errors
- No broken links within implemented routes

Avoid:

- `any` unless genuinely necessary
- Massive single components
- Copy-pasted repeated markup
- Premature abstractions
- Hard-coded content inside page components when it belongs in data files

---

# 34. Error / Empty States

The UI should behave gracefully when optional content is unavailable.

Examples:

- No publications → do not render an empty "Publications" widget on a project
- No GitHub URL → hide GitHub button
- No member photo → use a neutral local placeholder
- No news → show a simple professional empty state
- No alumni → omit Alumni section

---

# 35. Initial Folder Structure

A good starting structure:

```text
lab-website/
├── public/
│   ├── lab/
│   ├── people/
│   ├── projects/
│   ├── research/
│   └── news/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── research/
│   │   │   └── page.tsx
│   │   ├── people/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── publications/
│   │   │   └── page.tsx
│   │   ├── news/
│   │   │   └── page.tsx
│   │   ├── join/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   │
│   ├── components/
│   ├── data/
│   ├── lib/
│   └── types/
│
├── README.md
├── package.json
├── tsconfig.json
└── tailwind.config.*
```

Adjust according to the generated Next.js version rather than forcing obsolete configuration files.

---

# 36. Implementation Order

Build the project incrementally.

## Phase 1 — Foundation

1. Initialize Next.js + TypeScript + Tailwind
2. Set global styles
3. Create site metadata
4. Create shared layout
5. Build Header
6. Build mobile navigation
7. Build Footer
8. Create data types
9. Create placeholder data

## Phase 2 — Homepage

Build:

1. Hero
2. Research areas
3. Featured projects
4. Featured publications
5. People preview
6. News preview
7. Join CTA

Verify responsive behavior before continuing.

## Phase 3 — Core Pages

Build:

1. Research
2. People
3. Projects
4. Project details
5. Publications
6. News
7. Join Us
8. Contact

## Phase 4 — Quality

Check:

- Responsive behavior
- Accessibility
- Metadata
- Broken links
- Build errors
- Type errors
- Linting
- Image handling
- Empty states

## Phase 5 — Deployment Readiness

1. Final README
2. Production build
3. Remove unused dependencies
4. Verify no secrets
5. Prepare for GitHub/Vercel deployment

---

# 37. Required Validation Commands

Before considering implementation complete, run the commands supported by the project.

At minimum:

```bash
npm run lint
npm run build
```

If tests are later added:

```bash
npm test
```

Fix errors rather than merely documenting them.

Do not leave the project in a broken build state.

---

# 38. Git Practices

Use sensible commits if Git operations are part of the environment.

Possible commit structure:

```text
chore: initialize lab website
feat: add global navigation and layout
feat: build homepage
feat: add people page
feat: add research and projects pages
feat: add publications and news
feat: add join and contact pages
fix: improve responsive layout
docs: add content editing guide
```

Do not commit secrets or environment files containing secrets.

---

# 39. Placeholder Lab Configuration

Create a central config file similar to:

```ts
export const siteConfig = {
  labName: "[LAB NAME]",
  shortName: "[SHORT LAB NAME]",
  university: "[UNIVERSITY NAME]",
  department: "[DEPARTMENT NAME]",
  description:
    "[ONE OR TWO SENTENCE DESCRIPTION OF THE LAB AND ITS RESEARCH]",
  email: "[LAB OR PROFESSOR EMAIL]",
  location: "[BUILDING / CITY / STATE]",
};
```

The UI should derive global lab identity from this configuration where possible.

---

# 40. Example Placeholder People Data

Use only as placeholder structure:

```ts
export const people = [
  {
    id: "pi",
    name: "[PROFESSOR NAME]",
    role: "principal-investigator",
    title: "[FACULTY TITLE]",
    bio: "[SHORT BIO]",
    researchInterests: [
      "[RESEARCH INTEREST 1]",
      "[RESEARCH INTEREST 2]",
    ],
    image: "/people/placeholder.jpg",
  },
  {
    id: "student-1",
    name: "[STUDENT NAME]",
    role: "phd",
    program: "[PROGRAM]",
    researchInterests: ["[RESEARCH INTEREST]"],
    image: "/people/placeholder.jpg",
  },
];
```

Make it obvious that this content must be replaced.

---

# 41. Example Placeholder Project Data

```ts
export const projects = [
  {
    id: "project-1",
    slug: "project-1",
    title: "[PROJECT TITLE]",
    shortDescription: "[PROJECT SUMMARY]",
    status: "current",
    tags: ["[RESEARCH AREA]"],
    people: ["pi"],
    image: "/projects/placeholder.jpg",
  },
];
```

---

# 42. Example Placeholder Publication Data

```ts
export const publications = [
  {
    id: "publication-1",
    title: "[PUBLICATION TITLE]",
    authors: ["[AUTHOR NAME]"],
    venue: "[VENUE]",
    year: 2026,
    type: "conference",
  },
];
```

Clearly mark such entries as placeholders in the initial UI or omit them from production until replaced.

---

# 43. UX Details

Use professional interactions.

Buttons should use labels such as:

- Explore Research
- View Project
- View Publications
- Meet the Team
- Learn More
- Join the Lab
- Read Update

Avoid vague CTA labels such as:

- Click Here
- Discover More!
- Get Started Today
- Learn Everything

Keep transitions subtle.

---

# 44. Homepage Design Priority

The visual hierarchy should approximately be:

```text
Lab identity
     ↓
Research mission
     ↓
Research areas
     ↓
Featured work
     ↓
People
     ↓
Publications / News
     ↓
Join / Contact
```

Research must remain the main focus.

---

# 45. Things NOT to Build Initially

Unless later requested, do NOT build:

- Login
- Admin dashboard
- User accounts
- Database
- Redis
- API server
- Chatbot
- AI assistant
- Student portal
- Complex CMS
- Comment system
- Analytics dashboard
- E-commerce
- Docker infrastructure
- Kubernetes
- Payment processing

The goal is a maintainable research-lab website, not a full web platform.

---

# 46. Future Enhancements

Architect the site so these could be added later without requiring them now:

- Headless CMS
- Automatic publication import
- Google Scholar integration
- ORCID integration
- GitHub project statistics
- Research dataset pages
- Lab equipment/facilities page
- Alumni outcomes
- Search
- Event calendar
- University-hosted deployment
- Analytics

Do not implement these unless requested.

---

# 47. Final Acceptance Criteria

The project is considered ready when all of the following are true:

- [ ] Next.js site runs locally
- [ ] TypeScript compiles
- [ ] Production build succeeds
- [ ] Homepage is complete
- [ ] Research page exists
- [ ] People page exists
- [ ] Projects page exists
- [ ] Project detail routing works if included
- [ ] Publications page exists
- [ ] News page exists
- [ ] Join Us page exists
- [ ] Contact page exists
- [ ] Header works on desktop and mobile
- [ ] Footer is complete
- [ ] Content is stored in data/config files
- [ ] Responsive layout works
- [ ] Basic accessibility requirements are met
- [ ] Images use appropriate optimization
- [ ] No factual lab information has been invented
- [ ] README explains how another student can maintain the site
- [ ] `npm run lint` succeeds
- [ ] `npm run build` succeeds
- [ ] No secrets exist in the repository
- [ ] Placeholder information is easy to locate and replace

---

# 48. Instructions for Codex While Working

Follow these behavioral rules:

1. Inspect the current repository before making assumptions.
2. If the repository is empty, initialize the project using the current stable Next.js approach available in the environment.
3. Preserve any real content already provided by the user.
4. Never replace real lab content with fabricated examples.
5. Prefer small, maintainable changes.
6. Run validation after meaningful implementation stages.
7. Fix build/lint/type errors you introduce.
8. Keep dependencies minimal.
9. Do not add backend infrastructure without a requirement.
10. Keep future content editing simple.
11. Use placeholders when facts are unknown.
12. Maintain an academic visual style.
13. Prioritize accessibility, speed, and responsive design.
14. Keep the README updated as architecture changes.
15. Before finishing, run a final production build and inspect for obvious issues.

---

# 49. Initial Codex Task

After reading this specification, begin with the following:

> Build the initial production-quality lab website foundation using Next.js, TypeScript, and Tailwind CSS. Create the global layout, navigation, footer, typed content models, central site configuration, placeholder data files, and the complete responsive homepage. Then implement the Research, People, Projects, Publications, News, Join Us, and Contact pages. Use clearly labeled placeholders wherever real lab data has not yet been supplied. Keep the architecture simple and maintainable. Run linting and the production build, fix errors, and update the README with content-editing instructions.

Do not stop after scaffolding only.

The resulting website should be usable as the base for a real university research lab website.

---

# 50. Information to Replace Before Publishing

Search the project for placeholder tokens and replace all relevant values:

```text
[LAB NAME]
[SHORT LAB NAME]
[UNIVERSITY NAME]
[DEPARTMENT NAME]
[PROFESSOR NAME]
[FACULTY TITLE]
[STUDENT NAME]
[PROGRAM]
[RESEARCH AREA]
[RESEARCH INTEREST]
[PROJECT TITLE]
[PROJECT SUMMARY]
[PUBLICATION TITLE]
[AUTHOR NAME]
[VENUE]
[EMAIL ADDRESS]
[LAB OR PROFESSOR EMAIL]
[BUILDING / CITY / STATE]
[ONE OR TWO SENTENCE DESCRIPTION OF THE LAB AND ITS RESEARCH]
```

Before production launch, there should be no accidental placeholder content visible to public visitors.
