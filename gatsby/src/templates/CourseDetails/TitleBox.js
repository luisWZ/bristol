import React from 'react'
import styled from '@emotion/styled'

import { Button } from 'styles/CssHelpers'
import { Big } from 'styles/FontStyles'
import { email } from 'root/sitedefaults'

export default function TitleBox({
  courseName,
  courseType,
  subheader,
}) {
  return (
    <TitleBoxStyles>
      <TitleText>
        <Big>{courseName}</Big>&emsp;
        <Text><span>{courseType}</span>&ensp;<Dot>•</Dot>&ensp;<span>{subheader}</span></Text>
      </TitleText>
      <ButtonStyles href={`mailto:${email}`}>Inscríbete</ButtonStyles>
    </TitleBoxStyles>
  )
}
// styles =============================================
const TitleBoxStyles = styled.div`
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
const ButtonStyles = styled(Button)`
  flex-basis: 13rem;
  flex-grow: 1;
`
const Text = styled.p`
  @media (${props => props.theme.max720}) {
    line-height: 1;
    margin-bottom: 1.5rem;

    span:first-of-type,
    span:last-of-type {
      display: block;
    }
  }
`
const Dot = styled.span`
  @media (${props => props.theme.max720}) {
    display: none;
  }
`