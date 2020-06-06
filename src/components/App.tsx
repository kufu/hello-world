import React, { FC, ReactNode } from 'react'
import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

import { mediaQuery, palette } from '../themes'
import { CommandPaletteProvider, commands } from './commandPalette'
import { ImageEffectProvider } from './commandPalette/commands/ImageEffect'

export const App: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <GlobalStyle />
    <CommandPaletteProvider commands={commands}>
      <ImageEffectProvider>{children}</ImageEffectProvider>
    </CommandPaletteProvider>
  </>
)

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 62.5%;
  }
  body {
    word-wrap: break-word;
    font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "メイリオ", sans-serif;
    background-color: black;
    color: ${palette.TEXT}
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    vertical-align: middle;

    ${mediaQuery.mediumStyle(css`
      width: 100%;
    `)}
  }
  input, button, textarea {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    background-color: inherit;
    color: inherit;
  }
`
