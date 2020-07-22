import { css } from '@emotion/core'

export default function CssModernReset() {
  return css`
    * {
      /* works only on macOs, but really makes a difference */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    /* custom color hightlight */
    /* ::-moz-selection { color: white; background: #0f62fe; } */
    /* ::selection { color: white; background: #0f62fe; } */
    a {
      text-decoration: none;
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
    svg {
      button > & {
        display: initial;
      }
    }
    address {
      margin-bottom: 0;
      font-style: normal;
    }
  `
}
