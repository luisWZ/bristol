import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'

import { Container, title } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'

// Components =========================================
export default function OurServices() {
  const data = useStaticQuery(HOME_SERVICES_QUERY).allHomeServicesYaml.edges

  return (
    <Container>
      <Title2 css={title}>Nuestros servicios</Title2>
      <ServicesWrapper>
        {data.map((service, index) => (
          <Service service={service.node} key={`our_services${index}`} />
        ))}
      </ServicesWrapper>
    </Container>
  )
}

const Service = ({ service }) => (
  <ServiceBox>
    <Icon src={service.svg.publicURL}></Icon>
    <Header>{service.title}</Header>
    <p>{service.text}</p>
    <Anchor href='/'>Saber más</Anchor>
  </ServiceBox>
)
// query ==============================================
const HOME_SERVICES_QUERY = graphql`
  query HOME_SERVICES_QUERY {
    allHomeServicesYaml {
      edges {
        node {
          svg {
            publicURL
          }
          text
          title
        }
      }
    }
  }
`
// Styles =============================================
const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const ServiceBox = styled.div`
    margin-bottom: 1.5rem;
    padding: 6vw;
    transition: background-color .24s ease-in-out;
    background-color: ${props => props.theme.blueLight};

    @media (${props => props.theme.min640}) {
      flex-basis: 48%;
      padding: 3vw;
      margin-left: auto;
      margin-right: auto;
    }
    @media (${props => props.theme.min960}) {
      flex-basis: 31%;
      padding: 1.5rem;
    }

    > * { color: white; }

    &:hover {
      cursor: pointer;
      background-color: ${props => props.theme.bristolBlue};

      a {
        background-color: white;
        color: ${props => props.theme.bristolBlue};
      }
    }
`
const Icon = styled.img`
  width: calc(48px + 2vw);
  height: calc(48px + 2vw);
  display: block;
  float: right;
  margin-bottom: 1rem;

  @media (${props => props.theme.min640}) {
    float: none;
  }
  @media (${props => props.theme.min768}) {
    width: 4rem;
    height: 4rem;
  }
`
const Header = styled(Title2)`
  margin-top: 1.25rem;
  margin-bottom: 0.8rem;
`
const Anchor = styled.a`
  border: 1px solid white;
  padding: 0.6rem;
  float: right;
  border-radius: ${props => props.theme.radius};

  @media (${props => props.theme.max480}) {
    width: 100%;
    text-align: center;
  }
`