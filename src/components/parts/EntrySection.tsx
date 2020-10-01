import React from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery } from '../../themes'

import { SectionTitle } from './SectionTitle'

export const EntrySection = () => (
  <Wrapper id="entry">
    <SectionTitle backgroundText="We Are\AHiring!!">We Are Hiring!!</SectionTitle>

    <Inner>
      <Message>
        「入退社の書類作成」「社会保険・労働保険の各種手続き」等を、
        <BrPc />
        かんたん、シンプルにするクラウド人事労務ソフト「SmartHR」を開発しています。
        <BrPc />
        一緒に SmartHR というスタートアップをグロースさせてください！
      </Message>
      <List>
        <li>
          <Item href="https://open.talentio.com/1/c/smarthr/requisitions/detail/6632" target="_blank" rel="noopener noreferrer">
            Webアプリケーションエンジニア
          </Item>
        </li>
        <li>
          <Item href="https://open.talentio.com/1/c/smarthr/requisitions/detail/7349" target="_blank" rel="noopener noreferrer">
            フロントエンドエンジニア
          </Item>
        </li>
        <li>
          <Item href="https://open.talentio.com/1/c/smarthr/requisitions/detail/12856" target="_blank" rel="noopener noreferrer">
            テストエンジニア
            <BrSp />
            <span>（Software Engineer in Test）</span>
          </Item>
        </li>
        <li>
          <Item href="https://open.talentio.com/1/c/smarthr/requisitions/detail/12855" target="_blank" rel="noopener noreferrer">
            QA
            <BrSp />
            <span>（品質保証）</span>
          </Item>
        </li>
        <li>
          <Item href="https://open.talentio.com/1/c/smarthr/requisitions/detail/7587" target="_blank" rel="noopener noreferrer">
            情報システム エンジニア
          </Item>
        </li>
        <li>
          <Item href="https://open.talentio.com/1/c/smarthr/requisitions/detail/13859" target="_blank" rel="noopener noreferrer">
            セキュリティエンジニア
          </Item>
        </li>
        <li>
          <Item href="https://open.talentio.com/1/c/smarthr/requisitions/detail/13762" target="_blank" rel="noopener noreferrer">
            カジュアル面談ご希望の方
          </Item>
        </li>
      </List>
    </Inner>
  </Wrapper>
)

const Wrapper = styled.section`
  width: 100%;
  padding: 100px 0;
`
const Inner = styled.div`
  width: 869px;
  margin: 113px 0 0 auto;

  ${mediaQuery.mediumStyle(css`
    width: 100%;
    margin-top: 70px;
  `)}

  ${mediaQuery.smallStyle(css`
    margin-top: 50px;
  `)}
`
const Message = styled.p`
  width: 868px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2.25px;
  line-height: 48.6px;
  margin-bottom: 36px;

  ${mediaQuery.mediumStyle(css`
    width: 100%;
    margin-bottom: 50px;
  `)}

  ${mediaQuery.smallStyle(css`
    margin-bottom: 60px;
  `)}
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  > li:not(:first-child) {
    margin-top: 26px;
  }
`
const Item = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 572px;
  height: 71px;
  padding: 0 26px;
  border-radius: 35px;
  border: 1px solid #979797;
  background-color: #d8d8d8;
  color: #252525;
  font-weight: bold;
  font-size: 18px;
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

  > span {
    font-size: 14px;
  }

  ${mediaQuery.largeStyle(css`
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  `)}

  ${mediaQuery.mediumStyle(css`
    margin: 0 auto;
  `)}

  ${mediaQuery.smallStyle(css`
    width: 100%;
    align-items: flex-start;
  `)}
`
const BrPc = styled.br`
  ${mediaQuery.mediumStyle(css`
    display: none;
  `)}
`
const BrSp = styled.br`
  display: none;

  ${mediaQuery.smallStyle(css`
    display: block;
  `)}
`
