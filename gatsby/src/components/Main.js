import React from 'react'
import { css } from '@emotion/core'

export default function Main(props) {
  return (
    <main
      css={theme => css`
        background-color: ${theme.colors.bgGrayLight};
        padding-top: 90px;
      `}
      {...props}
    />
  )
}
