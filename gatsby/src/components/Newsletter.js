import React from 'react'
import { Container } from './CssHelpers'
import IconArrow from './SvgIconArrow'

export default function Newsletter() {
  return (
    <Container>
      <h4>Suscríbete a nuestro newsletter</h4>
      <form>
        {/* <label for="newsletter">Email</label> */}
        <input id='newsletter' type='text'
          placeholder='Escribe tu correo electrónico' />
        <button type='submit' aria-label='Suscríbir a newsletter'>
          <IconArrow fill='#FA4D56' />
        </button>
      </form>
    </Container>
  )
}
