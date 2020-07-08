import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
// import styled from '@emotion/styled'

import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import SvgBristolLogo from '../assets/svgs/bristol-logo'
import SvgInglesMuyIngles from '../assets/svgs/ingles-muy-ingles'
import SvgEnvelope from '../assets/svgs/envelope-svg'
import SvgPhone from '../assets/svgs/phone-svg'

// CSS Styles =========================================
const height = `2.5rem`

const Wrapper = styled.header`
    display: flex;
    background-color: white;
    flex-wrap: wrap;
    border-left: 4px solid red;
    border-top: 1px solid lightgray;
    box-shadow: 0 1px 2px rgba(162, 169, 176, 0.4);
    position: fixed;
    z-index: 2;
`
const LogoBox = styled.div`
    flex: 0 0 18%;
    align-self: center;
    text-align: center;
`
const Logo = styled(SvgBristolLogo)`
    max-width: 80%;
    height: auto;
`

const MainColumn = styled.div`
    flex: 0 0 70%;
    border-style: solid;
    border-color: lightgray;
    border-width: 0 1px;
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
`
const ContactList = styled.ul`
    display: flex;
    border-bottom: 1px solid lightgray;
    flex: 0 0 100%;
`
const ContactListLink = styled.a`
    display: flex;
    padding: 0 1rem;
    border-right: 1px solid lightgray;
    height: ${height};
    align-items: center;
    font-size: 0.875rem;
`
const Nav = styled.nav`
    display: inline-flex;
`
const NavLink = styled(Link)`
    padding: 0 1rem;
    line-height: 3rem;
`

const RightColumn = styled.div`
    flex: 0 0 12%;
    flex-direction: column;
    display: flex;
`
const SocialLinkBox = styled.ul`
    display: flex;
`
const SocialLink = styled.a`
    line-height: ${height};
    padding: 0 0.5rem;
    display: block;
`
const Slogan = styled(SvgInglesMuyIngles)`
    align-self: center;
    margin-right: 0.75rem;
`

const Button = styled.button`
    flex-grow: 1;
    border-radius: 0;
    background-color: #0043ce;
    color: white;
`
// CSS Styles ends ====================================

export default function Header() {
    return (
        <Wrapper>
            <LogoBox>
                <Logo />
            </LogoBox>

            <MainColumn>
                <ContactList>
                    <li>
                        <ContactListLink href="mailto:hola@bristolingles.com">
                            <SvgEnvelope />&ensp;hola@bristolingles.com
                        </ContactListLink>
                    </li>
                    <li>
                        <ContactListLink href="tel:2288405791">
                            <SvgPhone />&nbsp;Xalapa&emsp;2288 40 57 91
                        </ContactListLink>
                    </li>
                    <li>
                        <ContactListLink href="tel:2288160543">
                            <SvgPhone />&nbsp;Coatepec&emsp;2288 16 05 43
                        </ContactListLink>
                    </li>
                </ContactList>
                <Nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/nosotros">Nosotros</NavLink>
                    <NavLink to="/cursos">Cursos</NavLink>
                    <NavLink to="/examenes">Exámenes</NavLink>
                    <NavLink to="/centro-examinador">Centro Examinador</NavLink>
                    <NavLink to="/contacto">Contacto</NavLink>
                </Nav>
                <Slogan />
            </MainColumn>
            <RightColumn>
                <SocialLinkBox>
                    <li>
                        <SocialLink href="https://www.facebook.com/bristolinglesprofesional/">
                            <FaFacebookF />
                        </SocialLink>
                    </li>
                    <li>
                        <SocialLink href="https://www.instagram.com/bristolingles/">
                            <FaInstagram />
                        </SocialLink>
                    </li>
                </SocialLinkBox>
                <Button>Contáctanos</Button>
            </RightColumn>
        </Wrapper>
    )
}