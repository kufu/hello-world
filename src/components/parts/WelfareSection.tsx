import React from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery } from '../../themes'
import { SectionTitle } from './SectionTitle'

export const WelfareSection = () => {
  return (
    <Section>
      <SectionTitle backgroundText="Welfare">Welfare</SectionTitle>
      <List>
        <Item>
          <ItemTitle>書籍購入支援</ItemTitle>
          <img src={'/images/welfare/welfare1.jpg'} />
          <ItemDescription>
            業務で必要な知識を得るための書籍の購入は、稟議不要で申請可能。Slack で Amazon のリンクを送るだけ。
          </ItemDescription>
        </Item>
        <Item>
          <ItemTitle>開発機材購入支援</ItemTitle>
          <img src={'/images/welfare/welfare2.jpg'} />
          <ItemDescription>
            最大10万円まで PC 周辺機材を購入可能。開発効率を上げるため、好奇心を満たすため、その使い道に制限は無し。
          </ItemDescription>
        </Item>
        <Item>
          <ItemTitle>勉強会参加支援</ItemTitle>
          <img src={'/images/welfare/welfare3.jpg'} />
          <ItemDescription>
            勉強会への参加費は会社負担。遠方の場合は、交通費および宿泊費も支援。業務として扱うため、休日の場合は振替休日を付与。
          </ItemDescription>
        </Item>
        <Item>
          <ItemTitle>4Kディスプレイ</ItemTitle>
          <img src={'/images/welfare/welfare4.jpg'} />
          <ItemDescription>
            4K ディスプレイを標準で配布。USB PD 対応で、MacBook に給電しながらデュアルディスプレイでの作業が可能。
          </ItemDescription>
        </Item>
        <Item>
          <ItemTitle>昼寝推奨</ItemTitle>
          <img src={'/images/welfare/welfare5.jpg'} />
          <ItemDescription>オフィスには昼寝スペース完備。好きな時間に利用可能。もちろん、自席での昼寝も可能。</ItemDescription>
        </Item>
        <Item>
          <ItemTitle>リモートワーク</ItemTitle>
          <img src={'/images/welfare/welfare6.jpg'} />
          <ItemDescription>
            リモートワークは事前申請のうえ週1回まで可能。好きな時間帯で4時間働けば良い半休制度と併用すると、日中の時間が有効に活用可能。
          </ItemDescription>
          <Link href="https://shanaiho.smarthr.co.jp/n/nf32ba99b0233" target="_blank" rel="noopener noreferrer">
            「シン・半休制度について」
          </Link>
        </Item>
      </List>
      <LinkButton href="https://shanaiho.smarthr.co.jp/n/nf32ba99b0233" target="_blank" rel="noopener noreferrer">
        その他の福利厚生
        <Icon>■</Icon>
      </LinkButton>
    </Section>
  )
}

const Section = styled.section`
  padding-top: 233px;
  color: #d3d3d3;

  ${mediaQuery.smallStyle(css`
    padding-top: 150px;
  `)}
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 113px;
  margin-left: auto;
  margin-bottom: 55px;
  width: 869px;
  justify-content: space-between;

  ${mediaQuery.mediumStyle(css`
    margin-top: 59px;
    width: 100%;
  `)}
  ${mediaQuery.smallStyle(css`
    margin-top: 41px;
    justify-content: center;
  `)}
`

const Item = styled.li`
  width: 276px;
  margin-top: 26.5px;
  ${mediaQuery.mediumStyle(css`
    width: 223px;
  `)}
  ${mediaQuery.smallStyle(css`
    width: 315px;
  `)}
  > img {
    width: 276px;
    ${mediaQuery.mediumStyle(css`
      width: 223px;
    `)}
    ${mediaQuery.smallStyle(css`
      width: 315px;
    `)}
  }
`

const ItemTitle = styled.p`
  color: #d3d3d3;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0.85px;
  margin-bottom: 26px;

  ${mediaQuery.smallStyle(css`
    font-size: 18px;
  `)}
`
const ItemDescription = styled.p`
  color: #d3d3d3;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.75px;
  line-height: 23.6px;
  margin-top: 15px;
  height: 125px;
`

const Link = styled.a`
  color: #b7b7b7;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.75px;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`

const LinkButton = styled.a`
  display: flex;
  margin-left: auto;
  box-sizing: border-box;
  height: 74px;
  width: 867px;
  border: 1px solid #4e4e4e;
  border-radius: 6px;
  background-color: rgba(21, 17, 17, 0.52);
  align-items: center;
  justify-content: space-between;
  padding: 0 35.5px;
  color: #d3d3d3;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0.85px;

  ${mediaQuery.mediumStyle(css`
    width: 100%;
  `)}

  ${mediaQuery.smallStyle(css`
    font-size: 16px;
    height: 70px;
  `)}
`
const Icon = styled.span``
