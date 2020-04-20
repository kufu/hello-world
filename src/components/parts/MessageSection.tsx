import React from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery } from '../../themes'

export const MessageSection = () => (
  <Wrapper>
    <TextWrapper>
      <Text>
        世の中には多くの形骸化した既成概念や慣習があり、
        <br />
        人々はそれを受け入れて生活をしています。
        <br />
        私たちの役目は、テクノロジーと創意工夫をもって、 <br />
        それらの社会の非合理をハックしていくことです。
        <br />
        社会の仕組みを変え、 歴史に名を残すようなソフトウェアをつくりましょう。
      </Text>
    </TextWrapper>
  </Wrapper>
)

const Wrapper = styled.section`
  padding: 285px 0 115px;

  ${mediaQuery.mediumStyle(css`
    padding: 140px 0 0;
  `)}

  ${mediaQuery.smallStyle(css`
    padding: 72px 0 0;
  `)}
`

const TextWrapper = styled.div`
  width: 640px;
  margin: 0 auto;

  ${mediaQuery.mediumStyle(css`
    width: 500px;
  `)}

  ${mediaQuery.smallStyle(css`
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
  `)}
`

const Text = styled.p`
  color: #e0e0e0;
  font-size: 18px;
  padding-top: 50px;
  line-height: 72px;

  ${mediaQuery.mediumStyle(css`
    font-size: 14px;
  `)}

  ${mediaQuery.smallStyle(css`
    font-size: 18px;
  `)}
`
