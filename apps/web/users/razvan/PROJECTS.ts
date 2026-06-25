import { Project } from '../../types/Project'

export const PROJECTS: Project[] = [
   {
      company: 'CDA Group',
      link: 'https://softsite.co.uk', // Fallback or site link
      image: undefined,
      badges: [
         'Next.js 15',
         'React 19',
         'TypeScript',
         'Tailwind 4',
         'Apollo Client',
         'WPGraphQL',
         'ACF Pro',
         'Vercel',
         'WP Engine',
      ],
      title: 'CDA - Headless WordPress + Next.js Platform',
      logo: undefined,
      start: 'Aug 2025',
      end: 'Aug 2025',
      description:
         'Built the whole platform from scratch. Fully custom WordPress theme and admin (no page builders). Custom post types (Services, Case Studies, Team, Jobs, Blog, Tech, Policies) and reusable global blocks. Configured Vercel + WP Engine with ISR for automatic content updates, centralized GraphQL query library, and sitemap/robots auto-generation.',
   },
   {
      company: 'FinTech Entrepreneur',
      link: 'https://ciprianciceu.com',
      image: undefined,
      badges: [
         'Next.js 16',
         'React 19',
         'SCSS',
         'Bootstrap 5',
         'Resend',
         'Vercel',
         'RTL Support',
      ],
      title: 'Ciprian Ciceu - Multilingual Personal Brand Platform',
      logo: undefined,
      start: 'Dec 2025',
      end: 'Dec 2025',
      description:
         'Multilingual brand and press site across English, French, Romanian, and Arabic (full right-to-left layout with its own stylesheet). Implemented heavy technical SEO: JSON-LD structured data across 7 schema types, Open Graph, canonical URLs, and slug generation. Rebuilt contact form pipeline using Resend API and performed tuning for sub-second loads.',
   },
   {
      company: 'Elcartelauto SRL',
      link: 'https://elcartelauto.ro',
      image: undefined,
      badges: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Node.js', 'cPanel'],
      title: 'El Cartel Auto - Next.js on Shared cPanel Hosting',
      logo: undefined,
      start: 'Apr 2026',
      end: 'Apr 2026',
      description:
         "Deployed a Next.js app on shared cPanel hosting, writing custom post-build scripts to resolve asset path conflicts. Generated 7 SEO-optimized partner pages from a single typed config, implemented real-time open/closed status computed on the server, and integrated owner's Instagram feed for automatic gallery updates.",
   },
   {
      company: 'Mobila Ideala',
      image: undefined,
      badges: ['WordPress', 'WooCommerce', 'MySQL', 'Performance Caching'],
      title: 'Furniture Ecommerce - Performance Rescue',
      logo: undefined,
      start: '2025',
      end: '2025',
      description:
         'Optimized a WooCommerce store with serious plugin conflicts. Cleaned the plugin stack, optimized database queries, rebuilt the image pipeline, and redesigned the caching strategy. Improved Mobile Lighthouse score from 59 to 91 and LCP from 24.5 seconds to 2.8 seconds.',
   },
   {
      company: 'Mainetx',
      image: undefined,
      badges: ['.NET', 'Vue.js', 'MySQL', 'VPS', 'Fintech'],
      title: 'High-Volume Fintech Platform',
      logo: undefined,
      start: '2025',
      end: '2025',
      description:
         'Backend and ops contribution to a fintech platform with a large database. Wrote SQL queries for custom calculations and reporting, managed project deployments on a VPS, and handled ongoing maintenance.',
   },
]
