import { useConfig } from "nextra-theme-docs"

export const useHead = () => {
  const config = useConfig()
  const title = `${config.title} | DevsArg`
  const description = config.frontMatter.description || ''
  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
    </>
  )
}