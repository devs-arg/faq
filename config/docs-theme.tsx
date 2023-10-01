import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { RedditIcon } from '../components/icons/reddit'
import { useSeoConfig } from './seo'
import { Footer } from './footer'

const docsTheme: DocsThemeConfig = {
  faviconGlyph: '🇦🇷',
  logo: <strong>DevsArg - FAQ</strong>,
  search: {
    placeholder: 'Buscar...',
    emptyResult: 'No se encontraron resultados',
    loading:  'Cargando...',
    error: 'Error al buscar',
  },
  project: {
    link: 'https://github.com/devs-arg/faq',
  },
  chat: {
    link: 'https://www.reddit.com/r/devsarg/',
    icon: RedditIcon,
  },
  docsRepositoryBase: 'https://github.com/devs-arg/faq',
  toc: {
    title: 'Indice',
  },
  feedback: {
    content: 'Reportar problema ->',

  },
  editLink: {
    text: 'Colaborar ->',
  },
  footer: {
    component: Footer,
  },
  useNextSeoProps: useSeoConfig
}

export default docsTheme
