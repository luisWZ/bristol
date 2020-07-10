import { css } from '@emotion/core'

export default function CssModernReset() {
  return css`
    * {
      /* works only on macOs, but really makes a difference */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    a {
      text-decoration: none;
    }
    /* Dynamic size for titles */
    h1 {
      font-size: calc(1.8rem + 0.6vw);
    }
    h3 {
      font-size: calc(1.4rem + 0.5vw);
    }
    /* Remove list styles on ul, ol elements with a class attribute */
    /* Remove default padding */
    ul,
    ol {
      padding: 0;
      list-style: none;
    }
    /* Make images easier to work with */
    img,
    svg {
      max-width: 100%;
      height: auto;
      display: block;
    }
    address {
      margin-bottom: 0;
      font-style: normal;
    }
  `
}
