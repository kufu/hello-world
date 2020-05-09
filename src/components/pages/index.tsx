import React, { useContext } from 'react'
import styled, { css } from 'styled-components'

import { mediaQuery } from '../../themes'
import { CommandPaletteContext } from '../commandPalette'

import { EyeCatch } from '../parts/EyeCatch'
import { MessageSection } from '../parts/MessageSection'
import { AboutSection } from '../parts/AboutSection'
import { TechnologyStackSection } from '../parts/TechnologyStackSection'
import { MembersVoiceSection } from '../parts/MembersVoiceSection'
import { WelfareSection } from '../parts/WelfareSection'
import { EntrySection } from '../parts/EntrySection'
import { Footer } from '../parts/Footer'
import { EyeCatchEffects } from '../parts/EyeCatchEffects'

export const IndexPage = () => {
  const { currentCommand } = useContext(CommandPaletteContext)

  return (
    <Wrapper>
      {currentCommand && currentCommand.component}

      <EyeCatchEffects />

      <Contents>
        <EyeCatch />

        <Sections>
          <MessageSection />
          <AboutSection />
          <TechnologyStackSection />
          <MembersVoiceSection />
          <WelfareSection />
          <EntrySection />
        </Sections>

        <Footer />
      </Contents>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`
const Contents = styled.div`
  position: relative;
`
const Sections = styled.div`
  max-width: 1160px;
  margin: 0 auto;

  ${mediaQuery.mediumStyle(css`
    padding: 0 35px;
  `)}
  ${mediaQuery.smallStyle(css`
    padding: 0 20px;
  `)}
`
