import React from 'react'
import styled from 'styled-components'
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
          webkitallowfullscreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
      </li>
      <li>
        <iframe
          src="https://smarthr.slides.com/smarthr_dev/smarthr_development-016f16/embed?style=light"
          width="576"
          height="420"
          scrolling="no"
          frameBorder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
      </li>
    </List>
  </Wrapper>
)

const Wrapper = styled.section`
  padding-top: 247px;
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
`
