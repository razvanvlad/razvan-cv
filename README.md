# 🎯 Professional CV - Pop Razvan Vlad

This repository hosts the source code for my professional CV and online presence, built as a modern, high-performance web application.

## 🚀 Tech Stack

- **Frontend**: React 19, Next.js 15, TypeScript 5, Tailwind CSS 4
- **Icons**: FontAwesome Free (Brands, Solid, Regular)
- **Tooling**: pnpm Workspaces, Turborepo
- **SEO**: Fully optimized semantic HTML structure, JSON-LD schema, metadata tags, and automatic sitemap generation.

---

## 🏃 Quick Start

Get the CV application running locally:

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Start Development Server

```bash
pnpm web:dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal if 3000 is occupied) to preview the CV with hot-reloading as you make edits.

### 3. Build for Production

```bash
pnpm web:build
```

This builds the Next.js production bundle and generates sitemaps automatically.

---

## 📁 Project Structure

- `apps/web/` - Next.js web application.
  - `components/` - Atomic UI components.
  - `pages/` - Next.js page routing.
  - `users/razvan/` - **All CV contents** (work experiences, projects, skills, education, languages, and contact details).
- `packages/` - Shared packages (configuration, TypeScript definitions, database utilities, and shared libraries).

---

## ✏️ Updating Your CV Content

To modify the content shown on the CV, edit the TypeScript files in `apps/web/users/razvan/`:

- `index.ts` - Basic info, professional summary, contact links, and SEO keywords.
- `EXPERIENCES.ts` - Career history and details.
- `PROJECTS.ts` - Key project highlights and stacks.
- `SKILLS.ts` - Technical skill categorizations mapped to years of experience.
- `EDUCATIONS.ts` - Certifications and academic background.
- `LANGUAGES.ts` - Languages spoken.
- `LOCATIONS.ts` - Location.
- `CONTRIBUTIONS.ts` - Additional products, SaaS, or grant achievements.

---

## 📜 License

This project is licensed under the MIT License.
