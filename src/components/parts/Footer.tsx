import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <Wrapper>
      <img src={'/images/logo_smarthr.png'} alt="SmartHR" width="144" height="140" />
      <Copyright>&copy; SmartHR, Inc.</Copyright>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  text-align: center;
  padding-top: 142px;
  padding-bottom: 26px;
`

const Copyright = styled.p`
  margin-top: 157px;
  color: #7b7b7b;
  font-size: 12px;
  line-height: 18px;
`
