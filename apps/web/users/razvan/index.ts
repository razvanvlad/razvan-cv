import { Resume } from '../../types'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { SKILLS } from './SKILLS'
import { LOCATIONS } from './LOCATIONS'
import { LANGUAGES } from './LANGUAGES'
import { EXPERIENCES } from './EXPERIENCES'
import { EDUCATIONS } from './EDUCATIONS'
import { PROJECTS } from './PROJECTS'
import { CONTRIBUTIONS } from './CONTRIBUTIONS'
import { TECHNOLOGIES } from './TECHNOLOGIES'

export const RESUME: Resume = {
   firstName: 'Razvan Vlad',
   lastName: 'Pop',
   name: 'Razvan Vlad Pop',
   nick: 'razvan',
   gender: 'male',
   nameLink: 'https://www.linkedin.com/in/razvanvladpop',

   initials: 'RP',
   initialsLink: 'https://www.linkedin.com/in/razvanvladpop',

   locations: LOCATIONS,
   languages: LANGUAGES,

   avatar: '/razvan-white-shirt-square.png',
   avatarLink: 'https://www.linkedin.com/in/razvanvladpop',

   summary: 'Senior Frontend & WordPress Developer',
   summaryLink: 'https://www.linkedin.com/in/razvanvladpop',

   about: [
      {
         description:
            "Hands-on full-stack developer, 8+ years in, with 60+ projects shipped for clients in ecommerce, fintech, insurance, and SaaS. Strongest in React, Next.js and WordPress, including projects that decouple the two through GraphQL and ACF Pro. I run a small agency (Softsite) where I own architecture, development, design and deployment, and handle client communication directly in fluent English. I've also built my own products from scratch and worked closely with startups, so I'm comfortable taking something from idea to launch. Now looking to focus that experience inside an established product or engineering team.",
      },
      {
         description:
            "Focused on performance, design, rich features and production stability. I've worked on high-volume backend systems and projects that require smart solutions. Daily user of Claude Code, MCP servers and AI-assisted workflows to ship faster without losing code quality.",
      },
   ],
   aboutLink: 'https://www.linkedin.com/in/razvanvladpop',

   help: [
      {
         title: '1. Headless WordPress & Next.js',
         items: [
            'Decoupled architectures using WPGraphQL and ACF Pro, optimizing for performance and dynamic content.',
            'Custom themes and plugins without depending on bloated page builders, promoting clean semantic HTML and optimal SEO rankings.',
            'Performance optimizations (improving LCP, TBT, and CLS scores) to achieve sub-second page loads and near-perfect Lighthouse scores.',
         ],
      },
      {
         title: '2. Full Stack Engineering & Project Ownership',
         items: [
            'Owning product lifecycles from initial Figma mockups and database schema design to server deployment and monitoring.',
            'Integrating robust APIs (billing, payment gateways, supplier integrations, travel APIs) on PHP/Laravel and Node.js backends.',
            'DevOps tasks including Docker configuration, VPS setups, database tuning, and zero-downtime CI/CD deployments.',
         ],
      },
      {
         title: '3. AI Workflows & Modern Engineering',
         items: [
            'Leveraging Model Context Protocol (MCP) servers and LLM-assisted workflows (Claude Code, Cursor) to ship features faster with high code quality.',
            'Designing prompt strategies and integrating LLM APIs into user-facing product features.',
         ],
      },
   ],
   helpLink: 'https://www.linkedin.com/in/razvanvladpop',

   website: 'https://softsite.ro',

   contact: {
      website: 'https://softsite.ro',
      email: 'razvanvladpop@gmail.com',
      phone: '+40 756762169',
      linkedin: 'https://www.linkedin.com/in/razvanvladpop',
      github: 'https://github.com/razvanvlad',
      socials: [
         {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/razvanvladpop',
            icon: faLinkedin,
         },
         {
            name: 'Github',
            url: 'https://github.com/razvanvlad',
            icon: faGithub,
         },
      ],
   },

   technologies: TECHNOLOGIES,

   experiences: EXPERIENCES,

   educations: EDUCATIONS,

   skills: SKILLS,

   projects: PROJECTS,

   contributions: CONTRIBUTIONS,

   characteristics: [
      'self-motivated',
      'self-organized',
      'responsible',
      'honest',
      'energetic',
      'sociable',
      'purposeful',
      'friendly',
      'enjoy learning',
   ],

   keywords: [
      'Razvan Vlad Pop',
      'Senior Frontend Developer',
      'WordPress Developer',
      'Headless WordPress',
      'React Developer',
      'Next.js',
      'TypeScript',
      'SEO',
      'PHP',
      'Laravel',
   ],
}
