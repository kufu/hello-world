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
          <li>
            <Item href="#">ソフトウェアエンジニア（バックエンド）</Item>
          </li>
          <li>
            <Item href="#">ソフトウェアエンジニア（フロントエンド）</Item>
          </li>
          <li>
            <Item>ソフトウェアエンジニア（マネージャ）</Item>
          </li>
          <li>
            <Item>情報システム エンジニア</Item>
          </li>
          <li>
            <Item>ソフトウェアエンジニア（SET/テスト）</Item>
          </li>
          <li>
            <Item>QAエンジニア</Item>
          </li>
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

const Message = styled.p`
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
  > li:not(:first-child) {
    margin-top: 26px;
  }
`

const Item = styled.a`
  display: block;
  text-align: center;
  position: relative;
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
  &::after {
    position: absolute;
    content: '';
    width: 7px;
    height: 7px;
    border-top: solid 1px #252525;
    border-right: solid 1px #252525;
    transform: rotate(45deg) translateY(-50%);
    top: 50%;
    right: 17px;
  }
`
