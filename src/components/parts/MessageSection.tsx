import React from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery } from '../../themes'

export const MessageSection = () => (
  <Wrapper>
    <Text>
      世の中には多くの形骸化した既成概念や慣習があり、
      <BrPc />
      人々はそれを受け入れて生活をしています。
      <br />
      私たちの役目は、テクノロジーと創意工夫をもって、
      <BrPc />
      それらの社会の非合理をハックしていくことです。
      <br />
      社会の仕組みを変え、 歴史に名を残すようなソフトウェアをつくりましょう。
    </Text>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 640px;
  margin: 0 auto;

  ${mediaQuery.mediumStyle(css`
    width: 500px;
  `)}

  ${mediaQuery.smallStyle(css`
    width: 100%;
  `)}
`
const Text = styled.p`
  color: #e0e0e0;
  font-size: 18px;
  line-height: 72px;

  ${mediaQuery.mediumStyle(css`
    font-size: 14px;
  `)}

  ${mediaQuery.smallStyle(css`
    font-size: 18px;
  `)}
`
const BrPc = styled.br`
  ${mediaQuery.smallStyle(css`
    display: none;
  `)}
`
