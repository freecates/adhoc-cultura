const sitemap = require('nextjs-sitemap-generator')

sitemap({
  baseUrl: 'https://www.adhoc-cultura.com',
  ignoredPaths: ['admin'],
  pagesDirectory: 'pages',
  targetDirectory: 'static/'
})
