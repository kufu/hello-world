import React from 'react'

export const IePage = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#fff',
      color: '#646464',
      font: 'normal 64px/63px Helvetica, Arial, sans-serif',
      textAlign: 'center',
    }}
  >
    <div>
      <p style={{ marginBottom: '20px' }}>
        あなたと Chrome,
        <br />
        今すぐダウンロー
        <br />ド
      </p>

      <a
        href="https://www.google.com/intl/ja_jp/chrome/"
        title="無料Chromeのダウンロード"
        style={{
          display: 'block',
          width: '244px',
          margin: '0 auto',
          borderRadius: '6px',
          border: '1px solid #e99c98',
          background: 'linear-gradient(#ecadaa, #d23019)',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '14px',
          lineHeight: '47px',
        }}
      >
        無料Chromeのダウンロード
      </a>

      <p
        style={{
          marginTop: '20px',
          fontSize: '14px',
          lineHeight: '1.4',
        }}
      >
        ※このページは SmartHR のエンジニア採用サイトです。
        <br />
        Internet Explorer には対応していません。
      </p>
    </div>
  </div>
)
