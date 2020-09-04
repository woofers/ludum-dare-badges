import React from 'react'
import { css } from '@emotion/core'

const style = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Form = p => (
  <form css={style}>
    {p.children}
  </form>
)

export default Form
