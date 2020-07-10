import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Container } from './CssHelpers'

import IconArrow from './SvgIconArrow'

export default function Newsletter() {
  return (
    <Container css={(theme) => css`
        background-color: white;
        padding: 2.5rem ${theme.gutter};
        position: relative;
        z-index: 1;
        margin-bottom: -${theme.newsletterOffset}; // covers the footer
      `}>
      <h3 css={css`text-align: center;`}>Suscríbete a nuestro newsletter</h3>
      <form css={({ colors }) => css`
        border-bottom: 2px solid ${colors.blueDark};
        display: flex;
      `}>
        <input id='newsletter' type='text' placeholder='Escribe tu correo electrónico'
          css={theme => css`
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
          <IconArrow fill={useTheme().colors.pink} />
        </button>
      </form>
    </Container>
  )
}
