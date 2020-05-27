import 'react'

declare const graphql: (query: TemplateStringsArray) => void

declare module 'react' {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    loading?: 'lazy' | 'eager' | 'auto' | ''
  }
}
