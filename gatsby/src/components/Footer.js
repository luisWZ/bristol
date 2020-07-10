import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import SocialLinks from './SocialLinks'
import SvgCambridgeLogo from './SvgCambridgeLogo'
import SvgFooterBrand from './SvgFooterBrand'

const mqMin640 = 'min-width: 40em'
const mqMin768 = 'min-width: 48em'

export default function Footer() {
  return (
    <footer css={theme => css`
      background-color: ${theme.colors.bristolBlue};
      padding-top: ${theme.newsletterOffset};
      * {
        color: white;
      }
    `}>
      <div css={css`
        @media (${mqMin640}) {
          display: flex;
        }
      `}>
        <div css={theme => css`
          margin: 3rem ${theme.gutter};
          display: inline-block;
          max-width: 360px;
          width: 72vw;

          @media (${mqMin640}) {
            margin-right: 0;
            padding-right: 5rem;
          }
          svg { &:first-of-type { margin-bottom: 2rem; width: 100%; + svg { width: 65%; } } }
        `}>
          <SvgFooterBrand fill='white' />
          <SvgCambridgeLogo fill='white' />
        </div>
        <div css={theme => css`
          padding-bottom: ${theme.gutter};
          li:first-of-type a { border-top: none; }
          a {
              padding: ${theme.gutter};
              display: block;
              border-top: 1px solid white;
              @media (min-width: 25em) {
                padding: 1rem;
              }
            }
          @media (${mqMin640}) {
            padding-top: 6rem;
            flex-grow: 1;
            h4 { padding-left: 0; }
            a { padding: 0.8rem 0; }
          }
          @media (${mqMin768}) {
            flex: 0 23rem;
            a {
              width: 10.5rem;
              border-top: none;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            }
          }
        `}>
          <h4 css={theme => css`
            padding-left: ${theme.gutter};
            margin-bottom: 1rem;
          `}>Mapa del sitio</h4>
          <ul css={css`
            @media (${mqMin768}) {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            }
          `}>
              <li css={css`@media (${mqMin768}) { order:1; }`}><Link to='/'>Home</Link></li>
              <li css={css`@media (${mqMin768}) { order:3; }`}><Link to='/nosotros'>Nosotros</Link></li>
              <li css={css`@media (${mqMin768}) { order:5; }`}><Link to='/cursos'>Cursos generales</Link></li>
              <li css={css`@media (${mqMin768}) { order:7; }`}><Link to='/examenes'>Exámenes internacionales</Link></li>
              <li css={css`@media (${mqMin768}) { order:2; }`}><Link to='/centro-examinador'>Centro examinador</Link></li>
              <li css={css`@media (${mqMin768}) { order:4; }`}><Link to='/contacto'>Contacto</Link></li>
              <li css={css`@media (${mqMin768}) { order:6; }`}><Link to='/'>Aviso de privacidad</Link></li>
          </ul>
        </div>
      </div>
      <div css={theme => css`
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: start;
        padding: 0.8rem ${theme.gutter} 0;
        background-color: ${theme.colors.blueLight};

        @media(min-width: 370px) {
          flex-direction: row;
          align-items: center;
          padding-top: 0;
        }
      `}>
        <address>Bristol Inglés Profesional ©{new Date().getFullYear()}</address>
        <SocialLinks css={css`
          a {
            padding: 1rem;
          }
          svg {
            fill: white;
            width: 1.2rem;
          }
        `} />
      </div>
    </footer>
  )
}
