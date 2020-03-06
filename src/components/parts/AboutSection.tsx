import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from './SectionTitle'

export const AboutSection = () => (
  <Wrapper>
    <SectionTitle backgroundText="About \AUs">About Us</SectionTitle>

    <List>
      <li>
        <a href="">
          <img src="/images/about/product.png" alt="product" />
        </a>
      </li>
      <li>
        <a href="">
          <img src="/images/about/development.png" alt="development" />
        </a>
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

  & > li:not(:first-child) {
    margin-top: 67px;
  }
`
