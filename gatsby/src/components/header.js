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
// legacy =============================================
const RightColumn = styled.div`
  flex: 0 0 12%;
  flex-direction: column;
  display: flex;
`
const MainColumn = styled.div`
  flex: 0 0 70%;
  border-left: 1px solid ${props => props.theme.grayLight};
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
`
// styles =============================================
const Header_ = styled.header`
  /* flex-wrap: wrap; */
  /* border-left: 4px solid ${props => props.theme.bristolRed}; */
  /* display: flex; */
  display: grid;
  grid-template-areas: "contact contact" "logo button" "menu menu";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2.75rem 2.75rem auto;
  width: 100%;
  z-index: 2;
  position: fixed;
  box-shadow: 0 1px 2px hsla(220, 11%, 15%, 0.15);
  background-color: ${props => props.theme.bgWhite};
`
const LogoBox = styled.div`
  /* flex: 0 0 18%;
  align-self: center;
  text-align: center; */
  grid-area: logo;
  display: flex;
`
const Logo = styled(SvgBristolLogo)`
  /* max-width: 80%; */
  max-width: 50%;
  margin-left: ${props => props.theme.gutter};
`
const ContactList = styled.ul`
  /* display: flex; */
  /* flex: 0 0 100%; */
  /* justify-items: center; */
  grid-area: contact;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid ${props => props.theme.grayLight};
  li {
    display: flex;
    border-right: 1px solid ${props => props.theme.grayLight};
    &:last-of-type {
      border-right: none;
    }
    &:first-of-type {
      display: none;
    }
  }
`
const ContactListLink = styled.a`
  /* padding: 0 1rem; */
  /* line-height: ${height}; */
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  ${props => hover(props.theme)}
  svg {
    display: none;
  }
`
const MenuButton = styled(Button)`
  padding: 0.5rem 1.2rem;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  grid-area: button;
  place-self: stretch end;
  margin-right: ${props => props.theme.gutter};
`
const Nav = styled.nav`
  /* display: inline-flex; */
  grid-area: menu;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${props => props.theme.grayLight};
  border-left: 4px solid ${props => props.theme.bristolRed};
  display: none;
`
const NavLink = styled(Link)`
  /* padding: 0 1rem; */
  line-height: 3.2rem;
  display: inline-flex;
  justify-content: space-between;
  border-top: 1px solid ${props => props.theme.grayLight};
  padding-left: ${props => props.theme.gutter};
  padding-right: ${props => props.theme.gutter};
  &:first-of-type {
    border-top: none;
  }
  &:hover {
    color: white;
    background-color: ${props => props.theme.blueLight};
  }
`
const SocialLinks_ = styled(SocialLinks)`
  display: none;
  a {
    height: ${height};
    ${props => hover(props.theme, 'blue')}
  }
`
const Slogan = styled(SvgInglesMuyIngles)`
  /* align-self: center;
  margin-right: 0.75rem; */
  display: none;
`
const Button_ = styled.button`
  /* flex-grow: 1;
  border-radius: 0;
  background-color: ${props => props.theme.bristolBlue};
  &:hover {
    background-color: ${props => props.theme.bristolRed};
  } */
  display: none;
`
// Components =========================================
const ContactList_ = ({ color }) => (
  <ContactList>
    <li>
      <ContactListLink href='mailto:hola@bristolingles.com'>
        <SvgEnvelope fill={color} />
        &ensp;hola@bristolingles.com
      </ContactListLink>
    </li>
    <li>
      <ContactListLink href='tel:2288405791'>
        <SvgPhone fill={color} />
        &nbsp;Xalapa&emsp;2288 40 57 91
      </ContactListLink>
    </li>
    <li>
      <ContactListLink href='tel:2288160543'>
        <SvgPhone fill={color} />
        &nbsp;Coatepec&emsp;2288 16 05 43
      </ContactListLink>
    </li>
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
const MenuButton_ = () => (
  <MenuButton as='button' noBg noRadius>
    <AiOutlineMenu />
    &ensp;Menú
  </MenuButton>
)
const LogoBox_ = () => <LogoBox><Logo /></LogoBox>

export default function Header() {
  // hook to listen theme provider for svg fills
  const color = useTheme().pink
  return (
    <Header_>
      <LogoBox_ />
      <ContactList_ color={color} />
      <Nav_ />
      <Slogan />
      <SocialLinks_ />
      <MenuButton_ />
      <Button_>Contáctanos</Button_>
    </Header_>
  )
}
