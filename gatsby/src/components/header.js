import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import SvgBristolLogo from '../assets/svgs/bristol-logo'
import SvgInglesMuyIngles from '../assets/svgs/ingles-muy-ingles'
import SvgEnvelope from '../assets/svgs/envelope-svg'
import SvgPhone from '../assets/svgs/phone-svg'

// CSS Styles =========================================
const height = `2.5rem`

const contactAnchor = css`
    display: flex;
    padding: 0 1rem;
    border-right: 1px solid lightgray;
    height: ${height};
    align-items: center;
    font-size: 0.875rem;
`
const navAnchor = css`
    padding: 0 1rem;
    line-height: 3rem;
`

const socialAnchor = css`
    line-height: ${height};
    padding: 0 0.5rem;
`
// CSS Styles ends ====================================

export default function Header() {
    return (
        <header css={css`
            display: flex;
            background-color: white;
            flex-wrap: wrap;
            border-left: 4px solid red;
            border-top: 1px solid lightgray;
            box-shadow: 0 1px 2px rgba(162,169,176,.4);
            position: fixed;
            z-index: 2;
        `}>

            <div css={css`
                flex: 0 0 18%;
                align-self: center;
                text-align: center;
            `}>

                <SvgBristolLogo />
            </div>

            <div css={css`
                flex: 0 0 70%;
                border-style: solid;
                border-color: lightgray;
                border-width: 0px 1px;
                display: flex;
                flex-flow: wrap row;
                justify-content: space-between;
            `}>

                <ul css={css`
                    display: flex;
                    border-bottom: 1px solid lightgray;
                    flex: 0 0 100%;
                `}>
                    <li>
                        <a href="mailto:hola@bristolingles.com"
                            css={contactAnchor}>
                            <SvgEnvelope />&ensp;hola@bristolingles.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:2288405791"
                            css={contactAnchor}>
                            <SvgPhone />&nbsp;Xalapa&emsp;2288 40 57 91
                        </a>
                    </li>
                    <li>
                        <a href="tel:2288160543"
                            css={contactAnchor}>
                            <SvgPhone />&nbsp;Coatepec&emsp;2288 16 05 43
                        </a>
                    </li>
                </ul>
                <nav css={css`display: inline-flex;`}>

                    <Link css={navAnchor} to="/">Home</Link>
                    <Link css={navAnchor} to="/nosotros">Nosotros</Link>
                    <Link css={navAnchor} to="/cursos">Cursos</Link>
                    <Link css={navAnchor} to="/examenes">Exámenes</Link>
                    <Link css={navAnchor} to="/centro-examinador">Centro Examinador</Link>
                    <Link css={navAnchor} to="/contacto">Contacto</Link>
                </nav>
                <SvgInglesMuyIngles />
            </div>
            <div css={css`
                flex: 0 0 12%;
                flex-direction: column;
                display: flex;
            `}>
                <ul css={css`display: flex;`}>
                    <li>
                        <a href="https://www.facebook.com/bristolinglesprofesional/"
                            css={socialAnchor}>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/bristolingles/"
                            css={socialAnchor}>
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
                <button css={css`
                    flex-grow: 1;
                    border: none;
                    border-radius: 0;
                    background-color: #0043ce;
                    color: white;
                `}>Contáctanos</button>
            </div>
        </header>
    )
}