import React from 'react'
import { css } from '@emotion/core'
import Input from './input'
import MenuItem from '@material-ui/core/MenuItem'

const menu = css`
  width: 200px;
`

const Select = p => {
  return (
    <Input
      {...p}
      select
      label="Type"
      margin="normal"
      variant="filled"
    >
      {p.options.map(option => (
        <MenuItem css={menu} key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Input>
  )
}

Select.defaultProps = {
  options: []
}

export default Select
