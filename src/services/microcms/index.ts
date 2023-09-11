import { createClient } from 'microcms-js-sdk'
import { unified } from 'unified'
import addClasses from 'rehype-class-names'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'

import type { ContentResponse, ContentType } from './types'

const SERVICE_DOMAIN = 'smarthr-hello-world'
const API_ENDPOINT = 'contents'

const client = createClient({
  serviceDomain: SERVICE_DOMAIN,
  apiKey: import.meta.env.SECRET_MICROCMS_KEY,
})

// コンテンツ種別をもとにコンテンツを取得する
export const fetchContentByType = async (type: ContentType) => {
  const content = await client
    .get<ContentResponse>({
      endpoint: API_ENDPOINT,
      queries: {
        limit: 1,
        orders: '-publishedAt',
        filters: `type[contains]${type}`,
      },
    })
    .then((response) => {
      if (!response.totalCount) {
        throw Error(
          'コンテンツが存在しません。microCMSの管理画面でコンテンツを作成してください',
        )
      }
      return response.contents[0]
    })
  if (!content)
    throw Error(
      '指定した種別のコンテンツが存在しません。microCMSの管理画面でコンテンツを作成してください',
    )
  return content
}

// microCMSから取得したマークダウンテキストをhtmlに変換する
export const convertMarkdownToHTML = async (markdownText: string) => {
  const parsedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(addClasses, {
      a: 'mc-anchor',
      p: 'mc-paragraph',
    })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(markdownText)
  return parsedContent
}
