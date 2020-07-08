import React from 'react'
import { Container, TitleCenter } from '../CssHelpers'
import services from '../../content/home-services.yaml'

const Service = ({ service }) => (
  <div>
    <span className='img'></span>
    <h3>{service.title}</h3>
    <p>{service.text}</p>
    <a href='/'>Saber más</a>
  </div>
)

export default function OurServices() {
  return (
    <Container>
      <TitleCenter>Nuestros servicios</TitleCenter>
      {services.map((service, index) => (
        <Service service={service} key={`home_service${index}`} />
      ))}
    </Container>
  )
}
