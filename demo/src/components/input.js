import React, { useRef } from 'react'
import TextField from '@material-ui/core/TextField'
import { css } from '@emotion/core'

const style = css`
  margin-right: 2px;
  margin-left: 2px;

  input[type='number'] {
    -moz-appearance: textfield;
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .MuiFormLabel-root {
    color: #fff;
  }
  .Mui-focused {
    color: #ffa500 !important;
    fieldset {
      border-color: #ffa500 !important;
    }
  }
  .MuiInputBase-root {
    color: #fff;
    fieldset {
      border-color: #fff;
    }
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: #fff !important;
  }
  .Mui-disabled {
    color: #a5a5ab !important;
    fieldset {
      border-color: #a5a5ab !important;
    }
  }
`

const Input = p => {
  const width = css`
    max-width: ${p.width};
  `
  const { only, set, ...rest } = p
  const ref = useRef()
  const setValue = value => ref.current.value = value
  const removeNumber = event => {
    const { value } = event.target
    const max = value.length - 1
    const last = value.charAt(max)
    if (!isNaN(last)) return
    setValue(value.substring(0, max))
  }
  const handleChange = event => {
    if (only === 'number') removeNumber(event)
    p.onChange(event)
    set(event.target.value)
  }
  return (
    <div css={[style, width]}>
      <TextField
        {...rest}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        inputRef={ref}
      />
    </div>
  )
}

Input.defaultProps = {
  width: 'none',
  onChange: () => {},
  set: () => {}
}

export default Input
