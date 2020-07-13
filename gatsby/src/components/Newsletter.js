import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

import { Container } from './CssHelpers'
import IconArrow from './SvgIconArrow'

// components =========================================
export default function Newsletter() {
  return (
    <Container css={theme => css`
        background-color: white;
        position: relative;
        z-index: 1;
        padding: 2.5rem ${theme.gutter};
        margin-bottom: -${theme.newsletterOffset};
      `}>
      <h3 css={css`text-align: center;`}>Suscríbete a nuestro newsletter</h3>
      <form css={theme => css`
        display: flex;
        max-width: 48rem;
        margin-left: auto;
        margin-right: auto;
        border-bottom: 2px solid ${theme.blueDark};
      `}>
        <input id='newsletter' type='text' placeholder='Escribe tu correo electrónico'
          css={css`
            outline: 0;
            border: none;
            padding: 0.8rem 0.5rem;
            flex-grow: 1;
          `}
        />
        <button type='submit' aria-label='Suscríbir a newsletter'
          css={css`
          background-color: transparent;
          svg {vertical-align: middle;}
        `}>
          <IconArrow fill={useTheme().pink} />
        </button>
      </form>
    </Container>
  )
}
