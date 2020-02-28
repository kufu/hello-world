import React from 'react'
import styled from 'styled-components'

export const MessageSection = () => (
  <Wrapper>
    <TextWrapper>
      <Text>世の中には多くの形骸化した既成概念や慣習があり、</Text>
      <Text>人々はそれを受け入れて生活をしています。</Text>
      <Text>私たちの役目は、テクノロジーと創意工夫をもって、</Text>
      <Text>それらの社会の非合理をハックしていくことです。</Text>
      <Text>社会の仕組みを変え、歴史に名を残すようなソフトウェアをつくりましょう。</Text>
    </TextWrapper>
  </Wrapper>
)

const Wrapper = styled.section`
  padding: 285px 0 115px;
`

const TextWrapper = styled.div`
  width: 630px;
  margin: 0 auto;
`

const Text = styled.p`
  color: #e0e0e0;
  font-size: 18px;
  padding-top: 50px;
`
