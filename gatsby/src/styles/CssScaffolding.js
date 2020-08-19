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
    /* use aria-label instead */
    .screen-reader-text {
      clip: rect(1px, 1px, 1px, 1px);
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
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
    .body,
    p {
      font-size: 1rem;
      line-height: 1.5;
    }
    .body2 {
      font-size: 1.125rem;
    }
    .legal {
      font-size: 0.875rem;
    }
    .h-big {
      font-size: 3rem;
      line-height: 1.312;
    }
    .title {
      font-size: 2.5rem;
      line-height: 1.325;
    }
    .title2 {
      font-size: 2rem;
      line-height: 1.375;
    }
    .subtitle {
      font-size: 1.5rem;
      line-height: 1.375;
    }
  `
}
