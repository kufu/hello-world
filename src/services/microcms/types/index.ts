import { type MicroCMSListResponse } from 'microcms-js-sdk'

// microCMSのcontentsAPIで定義しているコンテンツ種別（type）のリスト
export type ContentType = 'links'

export type Content = {
  type: Array<ContentType> // NOTE: microCMSのSelectable Fieldは単一選択でも配列型で返却される
  content: string
}

export type ContentResponse = MicroCMSListResponse<Content>
