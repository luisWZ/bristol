import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import SocialLinks from './SocialLinks'
import SvgCambridgeLogo from './SvgCambridgeLogo'
import SvgFooterBrand from './SvgFooterBrand'

const color = 'white'

export default function Footer() {
  return (
    <footer css={theme => css`background-color: ${theme.colors.bristolBlue};`}>
      <div>
        <div>
          <SvgFooterBrand fill={color} />
          <SvgCambridgeLogo fill={color} />
        </div>
        <div>
          <h4>Mapa del sitio</h4>
          <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/centro-examinador'>Centro examinador</Link></li>
              <li><Link to='/nosotros'>Nosotros</Link></li>
              <li><Link to='/contacto'>Contacto</Link></li>
              <li><Link to='/cursos'>Cursos generales</Link></li>
              <li><Link to='/'>Aviso de privacidad</Link></li>
              <li><Link to='/examenes'>Exámenes internacionales</Link></li>
          </ul>
        </div>
      </div>
      <div css={theme => css`background-color: ${theme.colors.blueLight};`}>
        <p>Bristol Inglés Profesional ©{new Date().getFullYear()}</p>
        <SocialLinks css={css`svg { fill: ${color}; }`} />
      </div>
    </footer>
  )
}
