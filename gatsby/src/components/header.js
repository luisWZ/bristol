import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import styles from './header.module.scss'

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
        <header className={styles.wrapper}>
            <div className={styles.logoBox}>
                <SvgBristolLogo />
            </div>

            <div className={styles.mainBox}>

                <ul className={styles.contactList}>
                    <li>
                        <a href="mailto:hola@bristolingles.com">
                            <SvgEnvelope />
                            &ensp;
                            hola@bristolingles.com
                        </a>
                    </li>
                    <li>
                        <a href="tel:2288405791">
                            <SvgPhone />
                            &nbsp;
                            Xalapa&emsp;
                            2288 40 57 91
                        </a>
                    </li>
                    <li>
                        <a href="tel:2288160543">
                            <SvgPhone />
                            &nbsp;
                            Coatepec&emsp;
                            2288 16 05 43
                        </a>
                    </li>
                </ul>
                <nav className={styles.navBox}>

                    <Link to="/">Home</Link>
                    <Link to="/nosotros">Nosotros</Link>
                    <Link to="/cursos">Cursos</Link>
                    <Link to="/examenes">Exámenes</Link>
                    <Link to="/centro-examinador">Centro Examinador</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>
                <SvgInglesMuyIngles />
            </div>
            <div className={styles.rightBox}>
                <ul className={styles.social}>
                    <li>
                        <a href="https://www.facebook.com/bristolinglesprofesional/">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/bristolingles/">
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
                <button className={styles.contactBtn}>Contáctanos</button>
            </div>
        </header>
    )
}