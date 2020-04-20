import React from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery } from '../../themes'
import { SectionTitle } from './SectionTitle'
import { Accordion } from './Accordion'

export const MembersVoiceSection = () => {
  return (
    <Wrapper>
      <SectionTitle backgroundText="Members\AVoice">Members Voice</SectionTitle>
      <AcoordionWrapper>
        <Accordion title="Q. 前職についておしえてください?">
          <ul>
            <DescriptionItem>
              <Description>
                SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由
              </Description>
              <Member>
                ソフトウェアエンジニア : <Name>@AtsushiM</Name>
              </Member>
            </DescriptionItem>
            <DescriptionItem>
              <Description>
                SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由
              </Description>
              <Member>
                ソフトウェアエンジニア : <Name>@AtsushiM</Name>
              </Member>
            </DescriptionItem>
            <DescriptionItem>
              <Description>
                SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由
              </Description>
              <Member>
                ソフトウェアエンジニア : <Name>@AtsushiM</Name>
              </Member>
            </DescriptionItem>
          </ul>
        </Accordion>
        <Accordion title="Q. SmartHRに入った理由は？">
          <ul>
            <DescriptionItem>
              <Description>
                SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由
              </Description>
              <Member>
                ソフトウェアエンジニア : <Name>@AtsushiM</Name>
              </Member>
            </DescriptionItem>
            <DescriptionItem>
              <Description>
                SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由
              </Description>
              <Member>
                ソフトウェアエンジニア : <Name>@AtsushiM</Name>
              </Member>
            </DescriptionItem>
            <DescriptionItem>
              <Description>
                SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由
              </Description>
              <Member>
                ソフトウェアエンジニア : <Name>@AtsushiM</Name>
              </Member>
            </DescriptionItem>
          </ul>
        </Accordion>
        <Accordion title="Q. 開発チームの特色といえば？">
          <ul>
            <DescriptionItem>
              <Description>
                SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由
              </Description>
              <Member>
                ソフトウェアエンジニア : <Name>@AtsushiM</Name>
              </Member>
            </DescriptionItem>
            <DescriptionItem>
              <Description>
                SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由
              </Description>
              <Member>
                ソフトウェアエンジニア : <Name>@AtsushiM</Name>
              </Member>
            </DescriptionItem>
            <DescriptionItem>
              <Description>
                SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由
              </Description>
              <Member>
                ソフトウェアエンジニア : <Name>@AtsushiM</Name>
              </Member>
            </DescriptionItem>
          </ul>
        </Accordion>
        <Accordion title="Q. こういう人に入ってきてほしい！">
          <ul>
            <DescriptionItem>
              <Description>
                SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由
              </Description>
              <Member>
                ソフトウェアエンジニア : <Name>@AtsushiM</Name>
              </Member>
            </DescriptionItem>
            <DescriptionItem>
              <Description>
                SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由
              </Description>
              <Member>
                ソフトウェアエンジニア : <Name>@AtsushiM</Name>
              </Member>
            </DescriptionItem>
            <DescriptionItem>
              <Description>
                SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由SmartHRに入った理由
              </Description>
              <Member>
                ソフトウェアエンジニア : <Name>@AtsushiM</Name>
              </Member>
            </DescriptionItem>
          </ul>
        </Accordion>
      </AcoordionWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding-top: 235px;
`

const AcoordionWrapper = styled.div`
  margin: 140px 0 0 auto;
  width: 867px;

  ${mediaQuery.mediumStyle(css`
    width: 100%;
  `)}

  & > dl {
    &:not(:first-of-type) {
      margin-top: 26px;
    }
  }
`

const DescriptionItem = styled.li`
  padding: 30px 25px 0 68px;
  list-style: none;

  &:not(:first-child) {
    padding-top: 55px;
  }
  &:last-child {
    padding-bottom: 50px;
  }
`

const Description = styled.p`
  color: #d3d3d3;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 48.6px;
`

const Member = styled.p`
  color: #808080;
  font-size: 14px;
  line-height: 21px;
  text-align: right;
`

const Name = styled.span`
  text-decoration: underline;
`
