import React from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery } from '../../themes'

export const EyeCatch = () => (
  <Wrapper>
    <Header>
      <Logo>
        <LogoImage src="images/logo.svg" alt="SmartHR" />
        <SiteTitle>Engineer Recruiting</SiteTitle>
      </Logo>

      <PcEntryButton href="">ENTRY</PcEntryButton>
    </Header>

    <PageTitle>
      <PageTitleImage src="/images/eyecatch/title.svg" alt="歴史に残る模範的なソフトウェアをつくろう" />
    </PageTitle>

    <SpButtonWrapper>
      <SpEntryButton href="">ENTRY</SpEntryButton>
    </SpButtonWrapper>
  </Wrapper>
)

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  padding: 0 28px;
  color: #e8e7e5;
  box-sizing: border-box;
  z-index: 1;

  ${mediaQuery.mediumStyle(css`
    height: 70px;
    padding: 0 15px;
  `)}

  ${mediaQuery.smallStyle(css`
    height: 50px;
  `)}
`
const Logo = styled.div`
  display: flex;
  align-items: center;
`
const LogoImage = styled.img`
  width: 196px;

  ${mediaQuery.smallStyle(css`
    width: 148px;
  `)}
`
const SiteTitle = styled.p`
  display: flex;
  align-items: center;
  border-left: 1px solid #797979;
  margin-left: 18px;
  padding-left: 18px;
  font-size: 14px;

  ${mediaQuery.smallStyle(css`
    margin-left: 14px;
    padding-left: 14px;
    font-size: 12px;
  `)}
`
const PcEntryButton = styled.a`
  width: 130px;
  padding: 12px 0;
  border-radius: 35px;
  background-color: #fff;
  color: #555;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  ${mediaQuery.smallStyle(css`
    display: none;
  `)}
`
const PageTitle = styled.h1`
  position: relative;
  max-width: 1367px;
  height: 100vh;
  margin: 0 auto;
`
const PageTitleImage = styled.img`
  position: absolute;
  top: 50%;
  left: 103px;
  box-sizing: border-box;
  transform: translateY(-50%);

  ${mediaQuery.mediumStyle(css`
    width: 623px;
    left: 50px;
  `)}

  ${mediaQuery.smallStyle(css`
    width: 100%;
    left: 0;
    padding: 0 20px;
    transform: translateY(calc(-50% - 50px));
  `)}
`
const SpButtonWrapper = styled.div`
  position: absolute;
  bottom: 110px;
  left: 0;
  display: none;
  width: 100%;
  text-align: center;

  ${mediaQuery.smallStyle(css`
    display: block;
  `)}
`
const SpEntryButton = styled.a`
  display: inline-block;
  width: 185px;
  padding: 16px 0;
  border-radius: 35px;
  background-color: #fff;
  color: #555;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`
