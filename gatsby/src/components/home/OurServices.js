import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { Title2 } from 'styles/FontStyles'
import { ContainerWhite, title } from 'styles/CssHelpers'
import LineDecoration from 'svgs/linea-dorada.svg'

// Components =========================================
export default function OurServices({ images }) {
  // query course info & add sharpImages
  const data = useStaticQuery(HOME_SERVICES_QUERY).allHomeServicesYaml.edges
    .map( ({ node }) => ({
      ...node,
      image: node.type === 'online' ? images.imageCursoOnline : images.imageCursoPresencial,
      decoration: node.type === 'online' ? true : false,
    }))
  return (
    <ContainerWhite>
      <Title2 css={title}>Modalidades</Title2>
      <ServicesWrapper>
        {data.map((service, index) => <Service service={service} key={`our_services${index}`} /> )}
        <LineDecoration css={lineDecorationStyles} />
      </ServicesWrapper>
    </ContainerWhite>
  )
}
const Service = ({ service }) => (
  <ServiceBox css={css`position: relative;`}>
    <ImageWrapper decoration={service.decoration}>
      <Img css={() => imageStyles()} fluid={service.image.childImageSharp.fluid} />
    </ImageWrapper>
    <Header>{service.title}</Header>
    {service.text.split('@').map((line, index) => <p key={index}>{line}</p>)}
  </ServiceBox>
)
// query ==============================================
const HOME_SERVICES_QUERY = graphql`
  query HOME_SERVICES_QUERY {
    allHomeServicesYaml {
      edges {
        node {
          title
          text
          type
        }
      }
    }
  }
`
// Styles =============================================
const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 3rem;
  margin-bottom: 5rem;
  position: relative;
`
const ServiceBox = styled.div`
    margin-bottom: 1.5rem;
    flex-basis: 40%;

    @media (${props => props.theme.max848}) {
      max-width: 32rem;
      flex-basis: initial;

      &:first-of-type {
        margin-bottom: 3rem;
      }
    }

    p {
      margin-bottom: 0.2rem;

      &:first-of-type {
        margin-bottom: 1rem;
      }
    }

    &:hover {
      cursor: pointer;
    }
`
const Header = styled(Title2)`
  margin-top: 5rem;
  margin-bottom: 0.8rem;
`
const imageStyles = _ => css`
  position: relative;
  z-index: 1;
`
const ImageWrapper = styled.div`
  position: relative;

  ${props => props.decoration &&
    `
    &:before {
      content: '';
      position: absolute;
      width: 5rem;
      height: 5rem;
      top: -15%;
      left: 15%;
      z-index: 3;
      border-radius: 50%;
      border: 2px solid #61CC7A;
    }
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 86%;
      left: -7%;
      top: 7%;
      background-color: #B50F7D;
    }
    `
  }
`
const lineDecorationStyles = theme => css`
  position: absolute;
  left: -23%;
  top: 13%;
  width: 2600px;
  max-width: none;
  z-index: 0;

  @media (${theme.max848}) {
    visibility: hidden;
  }
`