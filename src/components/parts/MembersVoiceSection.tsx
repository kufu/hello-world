import React from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery } from '../../themes'

import { SectionTitle } from './SectionTitle'
import { Accordion } from './Accordion'

export const MembersVoiceSection = () => (
  <Wrapper>
    <SectionTitle backgroundText="Members\AVoice">Members Voice</SectionTitle>

    <AccordionWrapper>
      <Accordion title="Q. 前職についておしえてください">
        <ul>
          <DescriptionItem>
            <Description>
              商用スペースのオンラインマーケットプレイスサービスの開発、運用を行っていました。開発チーム3人といったスタートアップ企業でグロースや開発をメインに行っていました。
            </Description>
            <Member>
              サーバサイドエンジニア :{' '}
              <Name>
                <a href="https://twitter.com/h1kita" target="_blank" rel="noopener noreferrer">
                  @h1kita
                </a>
              </Name>
            </Member>
          </DescriptionItem>
          <DescriptionItem>
            <Description>沖縄県の SIer で、PHP 製 グループウェアの開発・運用保守に携わっていました。</Description>
            <Member>
              サーバサイドエンジニア :{' '}
              <Name>
                <a href="https://twitter.com/gongoZ" target="_blank" rel="noopener noreferrer">
                  @gongoZ
                </a>
              </Name>
            </Member>
          </DescriptionItem>
          <DescriptionItem>
            <Description>仮想通貨交換業の取引所サービスの開発を担当するフロントエンドエンジニアでした。</Description>
            <Member>
              フロントエンドエンジニア :{' '}
              <Name>
                <a href="https://twitter.com/taaabbooo" target="_blank" rel="noopener noreferrer">
                  @taaabbooo
                </a>
              </Name>
            </Member>
          </DescriptionItem>
          <DescriptionItem>
            <Description>
              受託制作会社で最初はコーダーとしてマークアップをやっていて、その後 JavaScript
              の描画系のライブラリを使ったスペシャルコンテンツサイトを多く担当するようになりました。その後は広告系の会社に転職しフロントエンドエンジニアとして広告出稿システムの管理画面の制作や表示される広告のコンポーネントの作成を
              React を使って担当していました。
            </Description>
            <Member>
              フロントエンドエンジニア :{' '}
              <Name>
                <a href="https://twitter.com/nabeliwo" target="_blank" rel="noopener noreferrer">
                  @nabeliwo
                </a>
              </Name>
            </Member>
          </DescriptionItem>
          <DescriptionItem>
            <Description>
              動画生放送サイトの開発保守運用、プレゼン用スライド共有サイトの開発、オンライン教育システムの開発とかをやっている会社でした。Scala、Ruby、TypeScriptをメインに開発してました。
            </Description>
            <Member>
              サーバサイドエンジニア :{' '}
              <Name>
                <a href="https://twitter.com/GhostBrain" target="_blank" rel="noopener noreferrer">
                  @GhostBrain
                </a>
              </Name>
            </Member>
          </DescriptionItem>
        </ul>
      </Accordion>

      <Accordion title="Q. SmartHRに入った理由は？">
        <ul>
          <DescriptionItem>
            <Description>
              最新の従業員データがどんどん溜まっていくので、今後はデータの使い方や見せ方の工夫次第で幅広くサービスを提供できるというポテンシャルを感じたため。
            </Description>
            <Member>
              サーバサイドエンジニア :{' '}
              <Name>
                <a href="https://twitter.com/ykarakita" target="_blank" rel="noopener noreferrer">
                  @ykarakita
                </a>
              </Name>
            </Member>
          </DescriptionItem>
          <DescriptionItem>
            <Description>
              前職で入社手続きや年末調整にて SmartHR を利用しており、非常にいいプロダクトだなという印象を持っていたこと、会社の
              Value がアジャイルと親和性が高いと感じられたことなどから入社を決めました。
            </Description>
            <Member>
              サーバサイドエンジニア : <Name>Takuya MORIZUMI</Name>
            </Member>
          </DescriptionItem>
          <DescriptionItem>
            <Description>
              オープンな社風や素早い意思決定に惹かれました。また、大きく成長していく途上の企業で働く経験を得たいと考えました。
            </Description>
            <Member>
              サーバサイドエンジニア :{' '}
              <Name>
                <a href="https://twitter.com/sugamasao" target="_blank" rel="noopener noreferrer">
                  @sugamasao
                </a>
              </Name>
            </Member>
          </DescriptionItem>
          <DescriptionItem>
            <Description>
              人の役に立っていることを自分で納得できるプロダクトを、チームで開発していける会社だと思ったから。
            </Description>
            <Member>
              サーバサイドエンジニア :{' '}
              <Name>
                <a href="https://twitter.com/meganemura" target="_blank" rel="noopener noreferrer">
                  @meganemura
                </a>
              </Name>
            </Member>
          </DescriptionItem>
          <DescriptionItem>
            <Description>
              カジュアル面談や面接で話した方々の人柄に惹かれました。雰囲気が合うというか一緒に良いプロダクトを作りたい！と思いました！
            </Description>
            <Member>
              フロントエンドエンジニア :{' '}
              <Name>
                <a href="https://twitter.com/cidermitaina" target="_blank" rel="noopener noreferrer">
                  @cidermitaina
                </a>
              </Name>
            </Member>
          </DescriptionItem>
        </ul>
      </Accordion>

      <Accordion title="Q. 開発チームの特色といえば？">
        <ul>
          <DescriptionItem>
            <Description>
              人が良くて根が真面目な人が多いかなという印象です。プロダクトをより良いものにしたいという気持ちはみんな強いと思います。あと、一部の人はお酒を飲むと性格が変わります。
            </Description>
            <Member>
              サーバサイドエンジニア :{' '}
              <Name>
                <a href="https://twitter.com/tak_wak_dev" target="_blank" rel="noopener noreferrer">
                  @wakasa
                </a>
              </Name>
            </Member>
          </DescriptionItem>
          <DescriptionItem>
            <Description>
              困っている人がいたら助けようという気持ちの強い人が多いです。自チームだけではなく他チームからもコメントが来るのでとてもありがたいです。
            </Description>
            <Member>
              サーバサイドエンジニア :{' '}
              <Name>
                <a href="https://twitter.com/hypermkt" target="_blank" rel="noopener noreferrer">
                  @hypermkt
                </a>
              </Name>
            </Member>
          </DescriptionItem>
          <DescriptionItem>
            <Description>
              一部のエースエンジニアが引っ張っていくというよりも、みんなで話し合って決めて、協力して進めていこうという雰囲気があるかも。
            </Description>
            <Member>
              iOS エンジニア :{' '}
              <Name>
                <a href="https://twitter.com/sy_hash" target="_blank" rel="noopener noreferrer">
                  @sy_hash
                </a>
              </Name>
            </Member>
          </DescriptionItem>
          <DescriptionItem>
            <Description>みんな大喜利が大好きなことですね。ほぼ笑点です。</Description>
            <Member>
              フロントエンドエンジニア :{' '}
              <Name>
                <a href="https://twitter.com/Tokky0425" target="_blank" rel="noopener noreferrer">
                  @Tokky0425
                </a>
              </Name>
            </Member>
          </DescriptionItem>
        </ul>
      </Accordion>

      <Accordion title="Q. こういう人に入ってきてほしい！">
        <ul>
          <DescriptionItem>
            <Description>
              技術スタックはそんなにとんがっていなくても、プロダクトを中心とする文化に合いそうな方はぜひ。
            </Description>
            <Member>
              サーバサイドエンジニア :{' '}
              <Name>
                <a href="https://twitter.com/f440" target="_blank" rel="noopener noreferrer">
                  @f440
                </a>
              </Name>
            </Member>
          </DescriptionItem>
          <DescriptionItem>
            <Description>胆力の必要な開発ができる方。</Description>
            <Member>
              サーバサイドエンジニア :{' '}
              <Name>
                <a href="https://twitter.com/tknzk" target="_blank" rel="noopener noreferrer">
                  @tknzk
                </a>
              </Name>
            </Member>
          </DescriptionItem>
          <DescriptionItem>
            <Description>負債になりにくい設計や実装を考えたい方。</Description>
            <Member>
              サーバサイドエンジニア :{' '}
              <Name>
                <a href="https://twitter.com/motsat" target="_blank" rel="noopener noreferrer">
                  @motsat
                </a>
              </Name>
            </Member>
          </DescriptionItem>
          <DescriptionItem>
            <Description>社会の非合理をハックするんだ！という気持ちを持っている方。</Description>
            <Member>
              サーバサイドエンジニア :{' '}
              <Name>
                <a href="https://twitter.com/kody015" target="_blank" rel="noopener noreferrer">
                  @kody015
                </a>
              </Name>
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
  & > a {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`
