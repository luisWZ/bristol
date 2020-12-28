import { css } from '@emotion/react'

export default function CssModernReset() {
  return css`
    /* https://github.com/hankchizljaw/modern-css-reset */
    /* Box sizing rules */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    /* Remove default margin */
    body,
    /* h1, */
    /* h2, */
    /* h3, */
    /* h4, */
    /* p, */
    img,
    ul,
    ol,
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
      margin: 0;
    }
    /* Set core body defaults */
    body {
      min-height: 100vh;
      scroll-behavior: smooth;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
    }
    /* A elements that don't have a class get default styles */
    a:not([class]) {
      text-decoration-skip-ink: auto;
    }
    /* Natural flow and rhythm in articles by default */
    article > * + * {
      margin-top: 1em;
    }
    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
      font: inherit;
    }
    /* Remove all animations and transitions for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
  `
}
