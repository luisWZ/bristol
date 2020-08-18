import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { AiOutlineRight } from 'react-icons/ai'
import { borderTopStyle } from '../styles/CssHelpers'
import MenuContext from '../../utils/menuContext'

export default function Navigation() {
  const { menuOpen } = useContext(MenuContext)

  return (
    <NavBox {...{menuOpen}}>
      <NavAnchor to='/'>Home<AiOutlineRight /></NavAnchor>
      <NavAnchor to='/nosotros'>Nosotros<AiOutlineRight /></NavAnchor>
      <NavAnchor to='/cursos'>Cursos<AiOutlineRight /></NavAnchor>
      <NavAnchor to='/examenes'>Centro Examinador<AiOutlineRight /></NavAnchor>
      <NavAnchor to='/course-detail'>Course Detail<AiOutlineRight /></NavAnchor>
    </NavBox>
  )
}

// Made for the navigation menu in desktop size
const _1wordNav = `minmax(max-content , 100px)`
const _2wordNav = `minmax(max-content , 168px)`

const NavBox = styled.div`
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
    grid-template-columns: ${`${_1wordNav} ${_1wordNav} ${_1wordNav} ${_2wordNav} ${_2wordNav}`}
    /* grid-template-columns: ${`${_1wordNav} ${_1wordNav} ${_1wordNav} ${_1wordNav} ${_2wordNav} ${_1wordNav}`} */
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

  @media (${props => props.theme.max848}) {
    height: 3.5rem;
    justify-content: space-between;
    padding-left: ${props => props.theme.gutter};
    padding-right: ${props => props.theme.gutter};
    border-bottom: 1px solid ${props => props.theme.grayLight};

    svg {
      display: initial;
    }
  }

  &:hover {
    color: white;
    background-color: ${props => props.theme.blueLight};
  }
`