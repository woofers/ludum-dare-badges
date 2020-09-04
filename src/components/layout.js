
import React from 'react'
import { css, Global } from '@emotion/core'

const style = css`
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  body {
    background: #3d4752;
  }

  body, h1, h2, h3, h4, h5, h6 {
    color: #d0d0d8;
  }

  h1 {
    color: #ffa500;
  }

  h4 {
    font-style: italic;
  }

  a {
    color: #ffa500;
  }

  ::selection {
    color: #fff;
    background: rgba(255, 165, 0, 0.85);
  }

  ::-moz-selection {
    color: #fff;
    background: rgba(255, 165, 0, 0.85);
  }

  img::selection {
    background: rgba(255, 165, 0, 0.25);
  }

  img::-moz-selection {
    background: rgba(255, 165, 0, 0.25);
  }
`

const Layout = ({ children }) => {
  return (
    <div>
      <Global styles={style} />
      <div
        style={{
          margin: `50px auto 0`,
          maxWidth: 960,
          padding: `0px 1rem`,
          textAlign: 'center',
          paddingTop: 0
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
