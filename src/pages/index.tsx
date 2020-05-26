import React from 'react'
import Helmet from 'react-helmet'

import { App } from '../components/App'
import { IndexPage } from '../components/pages'
import { IePage } from '../components/pages/ie'

const Index = () => {
  const ua = typeof window !== 'undefined' ? window.navigator.userAgent : null
  const isIe = ua ? ua.indexOf('msie') !== -1 : false

  return (
    <App>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Homemade+Apple&display=swap" rel="stylesheet" />
      </Helmet>

      {isIe ? <IePage /> : <IndexPage />}
    </App>
  )
}

export default Index
