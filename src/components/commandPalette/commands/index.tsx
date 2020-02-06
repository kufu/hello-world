import React from 'react'

import { Alert } from './Alert'
import { Console } from './Console'

export const commands = [
  {
    name: 'alert',
    component: <Alert />,
  },
  {
    name: 'console',
    component: <Console />,
  },
  {
    name: '1',
    component: <Alert />,
  },
  {
    name: '2',
    component: <Console />,
  },
  {
    name: '3',
    component: <Alert />,
  },
  {
    name: '4',
    component: <Console />,
  },
]
