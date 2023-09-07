import { createClient } from 'microcms-js-sdk'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

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
    .get<ContentResponse>({ endpoint: API_ENDPOINT })
    .then((response) => {
      if (!response.totalCount) {
        throw Error(
          'コンテンツが存在しません。microCMSの管理画面でコンテンツを作成してください',
        )
      }
      // NOTE: microCMSで種別をユニークキーとして指定できない（同じ種別で複数記事が存在できる）ので最初の1件を取得する
      return response.contents.find((content) => content.type.includes(type))
    })
  if (!content)
    throw Error(
      '指定した種別のコンテンツが存在しません。microCMSの管理画面でコンテンツを作成してください',
    )
  return content
}

// microCMSから取得したマークダウンテキストをhtmlに変換する
export const parseContent = async (markdownText: string) => {
  const parsedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdownText)
  return parsedContent
}
