import React, { useContext, useRef } from 'react'
import styled from '@emotion/styled'
import { AiOutlineMenu } from 'react-icons/ai'

import MenuContext from 'utils/menuContext'
import useMobileListener from 'utils/useMobileListener'
import { Button } from 'styles/CssHelpers'

export default function MenuButton() {
  const { menuOpen, setMenuOpen } = useContext(MenuContext)
  const node = useRef()
  useMobileListener(node, setMenuOpen)

  return (
    <MenuButtonStyles
      as='button'
      noBg
      noRadius
      ref={node}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <AiOutlineMenu />
      &ensp;Menú
    </MenuButtonStyles>
  )
}
// styles =============================================
const MenuButtonStyles = styled(Button)`
  padding-left: 1.6rem;
  padding-right: 1.6em;

  @media (${props => props.theme.min848}) {
    display: none;
  }
`
