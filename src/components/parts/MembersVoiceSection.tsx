import React from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery } from '../../themes'

import { SectionTitle } from './SectionTitle'
import { Accordion } from './Accordion'

export const MembersVoiceSection = () => (
  <Wrapper>
    <SectionTitle backgroundText="Members\AVoice">Members Voice</SectionTitle>

    <AccordionWrapper>
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
    </AccordionWrapper>
  </Wrapper>
)

const Wrapper = styled.section`
  width: 100%;

  ${mediaQuery.mediumStyle(css`
    padding: 40px 0;
  `)}
`
const AccordionWrapper = styled.div`
  margin: 140px 0 0 auto;
  width: 867px;

  & > dl {
    &:not(:first-of-type) {
      margin-top: 26px;
    }
  }

  ${mediaQuery.mediumStyle(css`
    width: 100%;
    margin-top: 60px;
  `)}

  ${mediaQuery.smallStyle(css`
    margin-top: 35px;
  `)}
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

  ${mediaQuery.mediumStyle(css`
    padding: 30px 25px 0 25px;
  `)}

  ${mediaQuery.smallStyle(css`
    padding: 20px 15px 0 15px;

    &:last-child {
      padding-bottom: 55px;
    }
  `)}
`
const Description = styled.p`
  color: #d3d3d3;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 48.6px;

  ${mediaQuery.smallStyle(css`
    font-size: 14px;
    line-height: 38px;
  `)}
`
const Member = styled.p`
  color: #808080;
  font-size: 14px;
  line-height: 21px;
  text-align: right;

  ${mediaQuery.mediumStyle(css`
    padding-top: 10px;
  `)}
`
const Name = styled.span`
  text-decoration: underline;
`
