import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Title, Subtitle } from 'styles/FontStyles'
import TempIlus from 'svgs/_temp-ilus.svg'

export default function TextIlustration({children, title, subtitle, subheader, textRight }) {
  return (
    <Flex>
      <Text {...{textRight}}>
        <Title>{title}</Title>
        <p>{subheader}</p>
        <Subtitle>{subtitle}</Subtitle>
        {children}
      </Text>
      <TempIlus css={ilustrationStyles} />
    </Flex>
  )
}
const ilustrationStyles = theme => css`
  flex-grow: 0;

  @media (${theme.max1040}) {
    margin: 2rem auto;
  }
`
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5rem;
  align-items: flex-start;
`
const Text = styled.div`
  flex-basis: 50%;
  ${props => props.textRight && `
    order: 1;
  `}

  @media (${props => props.theme.max1040}) {
    flex-grow: 1;
  }
  h1 {
    margin-bottom: 0.5rem;
  }
  h2 {
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
  }
  p:last-of-type {
    margin-bottom: 0;
  }
`
