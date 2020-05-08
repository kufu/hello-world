import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { mediaQuery } from '../../themes'

type Props = {
  backgroundText: string
  children: string
}

export const SectionTitle: FC<Props> = ({ children, backgroundText }) => (
  <Title backgroundText={backgroundText}>
    <span>{children}</span>
  </Title>
)

const Title = styled.h2<{ backgroundText: string }>`
  ${({ backgroundText }) => css`
    color: #fff;
    font-size: 26px;
    padding-left: 102px;
    position: relative;
    transform: translateX(-102px);

    ${mediaQuery.mediumStyle(css`
      padding-left: 40px;
      transform: translateX(-35px);
      font-size: 36px;
    `)}

    ${mediaQuery.smallStyle(css`
      padding-left: 20px;
      transform: translateX(-20px);
    `)}

    > span {
      z-index: 1;
      position: relative;
    }

    &::before {
      content: '';
      display: block;
      background: #797979;
      height: 2px;
      width: 93px;
      margin-bottom: 5px;
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      left: 0;

      ${mediaQuery.mediumStyle(css`
        width: 30px;
      `)}

      ${mediaQuery.smallStyle(css`
        width: 15px;
      `)}
    }

    &::after {
      content: '${backgroundText}';
      font-family: 'Homemade Apple', cursive;
      color: #fff;
      position: absolute;
      z-index: 0;
      white-space: pre;
      font-size: 100px;
      left: 20px;
      top: -56px;
      z-index: 0;
      opacity: 0.4;
      transform: rotate(-7deg);

      ${mediaQuery.mediumStyle(css`
        left: 30px;
        top: -72px;
      `)}

      ${mediaQuery.smallStyle(css`
        font-size: 50px;
        left: 15px;
        top: -40px;
      `)}
    }
  `}
`
