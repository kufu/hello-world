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
        <title>Engineer Recruiting | SmartHR</title>
        <meta
          name="description"
          content="2年連続シェアNo.1のクラウド人事労務ソフト「SmartHR」を開発しています。私たちはアナログな世界を、テクノロジーと創意工夫でもっとシンプル、かんたん、便利に変えていきます。歴史に残るソフトウェアを作ろう！"
        />
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
        <meta name="twitter:title" content="SmartHR エンジニア採用" />
        <meta name="twitter:site" content="@SmartHR_jp" />
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon-180x180.png" />
        <link href="https://fonts.googleapis.com/css?family=Homemade+Apple&display=swap" rel="stylesheet" />
      </Helmet>

      {isIe ? <IePage /> : <IndexPage />}
    </App>
  )
}

export default Index
