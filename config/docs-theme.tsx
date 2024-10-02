import React from 'react'
import { RedditIcon } from '../components/icons/reddit'
import { Footer } from './footer'
import { useHead } from './head'

const docsTheme = {
  faviconGlyph: '🇦🇷',
  logo: <strong>DevsArg - FAQ</strong>,
  head: useHead,
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
    content: 'Colaborar ->',
  },
  footer: {
    component: Footer,
  },
}

export default docsTheme
