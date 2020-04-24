import React from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery } from '../../themes'
import { SectionTitle } from './SectionTitle'

export const TechnologyStackSection = () => {
  return (
    <Section>
      <SectionTitle backgroundText="Technology\AStack">Technology Stack</SectionTitle>
      <ChildSection>
        <ChildSectionTitle>SmartHR</ChildSectionTitle>
        <Text>
          開発に必要な技術は、現場の担当エンジニアがユーザとシステムにとって最適な技術を選定しています。SmartHR本体は、現在は以下の技術スタックの元に開発が進められています。
        </Text>
        <Supplements>
          <dt>プログラミング言語</dt>
          <dd>Ruby</dd>
          <dt>Webアプリケーションフレームワーク</dt>
          <dd>Ruby on Rails, jQuery, Bootstrap</dd>
          <dt>インフラストラクチャー</dt>
          <dd>AWS</dd>
          <dt>CI</dt>
          <dd>CircleCI</dd>
          <dt>オーケストレーション</dt>
          <dd>Ansible</dd>
          <dt>モニタリング</dt>
          <dd>Mackerel, Sentry</dd>
        </Supplements>
      </ChildSection>

      <ChildSection>
        <ChildSectionTitle>プラスアプリ</ChildSectionTitle>
        <Text>
          プラスアプリと呼ばれるプロダクト群については、新しめの技術内容を積極的に取り入れ、以下のような比較的モダンなスタックで開発しています。
        </Text>
        <Supplements>
          <dt>プログラミング言語</dt>
          <dd>Ruby, Node.js, TypeScript</dd>
          <dt>Webアプリケーションフレームワーク</dt>
          <dd>Ruby on Rails, React</dd>
          <dt>インフラストラクチャー</dt>
          <dd>Heroku</dd>
          <dt>CI</dt>
          <dd>Heroku CI</dd>
          <dt>オーケストレーション</dt>
          <dd>Terraform</dd>
          <dt>モニタリング</dt>
          <dd>Heroku, Sentry</dd>
        </Supplements>
      </ChildSection>
    </Section>
  )
}

const Section = styled.section`
  padding-top: 233px;
  color: #d3d3d3;
`

const ChildSection = styled.section`
  padding-top: 130px;
  width: 570px;
  margin: 0 auto;

  ${mediaQuery.mediumStyle(css`
    padding-top: 69px;
  `)}
  ${mediaQuery.smallStyle(css`
    width: 100%;
    padding-top: 38px;
  `)}
`

const ChildSectionTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
`

const Text = styled.p`
  font-size: 18px;
  letter-spacing: 2.25px;
  line-height: 50px;
  padding-top: 10px;
`

const Supplements = styled.dl`
  overflow: hidden;
  font-size: 14px;
  letter-spacing: 1.75px;
  line-height: 24px;
  padding-top: 20px;

  &::after {
    display: block;
    content: '';
    clear: both;
  }

  > dt {
    clear: both;
    float: left;
    color: #808080;

    &::after {
      display: inline;
      content: ':';
      padding: 0 5px;
    }
  }
  > dd {
    float: left;
  }
  ${mediaQuery.mediumStyle(css`
    padding-top: 7px;
  `)}
  ${mediaQuery.smallStyle(css`
    padding-top: 38px;
    > dt,
    > dd {
      float: none;
    }
    > dt {
      &:not(:first-child) {
        margin-top: 30px;
      }
      &::after {
        display: none;
      }
    }
  `)}
`
