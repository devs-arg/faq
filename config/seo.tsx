import { NextSeoProps } from "next-seo"

export const useSeoConfig = (): NextSeoProps => {
  return {
    titleTemplate: '%s | DevsArg',
  }
}