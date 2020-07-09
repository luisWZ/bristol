import React from 'react'
import { Global, css } from '@emotion/core'

export default function CssTheme() {
  return (
    <Global
      styles={theme => css`
        a {
          display: inline-block;
          transition: all 0.26s ease-in-out;
          color: ${theme.colors.gray};
        }

        button {
          outline: 0;
          border: none;
          color: white;
          cursor: pointer;
          background-color: ${theme.colors.bristolBlue};
          transition: background-color .26s ease-in-out;
        }

        main {
          > img,
          > section:not(:first-of-type) {
            margin-top: 5rem;
          }
        }
      `}
    />
  )
}
