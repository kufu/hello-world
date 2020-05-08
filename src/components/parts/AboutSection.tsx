import React from 'react'
import styled, { css } from 'styled-components'
import { mediaQuery } from '../../themes'
import { SectionTitle } from './SectionTitle'

export const AboutSection = () => (
  <Wrapper>
    <SectionTitle backgroundText="About\AUs">About Us</SectionTitle>

    <List>
      <li>
        <iframe
          src="https://smarthr.slides.com/smarthr_dev/smarthr_product-d1c5eb/embed?style=light"
          width="576"
          height="420"
          scrolling="no"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreenn="true"
          allowFullScreen
          title="PRODUCTS"
        ></iframe>
      </li>
      <li>
        <iframe
          src="https://smarthr.slides.com/smarthr_dev/smarthr_development-016f16/embed?style=light"
          width="576"
          height="420"
          scrolling="no"
          frameBorder="0"
          webkitallowfullscreenn="true"
          mozallowfullscreenn="true"
          allowFullScreen
          title="DEVELOPMENT"
        ></iframe>
      </li>
    </List>
  </Wrapper>
)

const Wrapper = styled.section`
  padding-top: 380px;

  ${mediaQuery.mediumStyle(css`
    padding: 220px 0 0;
  `)}
  ${mediaQuery.smallStyle(css`
    padding-top: 150px;
  `)}
`

const List = styled.ul`
  max-width: 1160px;
  margin: 78px auto 0;
  position: relative;
  z-index: 1;

  & > li {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56.25%;
    & > iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
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
