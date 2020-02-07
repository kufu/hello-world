import React from 'react'
import Helmet from 'react-helmet'

import { App } from '../components/App'
import { IndexPage } from '../components/pages'

const Index = () => (
  <App>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Homemade+Apple&display=swap" rel="stylesheet" />
    </Helmet>
    <IndexPage />
  </App>
)

export default Index
