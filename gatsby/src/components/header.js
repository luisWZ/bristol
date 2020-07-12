import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'

import { AiOutlineRight, AiOutlineMenu } from 'react-icons/ai';
import { Button } from './CssHelpers'
import SocialLinks from './SocialLinks'
import SvgBristolLogo from './SvgBristolLogo'
import SvgInglesMuyIngles from './SvgInglesMuyIngles'
import SvgEnvelope from './SvgEnvelope'
import SvgPhone from './SvgPhone'

// CSS Helpers ========================================
const height = `2.8rem` // ref listener ==> freddcodecamp post on .TODO
const hover = (theme, color) => {
  return `
    &:hover {
      background-color: ${theme.bgGray};
      color: ${color === undefined ? theme.grayDark : theme.bristolBlue};
    }
  `
}
// styles =============================================
const Header_ = styled.header`
  /* border-left: 4px solid ${props => props.theme.bristolRed}; */
  /* display: grid; */
  /* grid-template-columns: auto 1fr auto; */
  /* grid-template-rows: 2.75rem 2.75rem auto; */
  /* grid-template-areas: "contact contact contact" "logo slogan button" "menu menu menu"; */
  display: grid;
  /* align-items: center; */
  align-items: stretch;
  width: 100%;
  z-index: 2;
  position: fixed;
  box-shadow: 0 1px 2px hsla(220, 11%, 15%, 0.15);
  background-color: ${props => props.theme.bgWhite};
  @media (${props => props.theme.min848}) {
    grid-template-columns: max-content 1fr;
  }
  `
const LogoBox = styled.div`
  /* grid-column-end: 1; */
  padding-left: ${props => props.theme.gutter};
  @media (${props => props.theme.min848}) {
    padding: 0 0.8rem;
    display: flex;
    align-items: center;
    grid-row: 1 / 3;
    border-right: 1px solid ${props => props.theme.grayLight};
  }
`
const ButtonBox = styled.div`
  /* grid-column: 3 / span 2; */
  justify-self: end;
`
const Logo = styled(SvgBristolLogo)`
  width: auto;
  max-height: 48px;
`
const ContactList = styled.ul`
  display: grid;
  grid-row: 2 / 3;
  grid-column: -2 / 2;
  grid-template-columns: repeat(auto-fit, minmax(100px , 1fr));
  border-top: 1px solid ${props => props.theme.grayLight};
  @media (${props => props.theme.min848}) {
    border-top: none;
    grid-row: 1 / 2;
    grid-column: initial;
  }
  `
const ContactListLi = styled.li`
  span {
    &:last-of-type {
      margin-left: 1em;
      display: none;

      @media (${props => props.theme.min640}) {
        display: initial;
      }
    }
  }
  &:first-of-type {
    border-right: 1px solid ${props => props.theme.grayLight};

    @media (${props => props.theme.min640}) {
      span {
        &:first-of-type {
          display: none;
        }
        &:last-of-type {
          margin-left: 0;
        }
      }
    }
  }
  &:last-of-type {
    border-left: 1px solid ${props => props.theme.grayLight};
  }
`
const ContactListLink = styled.a`
  height: 2.5rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => hover(props.theme)}

  svg {
    margin-right: 0.5em;
  }
`
const MenuButton = styled(Button)`
  @media (${props => props.theme.min848}) {
    display: none;
  }
  /* padding: 0.5rem 1.2rem; */
  /* display: inline-flex; */
  /* justify-content: space-evenly; */
  /* align-items: center; */
  /* grid-area: button; */
  /* place-self: stretch end; */
  /* margin-right: ${props => props.theme.gutter}; */
`
const Nav = styled.nav`
  /* grid-area: menu; */
  /* display: flex; */
  /* flex-direction: column; */
  /* border-top: 1px solid ${props => props.theme.grayLight}; */
  /* border-left: 4px solid ${props => props.theme.bristolRed}; */
  /* display: none; */
  display: grid;
  grid-template-columns: repeat(6, auto);
  border-top: 1px solid ${props => props.theme.grayLight};
`
const NavLink = styled(Link)`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: none;
  }
  &:hover {
    color: white;
    background-color: ${props => props.theme.blueLight};
  }
`
const SocialLinks_ = styled(SocialLinks)`
  display: none;
  a {
    /* height: ${height}; */
    /* ${props => hover(props.theme, 'blue')} */
  }
`
const Slogan = styled(SvgInglesMuyIngles)`
  display: none;
  /* max-width: 16rem; */
  /* margin-right: 1.5rem; */
  /* grid-area: slogan; */
  /* place-self: center end; */
  @media (${props => props.theme.max480}) {
    /* display: none; */
  }
`
const Contactanos = styled(Button)`
  display: none;
  &:hover {
    /* background-color: ${props => props.theme.bristolRed}; */
  }
  /* display: none; */
`
// Components =========================================
const ContactList_ = ({ color }) => (
  <ContactList>
    <ContactListLi>
      <ContactListLink href='mailto:hola@bristolingles.com'>
        <SvgEnvelope fill={color} />
        <span>Email</span>
        <span>hola@bristolingles.com</span>
      </ContactListLink>
    </ContactListLi>
    <ContactListLi>
      <ContactListLink href='tel:2288405791'>
        <SvgPhone fill={color} />
        <span>Xalapa</span>
        <span>2288 40 57 91</span>
      </ContactListLink>
    </ContactListLi>
    <ContactListLi>
      <ContactListLink href='tel:2288160543'>
        <SvgPhone fill={color} />
        <span>Coatepec</span>
        <span>2288 16 05 43</span>
      </ContactListLink>
    </ContactListLi>
  </ContactList>
)
const Nav_ = () => (
  <Nav>
    <NavLink to='/'>Home<AiOutlineRight /></NavLink>
    <NavLink to='/nosotros'>Nosotros<AiOutlineRight /></NavLink>
    <NavLink to='/cursos'>Cursos<AiOutlineRight /></NavLink>
    <NavLink to='/examenes'>Exámenes<AiOutlineRight /></NavLink>
    <NavLink to='/centro-examinador'>Centro Examinador<AiOutlineRight /></NavLink>
    <NavLink to='/contacto'>Contacto<AiOutlineRight /></NavLink>
  </Nav>
)
const ButtonBox_ = () => (
  <ButtonBox>
    <Contactanos as='button' noRadius blue>
      Contáctanos
    </Contactanos>
    <MenuButton as='button' noBg noRadius>
      <AiOutlineMenu />
      &ensp;Menú
    </MenuButton>
  </ButtonBox>
)
const LogoBox_ = () => <LogoBox><Logo /></LogoBox>

export default function Header() {
  // hook to listen theme provider for svg fills
  const color = useTheme().pink
  return (
    <Header_>
      <LogoBox_ />
      <Nav_ />
      <ContactList_ color={color} />
      <SocialLinks_ />
      <Slogan />
      <ButtonBox_ />
    </Header_>
  )
}
