import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

import { Title, Subtitle } from 'styles/FontStyles'

const TextIlustration = ({
  children,
  title,
  subtitle,
  subheader,
  textRight,
  image,
  Ilustration,
  ilus2,
  img563,
  noImage,
}) => {
  return (
    <Flex {...{noImage}}>
      <Text {...{textRight}} {...{ilus2}} {...{img563}} {...{noImage}}>
        {title && <Title>{title}</Title>}
        {subheader && <p>{subheader}</p>}
        {subtitle && <Subtitle style={{ marginTop: !title ? '0' : null }}>{subtitle}</Subtitle>}
        {children}
      </Text>
      {!noImage && Ilustration
        ? <Ilustration css={ilustrationStyles} />
        : <Img style={{ flexBasis: img563 ? '35.1875rem' : '27.9375rem' }} fluid={image} css={ilustrationStyles} />
      }
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
  padding-top: ${props => props.noImage ? '0' : '5rem'};
`
const Text = styled.div`
  flex-basis: ${props =>
    props.noImage ? '100%'
    : props.img563 ? '44%'
    : !props.ilus2 ? '50%'
    : '44%'
  };
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
