import React from 'react'
import styled from 'styled-components'

import { Accordion } from './Accordion'

export const MembersVoiceSection = () => {
  return (
    <Wrapper>
      {/* TODO: https://github.com/kufu/hello-world/pull/14をmergeしたらSectionTitleコンポーネント使うようにする */}
      <Title>
        <span>Members Voice</span>
      </Title>
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
  padding: 285px 0 115px;
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
    content: 'Members \\AVoice';
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

const AcoordionWrapper = styled.div`
  margin: 140px 0 0 auto;
  width: 867px;

  & > dl {
    &:not(:first-of-type) {
      margin-top: 26.5px;
    }
  }
`

const DescriptionItem = styled.li`
  padding: 30px 25.5px 0 68.5px;
  list-style: none;

  &:not(:first-child) {
    padding-top: 55px;
  }
  &:last-child {
    padding-bottom: 50.5px;
  }
`

const Description = styled.p`
  color: #d3d3d3;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2.25px;
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
