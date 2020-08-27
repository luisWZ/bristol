import React from 'react'
import styled from '@emotion/styled'

import { Button } from 'styles/CssHelpers'
import { Big } from 'styles/FontStyles'

export default function TitleBox() {
  return (
    <TitleBox_>
      <TitleText>
        <Big>Pet for Schools</Big>
        <p>Preliminary English Test</p>
      </TitleText>
      <Button_>Inscríbete</Button_>
    </TitleBox_>
  )
}
// styles =============================================
const TitleBox_ = styled.div`
  grid-area: title;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${props => props.theme.gray};
  margin-bottom: 1.5rem;

  @media (${props => props.theme.max480}) {
    border-bottom: none;
  }
`
const TitleText = styled.div`
  flex-basis: 0;
  flex-grow: 666;
  min-width: 16rem;

  h1 {
    margin-bottom: 0;
  }
  p {
    margin-bottom: 0.8rem;
  }
`
const Button_ = styled(Button)`
  flex-basis: 13rem;
  flex-grow: 1;
`