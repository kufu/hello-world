import React from 'react'
import Helmet from 'react-helmet'

import { App } from '../components/App'
import { IndexPage } from '../components/pages'

const Index = () => (
  <App>
    <Helmet>
      <title>Engineer Recruiting | SmartHR</title>
      <meta property="og:title" content="SmartHR エンジニア採用" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hello-world.smarthr.co.jp" />
      <meta property="og:image" content="https://hello-world.smarthr.co.jp/images/ogp.png" />
      <meta property="og:site_name" content="Engineer Recruiting | SmartHR" />
      <meta
        property="og:description"
        content="2年連続シェアNo.1のクラウド人事労務ソフト「SmartHR」を開発しています。私たちはアナログな世界を、テクノロジーと創意工夫でもっとシンプル、かんたん、便利に変えていきます。歴史に残るソフトウェアを作ろう！"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/images/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon-180x180.png" />
      <link href="https://fonts.googleapis.com/css?family=Homemade+Apple&display=swap" rel="stylesheet" />
    </Helmet>
    <IndexPage />
  </App>
)

export default Index
