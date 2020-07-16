import React from 'react'
import styled from '@emotion/styled'

import { Container, Title } from '../styles/CssHelpers'
import services from '../../content/home-services.yaml'

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
const IconFaux = styled.span`
  width: calc(54px + 2vw);
  height: calc(54px + 2vw); /* // once an image will be auto */
  display: block;
  border-radius: 50%;
  float: right;
  margin-bottom: 1rem;
  background-color: ${props => props.theme.pink};

  @media (${props => props.theme.min640}) {
    float: none;
  }
`
const Header = styled.h3`
  margin-top: 1.25rem;
  margin-bottom: 0.8rem;
`
const Anchor = styled.a`
  border: 1px solid white;
  padding: 0.6rem;
  float: right;
  border-radius: ${props => props.theme.radius};
`
// Components =========================================
const Service = ({ service }) => (
  <ServiceBox>
    <IconFaux></IconFaux>
    <Header>{service.title}</Header>
    <p>{service.text}</p>
    <Anchor href='/'>Saber más</Anchor>
  </ServiceBox>
)
export default function OurServices() {
  return (
    <Container>
      <Title>Nuestros servicios</Title>
      <ServicesWrapper>
        {services.map((service, index) => (
          <Service service={service} key={`our_services${index}`} />
        ))}
      </ServicesWrapper>
    </Container>
  )
}
