import React from 'react'
import Text from './text'
import { css } from '@emotion/core'

const style = css`
  padding: 18.5px 0px;
  margin-top: 8px;
  margin-bottom: 8px;
  h6 {
    font-size: 1rem;
  }
`

const Placeholder = p => (
  <div css={style}>
    <Text variant="h6">
      {p.children}
    </Text>
  </div>
)

export default Placeholder
