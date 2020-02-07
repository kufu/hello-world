import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { App } from '../components/App'
import { MessageSection } from '../components/MessageSection'
import { AboutSection } from '../components/AboutSection'

const Index = () => (
  <App>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Homemade+Apple&display=swap" rel="stylesheet" />
    </Helmet>
    <Wrapper>
      <Header>
        <Left>
          <Logo>
            <img src={'/logo.svg'} alt="Logo" />
          </Logo>
          <Text>Engineer Recruiting</Text>
        </Left>
        <Right>
          <EntryButton href="">ENTRY</EntryButton>
        </Right>
      </Header>
      <MessageSection />
      <AboutSection />
      <TechnologyStackSection />
      <MembersVoiceSection />
      <WelfareSection />
      <EntrySection />
      <Footer />
    </Wrapper>
  </App>
)

export default Index

const Wrapper = styled.div`
  background-image: url(/mv.png);
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

const TechnologyStackSection = styled.section``
const MembersVoiceSection = styled.section``
const WelfareSection = styled.section``
const EntrySection = styled.section``
const Footer = styled.footer``
