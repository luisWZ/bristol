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
  img563,
  translateY,
}) => {
  return (
    <Flex {...{image}}>
      <Text {...{textRight}} {...{img563}} {...{image}}>
        {title && <Title>{title}</Title>}
        {subheader && <p>{subheader}</p>}
        {subtitle && <Subtitle css={!title && css`margin-top: 0;` }>{subtitle}</Subtitle>}
        {children}
      </Text>
      {Ilustration && <Ilustration css={ilustrationStyles} />}
      {image && !Ilustration && <ImgStyles {...{translateY}} {...{img563}} fluid={image} />
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

  @media (${props => props.theme.min848}) {
    padding-top: ${props => props.image ? '5rem' : 0};
    padding-bottom: 5rem;
  }
`
const ImgStyles = styled(Img)`
  margin-bottom: 2rem;
  order: 1;
  flex-basis: 66%;

  @media (${props => props.theme.min848}) {
    flex-basis: ${props => props.img563
      ? '50%'
      : '40%'
    };
  }
  @media (${props => props.theme.min848}) {
    ${props => props.translateY && `transform:translateY(-3rem);`}
  }
`
const Text = styled.div`
  order: 2;

  @media (${props => props.theme.min848}) {
    flex-basis: ${props => !props.image
      ? '100%'
      : props.img563 ? '44%'
      : '54%'
    };
    order: ${props => props.textRight ? 2 : 1};
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