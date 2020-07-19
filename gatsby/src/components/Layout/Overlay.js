import React from 'react'
import styled from '@emotion/styled'
import MenuContext from '../MenuContext'

export default function Overlay() {
  return (
    <Overlay_ menuOpen={React.useContext(MenuContext).menuOpen} />
  )
}
export const Overlay_ = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  transition: height .5s linear;
  background-color: hsla(219, 99%, 53%, 0.8);
  height: ${props => props.menuOpen ? '100%' : '0%'};
  display: ${props => props.menuOpen ? 'block' : 'none'};
`