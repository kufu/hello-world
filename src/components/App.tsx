import React, { FC, ReactNode } from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { CommandPaletteProvider, commands } from './commandPalette'

export const App: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <GlobalStyle />
    <CommandPaletteProvider commands={commands}>{children}</CommandPaletteProvider>
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

  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    vertical-align: middle;
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
