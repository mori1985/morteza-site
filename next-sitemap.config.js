module.exports = {
  siteUrl: 'https://morteza-mahmoudi-dev.ilarta.ir',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  additionalPaths: async () => [
    { loc: '/', changefreq: 'daily', priority: 1.0 },
    { loc: '/about', changefreq: 'weekly', priority: 0.8 },
    { loc: '/projects', changefreq: 'weekly', priority: 0.9 },
    { loc: '/resume', changefreq: 'monthly', priority: 0.7 },
    { loc: '/contact', changefreq: 'monthly', priority: 0.6 },
  ],
};