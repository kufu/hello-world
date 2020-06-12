import { FC } from 'react'

// @ts-ignore
import starryNightShader from 'raw-loader!./shaders/starryNight.frag'
import { useImageEffect } from './ImageEffect'

export const StarryNight: FC = () => {
  useImageEffect(starryNightShader)
  return null
}
