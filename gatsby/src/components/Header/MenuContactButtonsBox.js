import React, { useContext, useRef } from 'react'
import styled from '@emotion/styled'
import { AiOutlineMenu } from 'react-icons/ai'
import { Button } from '../styles/CssHelpers'
import MenuContext from '../../utils/menuContext'
import { useOnClickOutside } from '../../utils/hooks'

export default function MenuContactButtonsBox() {
  const { menuOpen, setMenuOpen } = useContext(MenuContext)
  const node = useRef()

  useOnClickOutside(node, () => setMenuOpen(false))

  return (
    <ButtonsBox>
      <ContactanosButton as='button' noRadius blue>
        Contáctanos
      </ContactanosButton>
      <MenuButton as='button' noBg noRadius
        ref={node}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <AiOutlineMenu />
        &ensp;Menú
      </MenuButton>
    </ButtonsBox>
  )
}

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
const ContactanosButton = styled(Button)`
  display: none;

  @media (${props => props.theme.min848}) {
    padding: 0rem 1.2rem;
    height: 100%;
    display: initial;
  }
`
