import { FlattenSimpleInterpolation } from 'styled-components'

const mediumMaxWidth = 1199
const smallMaxWidth = 740

export const mediaQuery = {
  mediumStyle: (style: FlattenSimpleInterpolation) => `@media screen and (max-width: ${mediumMaxWidth}px) {${style}}`,
  smallStyle: (style: FlattenSimpleInterpolation) => `@media screen and (max-width: ${smallMaxWidth}px) {${style}}`,
}
