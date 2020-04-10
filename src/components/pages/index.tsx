import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'

import { CommandPaletteContext } from '../commandPalette'
import { MessageSection } from '../parts/MessageSection'
import { AboutSection } from '../parts/AboutSection'
import { TechnologyStackSection } from '../parts/TechnologyStackSection'
import { MembersVoiceSection } from '../parts/MembersVoiceSection'
import { WelfareSection } from '../parts/WelfareSection'
import { EntrySection } from '../parts/EntrySection'
import { Footer } from '../parts/Footer'

export const IndexPage = () => {
  const { currentCommand } = useContext(CommandPaletteContext)

  return (
    <Wrapper>
      {currentCommand && currentCommand.component}

      <Header>
        <Left>
          <Logo>
            <img src={'/images/logo.svg'} alt="Logo" />
          </Logo>
          <Text>Engineer Recruiting</Text>
        </Left>
        <Right>
          <EntryButton href="">ENTRY</EntryButton>
        </Right>
      </Header>
      <Sections>
        <EyecatchSection>
          <PageTitle>
            <PageTitleImage src="/images/eyecatch/title.svg" alt="歴史に残る模範的なソフトウェアをつくろう" />
          </PageTitle>
        </EyecatchSection>
        <MessageSection />
        <AboutSection />
        <TechnologyStackSection />
        <MembersVoiceSection />
        <WelfareSection />
        <EntrySection />
      </Sections>
      <ScrollIcon>SCROLL</ScrollIcon>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-image: url(/images/mv.png);
  background-size: cover;
  background-attachment: fixed;
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  margin: 0 28px;
  color: #e8e7e5;
`
const Left = styled.div`
  display: flex;
`
const Text = styled.p`
  font-size: 14px;
  border-left: 1px solid #797979;
  margin-left: 18px;
  padding-left: 18px;
  display: flex;
  align-items: center;
`
const Logo = styled.div``
const Right = styled.div`
  display: flex;
`
const EntryButton = styled.a`
  background-color: #fff;
  color: #555555;
  font-size: 16px;
  font-weight: bold;
  width: 130px;
  padding: 12px 0;
  text-align: center;
  border-radius: 35px;
`
const PageTitle = styled.h1`
  position: relative;
  line-height: 0;
`
const PageTitleImage = styled.img`
  display: block;
`
const Sections = styled.div`
  max-width: 1160px;
  margin: 0 auto;
`
const EyecatchSection = styled.section``
const scroll = keyframes`
  0% {
    bottom: 80px;
    height: 0px;
  }

  40% {
    bottom: 0px;
    height: 80px;
  }

  60% {
    bottom: 0px;
    height: 80px;
  }

  100% {
    bottom: 0px;
    height: 0px;
  }
`
const ScrollIcon = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  height: 104px;
  color: #e1e1e1;
  &::before {
    display: block;
    bottom: 0;
    content: '';
    position: absolute;
    width: 1px;
    height: 80px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #797979;
  }
  &::after {
    display: block;
    bottom: 56px;
    content: '';
    position: absolute;
    width: 3px;
    height: 0px;
    animation: ${scroll} 1s infinite ease-in;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ebebeb;
  }
`
