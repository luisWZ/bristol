import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Title, Subtitle } from 'styles/FontStyles'
import TempIlus from 'svgs/_temp-ilus.svg'
import TempIlus3_2 from 'svgs/_temp-ilus-3_2.svg'

const TextIlustration = ({children, title, subtitle, subheader, textRight, ilus2 }) => {
  return (
    <Flex>
      <Text {...{textRight}} {...{ilus2}}>
        {title && <Title>{title}</Title>}
        {subheader && <p>{subheader}</p>}
        {subtitle && <Subtitle style={{ marginTop: !title ? '0' : null }}>{subtitle}</Subtitle>}
        {children}
      </Text>
      {!ilus2 ? <TempIlus css={ilustrationStyles} /> : <TempIlus3_2 css={ilustrationStyles} />}
    </Flex>
  )
}
TextIlustration.propTypes = {
  children: PropTypes.node.isRequired,
}
export default TextIlustration
// styles =============================================
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
  align-items: flex-start;
  padding-bottom: 5rem;
  padding-top: 5rem;
`
const Text = styled.div`
  flex-basis: ${props => !props.ilus2 ? '50%' : '44%'};
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
  button,
  a {
    margin-top: 2rem;
  }
`
