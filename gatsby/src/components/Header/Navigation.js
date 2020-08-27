import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { AiOutlineRight } from 'react-icons/ai'

import { borderTopStyle } from 'styles/CssHelpers'
import MenuContext from 'utils/menuContext'

export default function Navigation() {
  const { menuOpen } = useContext(MenuContext)

  return (
    <NavBox {...{menuOpen}} role='navigation'>
      <NavItem><Link to='/'>Home<AiOutlineRight /></Link></NavItem>
      <NavItem><Link to='/nosotros'>Nosotros<AiOutlineRight /></Link></NavItem>
      <NavItem className='dropdown'><span aria-haspopup='true'>Cursos</span>
        <ul aria-label='submenu'>
          <li><Link to='/cursos'>Cursos de Inglés General <AiOutlineRight /></Link></li>
          <li><Link to='/educacion-continua'>Educación Continua <AiOutlineRight /></Link></li>
        </ul>
      </NavItem>
      <NavItem><Link to='/examenes'>Centro Examinador Cambridge<AiOutlineRight /></Link></NavItem>
      <NavItem><Link to='/course-detail'>Course Detail<AiOutlineRight /></Link></NavItem>
    </NavBox>
  )
}
// styles =============================================
// Made for the navigation menu in desktop size
const _1wordNav = `minmax(max-content , 100px)`
const _2wordNav = `minmax(max-content , 144px)`
const _3wordNav = `minmax(max-content , 264px)`

const NavBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, auto);
  ${props => borderTopStyle(props.theme)}

  @media (${props => props.theme.max848}) {
    display: block;
    grid-row: 3 / 4;
    width: 100%;
    position: absolute;
    z-index: -1;
    transition: transform .26s cubic-bezier(0.4, 0.26, 0.24, 0.89);
    box-shadow: ${props => props.menuOpen
      ? '0 4px 8px hsla(220, 11%, 15%, 0.15), 0 1px 3px rgba(0,0,0,0.4)'
      : 'none'};
    transform: ${props => props.menuOpen
      ? 'translate3d(0%, 0%, 0)'
      : 'translate3d(0%, -100%, 0)'};
  }
  @media (${props => props.theme.min848}) {
    grid-row: 2 / 3;
    grid-auto-flow: column;
    grid-template-columns: ${`${_1wordNav} ${_1wordNav} ${_1wordNav} ${_3wordNav} ${_2wordNav}`}
  }
`
const anchorHeight = '3rem'

const anchorHeightMobile = '3.5rem'

const liMobileStyles = theme =>`
  height: ${anchorHeightMobile};
  > a {
    padding-left: ${theme.gutter};
    padding-right: ${theme.gutter};
  }
`
const NavItem = styled('li')`
  display: flex;
  position: relative;
  height: ${anchorHeight};

  a,
  &.dropdown span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }
  &.dropdown span {
    cursor: pointer;
  }
  svg {
    display: none;
  }
  ul {
    margin: 0;

    li {
      display: flex;
      height: ${anchorHeight};
    }
  }

  &:hover > a,
  &:hover > span,
  ul li:hover a {
    color: white;
    background-color: ${props => props.theme.blueLight};
  }

  @media (${props => props.theme.min848}) {
    ul {
      position: absolute;
      top: 100%;
      left: 0;
      width: 15rem;
      box-shadow: 0 2px 3px hsla(220,11%,15%,0.25);
      background-color: white;
      opacity: 0;
      display: none;
      visibility: hidden;
      transition: all 0.5s ease;

      a {
        justify-content: unset;
        padding-left: 1.5rem;
      }
    }
    &:hover > ul,
    &:focus-within > ul & ul:hover {
      visibility: visible;
      opacity: 1;
      display: block;
    }
  }
  @media (${props => props.theme.max848}) {
    border-bottom: 1px solid ${props => props.theme.grayLight};
    ${props => liMobileStyles(props.theme)}

    &.dropdown {
      padding-left: 0;
      padding-right: 0;
      height: ${anchorHeightMobile.split('rem')[0] * 2 + 'rem'};

      ul {
        width: 100%;
      }
      > span {
        display: none;
      }
      li {
        ${props => liMobileStyles(props.theme)}

        &:first-of-type {
          border-bottom: 1px solid ${props => props.theme.grayLight};
        }
      }
    }
    a {
      justify-content: space-between;
    }
    svg {
      display: initial;
    }
  }
`