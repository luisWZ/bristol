import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { ContainerWhite, title } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'

// Components =========================================
export default function OurServices({ images }) {
  // query course info & add sharpImages
  const data = useStaticQuery(HOME_SERVICES_QUERY).allHomeServicesYaml.edges
    .map( ({ node }) => ({
      ...node,
      image: node.type === 'online' ? images.imageCursoOnline : images.imageCursoPresencial
    }))
  return (
    <ContainerWhite>
      <Title2 css={title}>Modalidades</Title2>
      <ServicesWrapper>
        {data.map((service, index) => <Service service={service} key={`our_services${index}`} /> )}
      </ServicesWrapper>
    </ContainerWhite>
  )
}
const Service = ({ service }) => (
  <ServiceBox>
    <Img fluid={service.image.childImageSharp.fluid} />
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
  margin-top: 1.25rem;
  margin-bottom: 0.8rem;
`