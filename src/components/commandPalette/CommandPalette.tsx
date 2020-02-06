import React, { FC, ReactNode, createContext, useState } from 'react'
import Hotkeys from 'react-hot-keys'

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
  const [isActive, setIsActive] = useState(false)

  return (
    <CommandPaletteContext.Provider value={commands}>
      <Hotkeys
        keyName="command+shift+p"
        onKeyDown={(_, e) => {
          e.preventDefault()
          setIsActive(true)
        }}
      >
        {isActive && <CommandPaletteUI />}
      </Hotkeys>
      {children}
    </CommandPaletteContext.Provider>
  )
}
