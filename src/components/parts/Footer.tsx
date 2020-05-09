import React from 'react'
import styled, { css } from 'styled-components'
import { mediaQuery } from '../../themes'

export const Footer = () => {
  return (
    <Wrapper>
      <Logo src={'/images/logo_smarthr.png'} alt="SmartHR" />
      <Copyright>&copy; SmartHR, Inc.</Copyright>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  text-align: center;
  padding: 142px 0 26px;

  ${mediaQuery.mediumStyle(css`
    padding: 121px 0 26px;
  `)}
  ${mediaQuery.smallStyle(css`
    padding: 98px 0 20px;
  `)}
`

const Logo = styled.img`
  width: 144px;

  ${mediaQuery.smallStyle(css`
    width: 103px;
  `)}
`

const Copyright = styled.p`
  margin-top: 157px;
  color: #7b7b7b;
  font-size: 12px;
  line-height: 18px;

  ${mediaQuery.mediumStyle(css`
    margin-top: 140px;
  `)}
  ${mediaQuery.smallStyle(css`
    margin-top: 106px;
  `)}
`
