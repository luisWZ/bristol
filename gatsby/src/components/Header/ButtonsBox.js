import React from 'react'
import styled from '@emotion/styled'

import { Button } from 'styles/CssHelpers'
import { email } from 'root/sitedefaults'

export default function ButtonsBox({children}) {
  return (
    <ButtonsBoxStyles>
      <ContactanosButton
        noRadius href={`mailto:${email}`}>
        Contáctanos
      </ContactanosButton>
      {children}
    </ButtonsBoxStyles>
  )
}
// styles =============================================
const ButtonsBoxStyles = styled.div`
  grid-column-end: -1;
  justify-self: end;
`
const ContactanosButton = styled(Button)`
  display: none;

  @media (${props => props.theme.min848}) {
    padding: 0rem 1.2rem;
    height: 100%;
    display: flex;
  }
  @media (${props => props.theme.min1400}) {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }
`
