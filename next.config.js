const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './config/docs-theme.tsx',
})

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  ...withNextra({
    images: {
      unoptimized: true,
    },
    basePath: isDev ? '' : '/faq',
  }),
}
