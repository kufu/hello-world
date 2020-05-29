import React from 'react'

import { AoyagiRun } from './AoyagiRun'
import { MiyashoGero } from './MiyashoGero'

export const commands = [
  {
    name: 'aoyagi run',
    component: <AoyagiRun />,
  },
  {
    name: 'miyasho gero',
    component: <MiyashoGero />,
  },
]
