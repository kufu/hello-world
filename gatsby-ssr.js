import React from 'react'

import { GatsbyWrapper } from './gatsby-wrapper'

export const wrapPageElement = ({ element }) => {
  if (process.env.NODE_ENV === 'development') return element
  return <GatsbyWrapper>{element}</GatsbyWrapper>
}
