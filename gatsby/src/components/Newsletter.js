import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

import { Container, title } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'
import IconArrow from './Svg/SvgIconArrow'

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
      <Title2 css={title}>Suscríbete a nuestro newsletter</Title2>
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
