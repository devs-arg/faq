const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './config/docs-theme.tsx',
})

module.exports = {
  ...withNextra({
    images: {
      unoptimized: true,
    },
    basePath: '/faq',
  }),
}
