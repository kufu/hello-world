import React from 'react'
import styled from 'styled-components'

export const IePage = () => (
  <Wrapper>
    <div>
      <Text>
        あなたと Chrome,
        <br />
        今すぐダウンロー
        <br />ド
      </Text>
      <Link href="https://www.google.com/intl/ja_jp/chrome/" title="無料Chromeのダウンロード">
        無料Chromeのダウンロード
      </Link>
      <Description>
        ※このページは SmartHR のエンジニア採用サイトです。
        <br />
        Internet Explorer には対応していません。
      </Description>
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
  color: #646464;
  font: normal 64px/63px Helvetica, Arial, sans-serif;
  text-align: center;
`
const Text = styled.p`
  margin-bottom: 20px;
`
const Link = styled.a`
  display: block;
  width: 244px;
  margin: 0 auto;
  border-radius: 6px;
  border: 1px solid #e99c98;
  background: linear-gradient(#ecadaa, #d23019);
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  line-height: 47px;
`
const Description = styled.p`
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.4;
`
