import { FC } from 'react'

// @ts-ignore
import glitchShader from 'raw-loader!./shaders/glitch.frag'
import { useImageEffect } from './ImageEffect'

export const Glitch: FC = () => {
  useImageEffect(glitchShader)
  return null
}
