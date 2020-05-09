import React, { FC, ReactNode, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery } from '../../themes'

type Props = {
  title: string
  children: ReactNode
}

export const Accordion: FC<Props> = ({ title, children }) => {
  const [isActive, setIsActive] = useState('')
  const [height, setHeightState] = useState(0)

  const content = useRef<HTMLElement>(null)

  const toggleAccordion = () => {
    setIsActive(isActive === '' ? 'active' : '')
    if (content.current) {
      setHeightState(isActive === 'active' ? 0 : content.current.scrollHeight)
    }
  }

  return (
    <AccordionWrapper onClick={toggleAccordion}>
      <AccordionTitle className={isActive}>{title}</AccordionTitle>
      <AccordionContent ref={content} height={height}>
        {children}
      </AccordionContent>
    </AccordionWrapper>
  )
}

const AccordionWrapper = styled.dl`
  border: 1px solid #4e4e4e;
  border-radius: 6px;
  background-color: rgba(21, 17, 17, 0.52);
  transition: background-color 0.2s ease;
`

const AccordionTitle = styled.dt`
  color: #d3d3d3;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 40px;
  padding: 30px;
  position: relative;
  cursor: pointer;

  &::after {
    position: absolute;
    content: '';
    width: 7px;
    height: 7px;
    border-top: solid 2px #d3d3d3;
    border-right: solid 2px #d3d3d3;
    transform: rotate(135deg);
    top: 50%;
    right: 30px;
    margin-top: -3px;
  }

  &.active {
    &::after {
      transform: rotate(-45deg);
    }
  }

  ${mediaQuery.mediumStyle(css`
    padding: 25px;
  `)}

  ${mediaQuery.smallStyle(css`
    font-size: 16px;
    padding: 15px;

    &::after {
      right: 14px;
      margin-top: -6px;
    }
  `)}
`

const AccordionContent = styled.dd<{ height: number }>`
  overflow: hidden;
  transition: max-height 0.4s ease;
  ${({ height }) => {
    return css`
      max-height: ${height}px;
    `
  }}
`
