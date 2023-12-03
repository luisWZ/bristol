import React from 'react'
import styled from '@emotion/styled'

import SvgInglesMuyIngles from '../Svg/SvgInglesMuyIngles'
import { borderTopStyle } from 'styles/CssHelpers'

export default function Slogan() {
  return (
    <SloganInglesMuyInglesBox>
      <SvgInglesMuyIngles />
    </SloganInglesMuyInglesBox>
  )
}
// styles =============================================
const SloganInglesMuyInglesBox = styled.div`
  display: none;
  @media (${({ theme }) => theme.min1040}) {
    align-self: stretch;
    grid-column-end: -2;
    display: flex;
    justify-content: flex-end;
    ${props => borderTopStyle(props.theme)}

    svg {
      max-width: 209px;
      width: 80%;
      margin-right: calc(1rem + 0.25vw);
    }
  }
`
