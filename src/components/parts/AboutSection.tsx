import React from 'react'
import styled from 'styled-components'

export const AboutSection = () => (
  <Wrapper>
    <Title>
      <span>About Us</span>
    </Title>
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

const Title = styled.h2`
  color: #fff;
  font-size: 26px;
  padding-left: 102.5px;
  position: relative;

  > span {
    z-index: 1;
    position: relative;
  }

  &::before {
    content: '';
    display: block;
    background: #797979;
    height: 2px;
    width: 93px;
    margin-bottom: 5px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 0;
  }

  &::after {
    content: 'About \\AUs';
    font-family: 'Homemade Apple', cursive;
    color: #fff;
    position: absolute;
    z-index: 0;
    white-space: pre;
    font-size: 100px;
    left: 20px;
    top: -56px;
    z-index: 0;
    opacity: 0.4;
    transform: rotate(-7deg);
  }
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
