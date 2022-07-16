import React, { FC, ReactNode, createContext, useEffect, useState } from 'react'
import Hotkeys from 'react-hot-keys'

import { includeElement, useHandleEscape } from './commandPaletteHelper'
import { CommandPaletteUI } from './CommandPaletteUI'

type Command = {
  name: string
  component: ReactNode
}

type CommandPaletteContextType = {
  commandList: Command[]
  currentCommand: Command | null
}
export const CommandPaletteContext = createContext<CommandPaletteContextType>({
  commandList: [],
  currentCommand: null,
})

export const CommandPaletteProvider: FC<{
  commands: Command[]
  children: ReactNode
}> = ({ commands, children }) => {
  const COMMAND_PALETTE_UI_CLASS = 'COMMAND_PALETTE_UI_CLASS'
  const [isActive, setIsActive] = useState(false)
  const [searchText, changeSearchText] = useState('')
  const [currentCommand, setCommand] = useState<Command | null>(null)
  const matchCommans = commands.filter(command => command.name.includes(searchText))

  const removeCommandPalette = () => {
    setIsActive(false)
    changeSearchText('')
  }

  useHandleEscape(() => removeCommandPalette())

  useEffect(() => {
    const onClickBody = (e: any) => {
      if (includeElement(e.target, COMMAND_PALETTE_UI_CLASS)) return
      removeCommandPalette()
    }

    document.body.addEventListener('click', onClickBody, false)

    return () => {
      document.body.removeEventListener('click', onClickBody, false)
    }
  }, [])

  const handleChangeInput = (value: string) => {
    changeSearchText(value)
  }

  const handleSelectCommand = (commandIndex: number) => {
    if (matchCommans[commandIndex]) {
      setCommand(matchCommans[commandIndex])
      removeCommandPalette()
    }
  }

  return (
    <CommandPaletteContext.Provider
      value={{
        commandList: commands,
        currentCommand: currentCommand,
      }}
    >
      <Hotkeys
        keyName="command+shift+p, ctrl+shift+p"
        onKeyDown={(_, e) => {
          e.preventDefault()
          setCommand(null)
          setIsActive(true)
        }}
      >
        {isActive && (
          <CommandPaletteUI
            commandNames={matchCommans.map(({ name }) => name)}
            searchText={searchText}
            className={COMMAND_PALETTE_UI_CLASS}
            onChangeInput={handleChangeInput}
            onSelectCommand={handleSelectCommand}
          />
        )}
      </Hotkeys>
      {children}
    </CommandPaletteContext.Provider>
  )
}
