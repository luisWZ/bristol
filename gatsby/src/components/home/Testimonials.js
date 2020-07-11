import React from 'react'
import styled from '@emotion/styled'
import { BsChatSquareQuote } from 'react-icons/bs';
// import { MdFormatQuote } from 'react-icons/md';

import { Container, Title } from '../CssHelpers'
import testimonials from '../../content/home-testimonials.yaml'
import imgTmp from '../../images/nuestros-servicios.png'

// Styles =============================================
const TestimoniesWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-around;
`
const Testimony = styled.div`
  padding: 1.5rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
  max-width: 28.5rem;
  border-radius: ${props => props.theme.radius};
  border: 1px solid ${props => props.theme.blueGray};
  h4 {
    float: right;
  }
  p {
    width: 90%;
    &:before {
        content: "« ";
    }
    &:after {
        content: " »";
    }
  }
`
const Icon = styled(BsChatSquareQuote)`
  position: absolute;
  top: 0.8rem;
  right: 1.8rem;
  width: 6.6rem;
  fill: #dee3ed;
  z-index: -1;
`
// Components =========================================
const Testimonial = ({ testimony }) => (
  <Testimony>
    <p>{testimony.text}</p>
    <h4>{testimony.name}</h4>
    <img src={imgTmp} alt='' />
    <Icon />
  </Testimony>
)
export default function Testimonials() {
  return (
    <Container>
      <Title>Testimonios</Title>
      <TestimoniesWrapper>
        {/* {testimonials.map((testimony, index) => (
          <Testimonial testimony={testimony} key={`home_testimonial${index}`} />
        ))} */}
        <Testimonial testimony={testimonials[0]} key={`home_testimonial${0}`} />
        <Testimonial testimony={testimonials[1]} key={`home_testimonial${1}`} />
      </TestimoniesWrapper>
    </Container>
  )
}
