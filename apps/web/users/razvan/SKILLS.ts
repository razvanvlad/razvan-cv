const ZERO: string[] = []
const ONE: string[] = []
const TWO: string[] = [
   'Model Context Protocol (MCP)',
   'Claude Code',
   'Agentic Coding Workflows',
   'LLM Integration',
   'Prompt Engineering',
   'Monday.com',
   'Perfex CRM',
   'Google Analytics (GA4)',
   'Ahrefs',
   'Mailchimp',
]
const THREE: string[] = [
   'GraphQL',
   'Apollo Client',
   'GSAP',
   'Framer Motion',
   'WooCommerce',
   'ACF Pro',
   'WPGraphQL',
   '.NET',
   'Redis',
   'Docker',
   'WP Engine',
   'DigitalOcean',
   'Jira',
]
const FOUR: string[] = []
const FIVE: string[] = [
   'TypeScript',
   'Tailwind CSS',
   'SCSS',
   'Sass',
   'Laravel',
   'Node.js',
   'Vercel',
   'Cloudflare',
   'VPS',
   'Figma',
   'Adobe Photoshop',
   'Adobe Illustrator',
]
const SIX: string[] = []
const SEVEN: string[] = []
const EIGHT: string[] = [
   'React.js',
   'Next.js',
   'WordPress',
   'JavaScript',
   'PHP',
   'HTML5',
   'CSS3',
   'Git',
   'MySQL',
   'MariaDB',
   'cPanel',
   'WHM',
]

export const SKILLS: {
   name: string
   years: number
}[] = [
   ...ZERO.filter(Boolean).map((name) => ({ name, years: 0 })),
   ...ONE.filter(Boolean).map((name) => ({ name, years: 1 })),
   ...TWO.filter(Boolean).map((name) => ({ name, years: 2 })),
   ...THREE.filter(Boolean).map((name) => ({ name, years: 3 })),
   ...FOUR.filter(Boolean).map((name) => ({ name, years: 4 })),
   ...FIVE.filter(Boolean).map((name) => ({ name, years: 5 })),
   ...SIX.filter(Boolean).map((name) => ({ name, years: 6 })),
   ...SEVEN.filter(Boolean).map((name) => ({ name, years: 7 })),
   ...EIGHT.filter(Boolean).map((name) => ({ name, years: 8 })),
]
