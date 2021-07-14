import React, { FC, useContext } from 'react'
import styled, { css, keyframes } from 'styled-components'

import { isMediumWindow, mediaQuery } from '../../themes'
import { useStoredScroll } from '../hooks/useStoredScroll'
import { useWebp } from '../hooks/useWebp'
import { ImageEffectContext } from '../commandPalette/commands/ImageEffect'

export const EyeCatchEffects: FC = () => {
  const height = typeof window !== 'undefined' ? window.innerHeight : 1
  const { y } = useStoredScroll()
  const visible = y < height / 2
  const supportsWebp = useWebp()
  const { baseCanvasRef, targetCanvasRef } = useContext(ImageEffectContext)

  return (
    <>
      <Underlay supportsWebp={supportsWebp} />
      <BaseCanvas ref={baseCanvasRef} />
      <TargetCanvas ref={targetCanvasRef} />
      <UnderlayCover visible={visible} />
      <ScrollIcon visible={visible}>SCROLL</ScrollIcon>
    </>
  )
}

const scroll = keyframes`
  0%,
  30% {
    bottom: ${isMediumWindow() ? 59 : 80}px;
    height: 0px;
  }

  60%,
  70% {
    bottom: 0px;
    height: ${isMediumWindow() ? 59 : 80}px;
  }

  100% {
    bottom: 0px;
    height: 0px;
  }
`

const Underlay = styled.div<{ supportsWebp: boolean | null }>`
  ${({ supportsWebp }) => {
    return css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;

      ${supportsWebp === null
        ? ``
        : supportsWebp
        ? `background-image: url(/images/mv.webp);`
        : `background-image: url(/images/mv.png);`}
      background-size: cover;
      background-position: top;

      ${mediaQuery.smallStyle(css`
        ${supportsWebp === null
          ? ``
          : supportsWebp
          ? `background-image: url(/images/mv_sp.webp);`
          : `background-image: url(/images/mv_sp.png);`}
      `)}
    `
  }}
`
const BaseCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`
const TargetCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`
const UnderlayCover = styled.div<{ visible: boolean }>`
  ${({ visible }) => {
    return css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: #000;
      opacity: ${visible ? 0 : 0.6};
      transition: opacity 0.3s ease-in-out;
    `
  }}
`
const ScrollIcon = styled.div<{ visible: boolean }>`
  ${({ visible }) => {
    return css`
      visibility: ${visible ? 'visible' : 'hidden'};
      opacity: ${visible ? 1 : 0};
      position: fixed;
      bottom: 0;
      left: 50%;
      font-size: 10px;
      height: 104px;
      color: #e1e1e1;
      transform: translateX(-50%);
      transition: all 0.3s ease-in-out;

      &::before {
        display: block;
        bottom: 0;
        content: '';
        position: absolute;
        width: 1px;
        height: 80px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #797979;
      }

      &::after {
        display: block;
        bottom: 56px;
        content: '';
        position: absolute;
        width: 2px;
        height: 0px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #ebebeb;
        animation: ${scroll} 2s infinite;
      }

      ${mediaQuery.mediumStyle(css`
        height: 83px;

        &::before {
          height: 59px;
        }

        &::after {
          bottom: 35px;
        }
      `)}
    `
  }}
`
