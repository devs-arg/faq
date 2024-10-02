import nextra from 'nextra'
 
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './config/docs-theme.tsx',
})

const isDev = process.env.NODE_ENV !== 'production';

export default withNextra({
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isDev ? '' : '/faq',
})
