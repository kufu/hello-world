import { FC } from 'react'

type Props = {
  value: string | number
}

export const Console: FC<Props> = ({ value }) => {
  console.log(`ログ: ${value}`)
  return null
}
