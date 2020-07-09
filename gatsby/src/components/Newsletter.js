import React from 'react'
import { useTheme } from 'emotion-theming'
import { Container } from './CssHelpers'
import IconArrow from './SvgIconArrow'

export default function Newsletter() {
  return (
    <Container>
      <h4>Suscríbete a nuestro newsletter</h4>
      <form>
        <input id='newsletter' type='text'
          placeholder='Escribe tu correo electrónico' />
        <button type='submit' aria-label='Suscríbir a newsletter'>
          <IconArrow fill={useTheme().colors.pink} />
        </button>
      </form>
    </Container>
  )
}
