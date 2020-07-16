import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'

import { AiOutlineRight, AiOutlineMenu } from 'react-icons/ai';
import { Button } from './styles/CssHelpers'
import SvgBristolLogo from './svgs/SvgBristolLogo'
import SvgInglesMuyIngles from './svgs/SvgInglesMuyIngles'
import SvgEnvelope from './svgs/SvgEnvelope'
import SvgPhone from './svgs/SvgPhone'
import SocialLinks from './SocialLinks'

// CSS Helpers ========================================
const hover = (theme, color) => {
  return `
    &:hover {
      background-color: ${theme.bgGray};
      color: ${color === undefined ? theme.grayDark : theme.blueDark};
    }
  `
}
const borderTop = (theme) => `border-top: 1px solid ${theme.grayLight};`
// styles =============================================
const Header_ = styled.header`
  display: grid;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  position: fixed;
  box-shadow: 0 1px 2px hsla(220, 11%, 15%, 0.15);
  grid-template-columns: max-content 1fr max-content max-content;
  background-color: ${props => props.theme.bgWhite};
  `
const LogoBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: calc(${props => props.theme.gutter} - 4px);
  border-left: 4px solid ${props => props.theme.bristolRed};
  transition: padding .4s ease-out;

  @media (${props => props.theme.min848}) {
    padding: 0 0.8rem;
    grid-area: 1 / 1 / 3 / 2;
    border-right: 1px solid ${props => props.theme.grayLight};
  }
  @media (${props => props.theme.min1200}) {
    padding-left: 1.4rem;
    padding-right: 1.4rem;
  }
`
const Logo = styled(SvgBristolLogo)`
  width: auto;
  max-height: 44px;
  transition: max-height .4s ease-out;

  @media (${props => props.theme.min1200}) {
    max-height: 60px;
  }
`
// Made for the navigation menu in desktop size
const _1wordNav = `minmax(max-content , 100px)`
const _2wordNav = `minmax(max-content , 168px)`
//
const NavBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  ${props => borderTop(props.theme)}

  @media (${props => props.theme.max848}) { /* to be removed */
    display: none;
  }
  @media (${props => props.theme.min848}) {
    grid-row: 2 / 3;
    grid-auto-flow: column;
    grid-template-columns: ${`${_1wordNav} ${_1wordNav} ${_1wordNav} ${_1wordNav} ${_2wordNav} ${_1wordNav}`}
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
  grid-column: 1 / -1;
  grid-template-columns: repeat(auto-fit, minmax(100px , 1fr));
  border-top: 1px solid ${props => props.theme.grayLight};

  @media (${props => props.theme.min848}) {
    border-top: none;
    grid-row: 1 / 2;
    grid-column: 2 / -2;
  }
  @media (${props => props.theme.min960}) {
    grid-template-columns: repeat(3, minmax(208px , 256px));
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

    @media (${props => props.theme.min848}) {
      border-right: 1px solid ${props => props.theme.grayLight};
    }
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

    @media (${props => props.theme.min848}) and (${props => props.theme.max960}) {
      display: none;
    }
  }
`
const SocialLinksBox_ = styled(SocialLinks)`
  display: none;

  @media (${props => props.theme.min480}) and (${props => props.theme.max848}) {
    grid-column-end: 3;
    display: flex;
    justify-self: end;
  }
  @media (${props => props.theme.min848}) {
    display: flex;
    grid-column-end: -1;
    grid-row: 1 / 2;
  }
  a {
    height: 100%;
    ${props => hover(props.theme, true)}

    svg {
      width: 1.2rem;
    }
  }
`
const ButtonsBox = styled.div`
  grid-column-end: -1;
  justify-self: end;
`
const MenuButton = styled(Button)`
  padding-left: 1.6rem;
  padding-right: 1.6em;

  @media (${props => props.theme.min848}) {
    display: none;
  }
`
const SloganInglesMuyInglesBox = styled.div`
  display: none;
  @media (${props => props.theme.min1200}) {
    align-self: stretch;
    grid-column-end: -2;
    display: flex;
    justify-content: flex-end;
    ${props => borderTop(props.theme)}

    svg {
      max-width: 209px;
      width: 80%;
      margin-right: calc(1rem + 0.25vw);
    }
  }
`
const ContactanosButton = styled(Button)`
  display: none;

  @media (${props => props.theme.min848}) {
    padding: 0rem 1.2rem;
    height: 100%;
    display: initial;
  }
`
// Components =========================================
const LogoBox_ = () => (
  <LogoBox>
    <Link to='/'>
      <Logo />
    </Link>
  </LogoBox>
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
const SloganInglesMuyInglesBox_ = () => (
  <SloganInglesMuyInglesBox>
    <SvgInglesMuyIngles />
  </SloganInglesMuyInglesBox>
)
export default function Header() {
  // hook to listen theme provider for svg fills
  const color = useTheme().pink
  return (
    <Header_>
      <LogoBox_ />
      <Nav_ />
      <ContactBox_ color={color} />
      <SocialLinksBox_ />
      <SloganInglesMuyInglesBox_ />
      <ButtonsBox_ />
    </Header_>
  )
}
