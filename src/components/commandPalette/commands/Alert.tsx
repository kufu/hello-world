import { FC } from 'react'

type Props = {
  value: string | number
}

export const Alert: FC<Props> = ({ value }) => {
  alert(`アラート: ${value}`)
  return null
}
