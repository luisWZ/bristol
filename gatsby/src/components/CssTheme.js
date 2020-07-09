import React from 'react'
import { Global, css } from '@emotion/core'

export default function CssTheme() {
  return (
    <Global styles={theme => css`
      a,
      a:visited {
        color: ${theme.colors.black};
      }
    `} />
  )
}
