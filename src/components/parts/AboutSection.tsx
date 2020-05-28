import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery } from '../../themes'

import { SectionTitle } from './SectionTitle'
import { useEventListener } from '../hooks/useEventListener'

export const AboutSection = () => {
  const [productsSrc, setProductsSrc] = useState('')
  const [developmentSrc, setDevelopmentSrc] = useState('')
  const [visible, setvisible] = useState(false)

  useEventListener('scroll', () => {
    setProductsSrc('https://smarthr.slides.com/smarthr_dev/smarthr_product-d1c5eb/embed?style=light')
    setDevelopmentSrc('https://smarthr.slides.com/smarthr_dev/smarthr_development-016f16/embed?style=light')
    setvisible(true)
  })

  return (
    <Wrapper>
      <SectionTitle backgroundText="About\AUs">About Us</SectionTitle>

      <List>
        <li>
          <Iframe
            src={productsSrc}
            width="576"
            height="420"
            scrolling="no"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            title="PRODUCTS"
            visible={visible}
          />
        </li>

        <li>
          <Iframe
            src={developmentSrc}
            width="576"
            height="420"
            scrolling="no"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            title="DEVELOPMENT"
            visible={visible}
          />
        </li>
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0 0;
`
const List = styled.ul`
  max-width: 1160px;
  margin: 78px auto 0;
  position: relative;
  z-index: 1;

  > li {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56.25%;
  }

  & > li:not(:first-child) {
    margin-top: 67px;
  }

  ${mediaQuery.mediumStyle(css`
    margin-top: 40px;

    & > li:not(:first-child) {
      margin-top: 40px;
    }
  `)}

  ${mediaQuery.smallStyle(css`
    margin-top: 60px;

    & > li:not(:first-child) {
      margin-top: 28px;
    }
  `)}
`
const Iframe = styled.iframe<{ webkitallowfullscreen: string; mozallowfullscreen: string; visible: boolean }>`
  ${({ visible }) => {
    return css`
      opacity: ${visible ? 1 : 0};
      transition: all 0.3s ease-in-out;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `
  }}
`
