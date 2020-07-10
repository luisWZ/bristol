import { css } from '@emotion/core'

export default function CssModernReset() {
  return css`
    * {
      /* works only on macOs, but really makes a difference */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    address {
      margin-bottom: 0;
      font-style: normal;
    }
    a {
      text-decoration: none;
    }
    img,
    svg {
      height: auto;
    }
    svg {
      max-width: 100%;
      display: block;
    }
  `
}
