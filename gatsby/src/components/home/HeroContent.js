import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { Container, Button } from '../CssHelpers'
import imgHero from '../../images/home-temporal.webp'

export default function HeroContent() {
  return (
    <section
      css={css`
        background-color: white;
        min-height: calc(100vh - 90px);
        max-height: 900px;
        display: flex;
      `}
    >
      <Container as='div'
        css={css`
          padding-top: 2rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-around;
        `}
      >
        <div css={css`flex-basis: 45%;`}>
          <h1 css={css`font-size: 2.8rem; line-height: 1.25; letter-spacing: 1.4px;`}>Speak a new language, discover a new world</h1>
          <p css={css`font-size: 1.25rem; line-height: 1.6; margin: 2rem 0;`}>
            Somos profesionales en la enseñanza de inglés nuestros maestros
            cuentan con grados académicos y certificaciones internacionales como
            maestros de inglés así como con una gran experiencia
          </p>
          <Button as={Link} to='/cursos'>Nuestros cursos</Button>
        </div>
        <img src={imgHero} alt='Persona estudiando inglés'
          css={css` max-width: 40%; `}
        />
      </Container>
    </section>
  )
}
