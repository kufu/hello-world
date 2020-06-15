import React from 'react'

import { AoyagiRun } from './AoyagiRun'
import { MiyashoGero } from './MiyashoGero'
import { Glitch } from './Glitch'
import { StarryNight } from './StarryNight'

export const commands = [
  {
    name: 'aoyagi run',
    component: <AoyagiRun />,
  },
  {
    name: 'miyasho gero',
    component: <MiyashoGero />,
  },
  {
    name: 'glitch',
    component: <Glitch />,
  },
  {
    name: 'starry night',
    component: <StarryNight />,
  },
]
