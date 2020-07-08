import React from 'react'
import { Container, TitleCenter } from '../CssHelpers'
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
      <TitleCenter>Testimonios</TitleCenter>
      {testimonials.map((testimony, index) => (
        <Testimonial testimony={testimony} key={`home_testimonial${index}`} />
      ))}
    </Container>
  )
}
