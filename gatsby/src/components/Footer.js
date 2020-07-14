import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import { AiOutlineRight } from 'react-icons/ai';
import SocialLinks from './SocialLinks'
import SvgCambridgeLogo from './SvgCambridgeLogo'
import { Container } from './CssHelpers'
import SvgFooterBrand from './SvgFooterBrand'

const Li = props => (
  <li
  css={theme => css`
    svg { display: none; }

    @media (${theme.min768}) { order: ${props.order}; }
    @media(${theme.max768}) {
      a {
        position: relative;
      }
      svg {
        display: block;
        position: absolute;
        width: 1.25rem;
        right: 1.25rem;
        font-size: 1.25rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  `}
  {...props} />
)

export default function Footer() {
  return (
    <footer css={theme => css`
      background-color: ${theme.bristolBlue};
      padding-top: ${theme.newsletterOffset};
      * {
        color: white;
      }
    `}>
      <Container css={theme => css`
        @media (${theme.min640}) {
          display: flex;
        }
      `}>
        <div css={theme => css`
          margin: 3rem ${theme.gutter};
          display: inline-block;
          max-width: 360px;
          width: 72vw;

          @media (${theme.min640}) {
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
          @media (${theme.min640}) {
            padding-top: 6rem;
            flex-grow: 1;
            h4 { padding-left: 0; }
            a { padding: 0.8rem 0; }
          }
          @media (${theme.min768}) {
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
          <ul css={theme => css`
            @media (${theme.min768}) {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            }
          `}>
              <Li order='1'>
                <Link to='/'>Home
                <AiOutlineRight /></Link></Li>
              <Li order='3'>
                <Link to='/nosotros'>Nosotros
                <AiOutlineRight /></Link></Li>
              <Li order='5'>
                <Link to='/cursos'>Cursos generales
                <AiOutlineRight /></Link></Li>
              <Li order='7'>
                <Link to='/examenes'>Exámenes internacionales
                <AiOutlineRight /></Link></Li>
              <Li order='2'>
                <Link to='/centro-examinador'>Centro examinador
                <AiOutlineRight /></Link></Li>
              <Li order='4'>
                <Link to='/contacto'>Contacto
                <AiOutlineRight /></Link></Li>
              <Li order='6'>
                <Link to='/'>Aviso de privacidad
                <AiOutlineRight /></Link></Li>
          </ul>
        </div>
      </Container>
      <div css={theme => css`
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: start;
        padding: 0.8rem ${theme.gutter} 0;
        background-color: ${theme.blueLight};

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
