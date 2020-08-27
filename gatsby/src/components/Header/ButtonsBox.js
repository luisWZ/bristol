import React from 'react'
import styled from '@emotion/styled'

import { Button } from 'styles/CssHelpers'
import { email } from 'root/sitedefaults'

export default function ButtonsBox({children}) {
  return (
    <ButtonsBox_>
      <ContactanosButton
        noRadius href={`mailto:${email}`}>
        Contáctanos
      </ContactanosButton>
      {children}
    </ButtonsBox_>
  )
}
// styles =============================================
const ButtonsBox_ = styled.div`
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
`
