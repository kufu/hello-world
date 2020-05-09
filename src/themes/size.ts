import { FlattenSimpleInterpolation } from 'styled-components'

const mediumMaxWidth = 1199
const smallMaxWidth = 739

export const isMediumWindow = () => innerWidth < mediumMaxWidth

export const mediaQuery = {
  mediumStyle: (style: FlattenSimpleInterpolation) => `@media screen and (max-width: ${mediumMaxWidth}px) {${style.join('')}}`,
  smallStyle: (style: FlattenSimpleInterpolation) => `@media screen and (max-width: ${smallMaxWidth}px) {${style.join('')}}`,
}
