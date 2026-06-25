/** @type {import('next-sitemap').IConfig} */
module.exports = {
   siteUrl: process.env.NEXT_PUBLIC_URL || 'https://softsite.co.uk',
   generateRobotsTxt: true,
   additionalPaths: async (_config) => {
      /** @type {import('next-sitemap').ISitemapField[]} */
      const paths = []

      return paths
   },
}
