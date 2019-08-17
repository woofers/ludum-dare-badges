
import React from 'react'
import { css, Global } from '@emotion/core'

const style = css`
  body {
    background: #3d4752;
  }

  body, h1, h2, h3, h4, h5, h6 {
    color: #d0d0d8;
  }

  a {
    color: #ffa500;
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
