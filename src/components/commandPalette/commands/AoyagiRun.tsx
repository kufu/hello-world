import React from 'react'
import styled, { keyframes } from 'styled-components'

export const AoyagiRun = () => {
  return <Image src="/images/commands/aoyagi-run/aoyagisan.png" width={200} alt="アオヤギさん" />
}

const horizontalMove = keyframes`
  0% {
    left: -400px;
  }

  100% {
    left: 100%;
  }
`
const verticalMove = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
`
const Image = styled.img`
  z-index: 100;
  position: fixed;
  top: 50%;
  animation: ${horizontalMove} 2s linear forwards, ${verticalMove} 0.2s infinite;
`
