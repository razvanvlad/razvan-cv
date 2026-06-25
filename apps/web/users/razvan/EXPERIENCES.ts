import { Experience } from '../../types/Experience'

export const EXPERIENCES: Experience[] = [
   {
      company: 'Softsite',
      link: 'https://softsite.ro',
      badges: ['Agency', 'B2B/Contract', 'Full-time'],
      title: 'Founder & Lead Developer',
      logo: undefined,
      start: 'Jul 2018',
      end: undefined,
      contents: [
         {
            title: 'Responsibilities',
            description:
               'Shipped 60+ web projects for clients in the UK, EU, and US, mostly built in React/Next.js or WordPress (often both, in a headless setup). Own architecture, development, design, and deployment, and handle client communication directly in fluent English. Build own products from scratch and collaborate closely with startups.',
         },
         {
            title: 'Key Accomplishments',
            items: [
               'Built headless WordPress + Next.js platforms with WPGraphQL and ACF Pro, deployed on Vercel + WP Engine.',
               'Took a furniture ecommerce site from a mobile Lighthouse score of 59 up to 91 (improved LCP from 24.5s to 2.8s, TBT from 310ms to 0 by rebuilding database queries, image pipeline, and caching).',
               'Contributed to a high-volume .NET + Vue.js fintech platform, writing SQL queries for custom calculations/reporting, managing VPS, and handling maintenance.',
               'Maintained multiple WordPress sites with custom themes/plugin stacks, and handled migrations, backups, and security cleanups.',
            ],
         },
         {
            title: 'Technologies',
            items: [
               'React.js',
               'Next.js',
               'TypeScript',
               'WordPress',
               'ACF Pro',
               'WPGraphQL',
               'GraphQL',
               'Apollo Client',
               'PHP',
               'Laravel',
               'Node.js',
               'Vue.js',
               '.NET',
               'MySQL',
               'Redis',
               'Tailwind CSS',
               'GSAP',
               'Framer Motion',
               'Docker',
               'Vercel',
               'WP Engine',
               'DigitalOcean',
               'Cloudflare',
               'VPS',
               'cPanel',
               'Figma',
               'SEO',
               'Model Context Protocol (MCP)',
               'Claude Code',
            ],
         },
      ],
   },
   {
      company: 'Softex Company',
      badges: ['Office', 'Full-time'],
      title: 'Web Developer',
      logo: undefined,
      start: 'May 2023',
      end: 'Aug 2023',
      contents: [
         {
            title: 'Responsibilities',
            description:
               'Contributed to the Groupama.ro insurance portal (Laravel + React) inside an internal product team. Worked on policy quotation flows, custom WordPress admin sections with ACF, and React Router-based dynamic content pages. Handled GitHub PRs, database migrations, and release packaging; worked with the senior developer on peer review and production deploys.',
         },
         {
            title: 'Technologies',
            items: [
               'React.js',
               'Laravel',
               'PHP',
               'WordPress',
               'ACF Pro',
               'JavaScript',
               'Git',
               'GitHub',
               'MySQL',
               'Webpack',
            ],
         },
      ],
   },
   {
      company: 'NativityWeb SRL',
      badges: ['Office', 'Full-time'],
      title: 'Junior Project Manager',
      logo: undefined,
      start: 'Jul 2017',
      end: 'Mar 2018',
      contents: [
         {
            title: 'Responsibilities',
            description:
               'Coordinated tasks, testing, and design for a 6-person dev team building a custom CRUD admin panel with module generation. Also did QA and MySQL maintenance on the ecommerce side of the business.',
         },
         {
            title: 'Technologies',
            items: [
               'Project Management',
               'Agile/Scrum',
               'MySQL',
               'QA Testing',
               'CRUD Systems',
            ],
         },
      ],
   },
   {
      company: 'OnlineGSM.com',
      badges: ['Office', 'Full-time'],
      title: 'Ecommerce Specialist',
      logo: undefined,
      start: 'Sep 2015',
      end: 'Jul 2016',
      contents: [
         {
            title: 'Responsibilities',
            description:
               'Built the supplier API integration so that when an order came in on the site, it was forwarded automatically to the digital-services supplier. Some orders got fulfilled within 5 minutes. Ran on cron jobs and cut manual processing roughly in half.',
         },
         {
            title: 'Technologies',
            items: [
               'API Integration',
               'Cron Jobs',
               'Ecommerce Operations',
               'Automation',
            ],
         },
      ],
   },
]
