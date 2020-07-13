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
  display: grid;
  width: 100%;
  z-index: 2;
  position: fixed;
  box-shadow: 0 1px 2px hsla(220, 11%, 15%, 0.15);
  grid-template-columns: 1fr max-content max-content;
  background-color: ${props => props.theme.bgWhite};

  @media (${props => props.theme.min848}) {
    grid-template-columns: max-content 1fr;
  }
  `
const LogoBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: calc(${props => props.theme.gutter} - 4px);
  border-left: 4px solid ${props => props.theme.bristolRed};

  @media (${props => props.theme.min848}) {
    padding: 0 0.8rem;
    grid-row: 1 / 3;
    border-right: 1px solid ${props => props.theme.grayLight};
  }
`
const Logo = styled(SvgBristolLogo)`
  width: auto;
  max-height: 44px;
`
const NavBox = styled.nav`
  display: grid;
  grid-template-columns: repeat(6, auto);
  border-top: 1px solid ${props => props.theme.grayLight};

  @media (${props => props.theme.max848}) {
    display: none;
  }
`
const NavAnchor = styled(Link)`
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
const ContactBox = styled.ul`
  display: grid;
  grid-row: 2 / 3;
  grid-column: 1 / 4;
  grid-template-columns: repeat(auto-fit, minmax(100px , 1fr));
  border-top: 1px solid ${props => props.theme.grayLight};

  @media (${props => props.theme.min848}) {
    border-top: none;
    grid-row: 1 / 2;
    grid-column: 2 / 4;
  }
  `
const ContactLi = styled.li`
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
const ContactAnchor = styled.a`
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
const ButtonsBox = styled.div`
  grid-column-end: 4;
  justify-self: end;
`
const MenuButton = styled(Button)`
  padding-left: 1.6rem;
  padding-right: 1.6em;

  @media (${props => props.theme.min848}) {
    display: none;
  }
`
const ContactanosButton = styled(Button)`
  display: none;
  &:hover {
    background-color: ${props => props.theme.bristolRed};
  }
`
const SocialLinks_ = styled(SocialLinks)`
  grid-column-end: 3;
  display: none;

  @media (${props => props.theme.min480}) and (${props => props.theme.max848}) {
    display: flex;
  }
  a {
    height: 100%;
    ${props => hover(props.theme)}

    svg {
      width: 1.2rem;
    }
  }
`
const Slogan = styled(SvgInglesMuyIngles)`
  display: none;
  /* @media (${props => props.theme.max480}) {} */
`
// Components =========================================
const ContactBox_ = ({ color }) => (
  <ContactBox>
    <ContactLi>
      <ContactAnchor href='mailto:hola@bristolingles.com'>
        <SvgEnvelope fill={color} />
        <span>Email</span>
        <span>hola@bristolingles.com</span>
      </ContactAnchor>
    </ContactLi>
    <ContactLi>
      <ContactAnchor href='tel:2288405791'>
        <SvgPhone fill={color} />
        <span>Xalapa</span>
        <span>2288 40 57 91</span>
      </ContactAnchor>
    </ContactLi>
    <ContactLi>
      <ContactAnchor href='tel:2288160543'>
        <SvgPhone fill={color} />
        <span>Coatepec</span>
        <span>2288 16 05 43</span>
      </ContactAnchor>
    </ContactLi>
  </ContactBox>
)
const Nav_ = () => (
  <NavBox>
    <NavAnchor to='/'>Home<AiOutlineRight /></NavAnchor>
    <NavAnchor to='/nosotros'>Nosotros<AiOutlineRight /></NavAnchor>
    <NavAnchor to='/cursos'>Cursos<AiOutlineRight /></NavAnchor>
    <NavAnchor to='/examenes'>Exámenes<AiOutlineRight /></NavAnchor>
    <NavAnchor to='/centro-examinador'>Centro Examinador<AiOutlineRight /></NavAnchor>
    <NavAnchor to='/contacto'>Contacto<AiOutlineRight /></NavAnchor>
  </NavBox>
)
const ButtonsBox_ = () => (
  <ButtonsBox>
    <ContactanosButton as='button' noRadius blue>
      Contáctanos
    </ContactanosButton>
    <MenuButton as='button' noBg noRadius>
      <AiOutlineMenu />
      &ensp;Menú
    </MenuButton>
  </ButtonsBox>
)
const LogoBox_ = () => <LogoBox><Logo /></LogoBox>

export default function Header() {
  // hook to listen theme provider for svg fills
  const color = useTheme().pink
  return (
    <Header_>
      <LogoBox_ />
      <Nav_ />
      <ContactBox_ color={color} />
      <SocialLinks_ />
      <Slogan />
      <ButtonsBox_ />
    </Header_>
  )
}
