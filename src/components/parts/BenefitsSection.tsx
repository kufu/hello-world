import React from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery, palette } from '../../themes'

import { SectionTitle } from './SectionTitle'
import { Picture } from './Picture'

export const BenefitsSection = () => (
  <Wrapper>
    <SectionTitle backgroundText="Benefits">Benefits</SectionTitle>

    <List>
      <Item>
        <ItemTitle>書籍購入支援</ItemTitle>
        <StyledPicture src="/images/benefits/benefits1.jpg" loading="lazy" alt="" />
        <ItemDescription>
          業務で必要な知識を得るための書籍の購入は、稟議不要で申請可能。Slack で Amazon のリンクを送るだけ。
        </ItemDescription>
      </Item>
      <Item>
        <ItemTitle>開発機材購入支援</ItemTitle>
        <StyledPicture src="/images/benefits/benefits2.jpg" loading="lazy" alt="" />
        <ItemDescription>
          最大10万円まで PC 周辺機材を購入可能。開発効率を上げるため、好奇心を満たすため、その使い道に制限は無し。
        </ItemDescription>
      </Item>
      <Item>
        <ItemTitle>勉強会参加支援</ItemTitle>
        <StyledPicture src="/images/benefits/benefits3.jpg" loading="lazy" alt="" />
        <ItemDescription>
          勉強会への参加費は会社負担。遠方の場合は、交通費および宿泊費も支援。業務として扱うため、休日の場合は振替休日を付与。
        </ItemDescription>
      </Item>
      <Item>
        <ItemTitle>4Kディスプレイ</ItemTitle>
        <StyledPicture src="/images/benefits/benefits4.jpg" loading="lazy" alt="" />
        <ItemDescription>
          4K ディスプレイを標準で配布。USB PD 対応で、MacBook に給電しながらデュアルディスプレイでの作業が可能。
        </ItemDescription>
      </Item>
      <Item>
        <ItemTitle>昼寝推奨</ItemTitle>
        <StyledPicture src="/images/benefits/benefits5.jpg" loading="lazy" alt="" />
        <ItemDescription>オフィスには昼寝スペース完備。好きな時間に利用可能。もちろん、自席での昼寝も可能。</ItemDescription>
      </Item>
      <Item>
        <ItemTitle>リモートワーク</ItemTitle>
        <StyledPicture src="/images/benefits/benefits6.jpg" loading="lazy" alt="" />
        <ItemDescription>
          情勢を踏まえて、現在は全員フルリモート体制で勤務。今後については絶賛検討中で、積極的にリモートワークを取り入れる予定。
        </ItemDescription>
      </Item>
    </List>

    <LinkButton href="https://speakerdeck.com/miyasho88/we-are-hiring?slide=38" target="_blank" rel="noopener noreferrer">
      その他の福利厚生
      <img src="/images/benefits/window_icon.svg" alt="外部サイトへのリンク" />
    </LinkButton>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
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
    width: 100%;
    max-width: 702px;
    margin-top: 59px;
    margin-right: auto;
  `)}

  ${mediaQuery.smallStyle(css`
    margin-top: 41px;
    justify-content: center;
  `)}
`
const Item = styled.li`
  width: 276px;
  margin-top: 27px;

  ${mediaQuery.mediumStyle(css`
    width: 223px;
  `)}

  ${mediaQuery.smallStyle(css`
    width: 315px;
  `)}
`
const StyledPicture = styled(Picture)`
  img {
    width: 100%;
  }
`
const ItemTitle = styled.p`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0.85px;
  margin-bottom: 26px;

  ${mediaQuery.smallStyle(css`
    font-size: 18px;
  `)}
`
const ItemDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2px;
  line-height: 24px;
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
  background-color: ${palette.BUTTON_BACKGROUND};
  align-items: center;
  justify-content: space-between;
  padding: 0 35.5px;
  color: ${palette.TEXT};
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0.85px;

  & > img {
    width: 24px;
  }

  ${mediaQuery.largeStyle(css`
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: rgba(21, 17, 17, 1);
    }
  `)}

  ${mediaQuery.mediumStyle(css`
    width: 100%;

    & > img {
      width: 20px;
    }
  `)}

  ${mediaQuery.smallStyle(css`
    font-size: 16px;
    height: 70px;

    & > img {
      width: 18px;
    }
  `)}
`
