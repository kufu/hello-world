import React from 'react'

import { GatsbyWrapper } from './gatsby-wrapper'

export const wrapPageElement = ({ element }) => <GatsbyWrapper>{element}</GatsbyWrapper>

export const onClientEntry = () => {
  window.onload = () => {
    const wrapper = document.getElementById('app-start-wrapper')
    const loading = document.getElementById('app-start-loading')
    const content = document.getElementById('app-start-content')

    wrapper.style.overflow = 'visible'
    wrapper.style.position = 'static'
    wrapper.style.height = 'auto'

    setTimeout(() => {
      loading.style.display = 'none'
      content.style.opacity = 1
    }, 1000)
  }
}
