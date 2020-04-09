import React from 'react'
import styled from 'styled-components'

import { SectionTitle } from './SectionTitle'

export const EntrySection = () => {
  return (
    <Section>
      <SectionTitle backgroundText="We Are\AHiring!!">We Are Hiring!!</SectionTitle>
      <Wrapper>
        <Message>
          「入退社の書類作成」「社会保険・労働保険の各種手続き」等を、
          <br />
          かんたん、シンプルにするクラウド人事労務ソフト「SmartHR」を開発しています。
          <br />
          一緒に SmartHR というスタートアップをグロースさせてください！
        </Message>
        <List>
          <Item>
            <span />
            ソフトウェアエンジニア（バックエンド）
            <span>></span>
          </Item>
          <Item>
            <span />
            ソフトウェアエンジニア（フロントエンド）
            <span>></span>
          </Item>
          <Item>
            <span />
            ソフトウェアエンジニア（マネージャ）
            <span>></span>
          </Item>
          <Item>
            <span />
            情報システム エンジニア
            <span>></span>
          </Item>
          <Item>
            <span />
            ソフトウェアエンジニア（SET/テスト）
            <span>></span>
          </Item>
          <Item>
            <span />
            QAエンジニア
            <span>></span>
          </Item>
        </List>
      </Wrapper>
    </Section>
  )
}

const Section = styled.section`
  padding-top: 233px;
  color: #d3d3d3;
`

const Wrapper = styled.div`
  margin-top: 113px;
  margin-left: auto;
  margin-bottom: 55px;
  width: 869px;
  justify-content: space-between;
`

const Message = styled.span`
  height: 178px;
  width: 868px;
  color: #d3d3d3;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2.25px;
  line-height: 48.6px;
  margin-bottom: 36px;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
`

const Item = styled.li`
  margin-top: 26px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 71px;
  width: 572px;
  border: 1px solid #979797;
  border-radius: 35px;
  background-color: #d8d8d8;
  color: #252525;
  padding: 25.5px 17.43px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.69px;
`
