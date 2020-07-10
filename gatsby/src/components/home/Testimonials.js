import React from 'react'
import { Container, Title } from '../CssHelpers'
import testimonials from '../../content/home-testimonials.yaml'

const Testimonial = ({ testimony }) => (
  <div>
    <p>{testimony.text}</p>
    <h4>{testimony.name}</h4>
    <span className='img'></span>
  </div>
)

export default function Testimonials() {
  return (
    <Container>
      <Title>Testimonios</Title>
      {testimonials.map((testimony, index) => (
        <Testimonial testimony={testimony} key={`home_testimonial${index}`} />
      ))}
    </Container>
  )
}
