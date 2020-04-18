import React from 'react'
import styled from 'styled-components'

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
  padding-top: 142px;
  padding-bottom: 26px;
`

const Logo = styled.img`
  width: 144px;
  height: 140px;
`

const Copyright = styled.p`
  margin-top: 157px;
  color: #7b7b7b;
  font-size: 12px;
  line-height: 18px;
`
