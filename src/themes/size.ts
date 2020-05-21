import { FlattenSimpleInterpolation } from 'styled-components'

const mediumMaxWidth = 1199
const smallMaxWidth = 739

export const isMediumWindow = () => (typeof window !== 'undefined' ? window.innerWidth < mediumMaxWidth : false)

export const mediaQuery = {
  mediumStyle: (style: FlattenSimpleInterpolation) => `@media screen and (max-width: ${mediumMaxWidth}px) {${style.join('')}}`,
  smallStyle: (style: FlattenSimpleInterpolation) => `@media screen and (max-width: ${smallMaxWidth}px) {${style.join('')}}`,
}
