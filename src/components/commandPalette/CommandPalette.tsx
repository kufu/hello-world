import React, { FC, ReactNode, createContext, useEffect, useState } from 'react'
import Hotkeys from 'react-hot-keys'

import { includeElement, useHandleEscape } from './commandPaletteHelper'
import { CommandPaletteUI } from './CommandPaletteUI'

type Command = {
  name: string
  component: ReactNode
  overlay?: boolean
}

const CommandPaletteContext = createContext<Command[]>([])

export const CommandPaletteProvider: FC<{
  commands: Command[]
  children: ReactNode
}> = ({ commands, children }) => {
  const COMMAND_PALETTE_UI_CLASS = 'COMMAND_PALETTE_UI_CLASS'
  const [isActive, setIsActive] = useState(false)
  const [searchText, changeSearchText] = useState('')

  useHandleEscape(() => {
    setIsActive(false)
  })

  useEffect(() => {
    const onClickBody = (e: any) => {
      if (includeElement(e.target, COMMAND_PALETTE_UI_CLASS)) return
      setIsActive(false)
    }

    document.body.addEventListener('click', onClickBody, false)

    return () => {
      document.body.removeEventListener('click', onClickBody, false)
    }
  }, [])

  const handleChangeInput = (value: string) => {
    changeSearchText(value)
  }

  return (
    <CommandPaletteContext.Provider value={commands}>
      <Hotkeys
        keyName="command+shift+p"
        onKeyDown={(_, e) => {
          e.preventDefault()
          setIsActive(true)
        }}
      >
        {isActive && (
          <CommandPaletteUI
            commandNames={commands.map(({ name }) => name)}
            searchText={searchText}
            className={COMMAND_PALETTE_UI_CLASS}
            onChangeInput={handleChangeInput}
          />
        )}
      </Hotkeys>
      {children}
    </CommandPaletteContext.Provider>
  )
}
