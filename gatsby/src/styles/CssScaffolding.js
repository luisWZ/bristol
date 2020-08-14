import { css } from '@emotion/core'
// import theme from './CssVariables'

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
    .h1 {
      font-size: 2.25rem;
      line-height: 3rem;
    }
    .h2 {
      font-size: 1.83712rem;
      line-height: 2.25rem;
    }
    .h3 {
      font-size: 1.5rem;
      line-height: 2.25rem;
    }
    .h4 {
      font-size: 1.14471rem;
      line-height: 1.5rem;
    }
    .h5 {
      font-size: 0.87358rem;
      line-height: 1.5rem;
    }
    .h6 {
      font-size: 0.76314rem;
      line-height: 1.5rem;
    }
    /* use aria-label instead */
    .screen-reader-text {
      clip: rect(1px, 1px, 1px, 1px);
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
    }
  `
}
