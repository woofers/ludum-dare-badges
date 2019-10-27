import React from 'react'
import Icon from '@material-ui/core/Icon'
import { css } from '@emotion/core'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const icon = css`
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: 10px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 12%;
  width: 50px;
  height: 58px;
  padding: 0;
  > div {
    position: relative;
    .MuiIcon-root {
      transition: 0.3s cubic-bezier(0.7,0,0.3,1);
      position: absolute;
      top: -13px;
      right: 9px;
      font-size: 28px;
      color: #fff;
    }
  }
  &:disabled {
    cursor: auto;
    > div {
      .MuiIcon-root {
        color: #a5a5ab;
      }
    }
  }
  &:focus {
    > div {
      .MuiIcon-root {
        color: #ffa500;
      }
    }
  }
`

const Copy = p => (
  <CopyToClipboard text={p.value}>
    <button disabled={p.disabled} type="button" title="Copy to clipboard" css={icon}>
      <div>
        <Icon aria-hidden={false}>file_copy</Icon>
      </div>
    </button>
  </CopyToClipboard>
)

Copy.defaultProps = {
  value: 'Copied from button'
}

export default Copy
