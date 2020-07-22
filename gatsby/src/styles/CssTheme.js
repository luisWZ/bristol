import React from 'react'
import { Global, css } from '@emotion/core'

export default function CssTheme() {
  return (
    <Global styles={theme => css`
      /* custom color hightlight */
      ::-moz-selection { color: white; background: ${theme.blueLight}; }
      ::selection { color: white; background: ${theme.blueLight}; }

      /* Dynamic size for titles */
      h1 {
        font-size: calc(1.8rem + 0.6vw);
      }
      h3 {
        font-size: calc(1.4rem + 0.5vw);
      }
      a {
        display: inline-block;
        transition: all 0.26s ease-in-out;
        color: ${theme.gray};
      }
      button {
        outline: 0;
        border: none;
        color: white;
        cursor: pointer;
        background-color: ${theme.bristolBlue};
        transition: background-color .26s ease-in-out;
      }
  `}/>
  )
}
