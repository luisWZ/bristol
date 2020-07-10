import React from 'react'
import styled from '@emotion/styled'
import { Container, Title } from '../CssHelpers'
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
    background-color: ${({ theme }) => theme.colors.blueLight};

    @media (${({ theme }) => theme.mq.min640}) {
      flex-basis: 48%;
      padding: 3vw;
    }
    @media (${({ theme }) => theme.mq.min960}) {
      flex-basis: 31%;
      padding: 1.5rem;
    }

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.bristolBlue};
    }
    /* paint all elements white */
    > * { color: white; }
`
const IconFaux = styled.span`
  width: calc(54px + 2vw);
  height: calc(54px + 2vw); /* // once an image will be auto */
  display: block;
  border-radius: 50%;
  float: right;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.pink};

  @media (${({ theme }) => theme.mq.min640}) {
    float: none;
  }
`
const Header = styled.h3`
  margin-top: 1.25rem;
  margin-bottom: 0.8rem;
`
const Anchor = styled.a`
  text-decoration: underline;
`
// Component ==========================================
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
