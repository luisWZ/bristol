import React from 'react'
import styled from '@emotion/styled'
import { BsChevronLeft, BsChevronRight, BsChatSquareQuote } from 'react-icons/bs'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css"

import { Container, Title } from '../styles/CssHelpers'
import { getRandomInt } from '../../utils/helpers'
import CssVariables from '../styles/CssVariables'
import testimonials from '../../data/home-testimonials.yaml'
import imgTmp from '../../images/nuestros-servicios.png'

// Components =========================================
export default function Testimonials() {
  return (
    <Container_>
      <Title>Testimonios</Title>
        <Slider {...settings}>
          {testimonials.map((testimony, index) => (
            <Testimony
              key={`home_testimonial${index}`}
              {...{ testimony }}
            />
          ))}
        </Slider>
    </Container_>
  )
}
const Testimony = ({ testimony }) => (
  <Testimony_>
    <p>{testimony.text}</p>
    <h4>{testimony.name}</h4>
    <img src={imgTmp} alt='' />
    <Icon />
  </Testimony_>
)
const CustomArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <span {...props}>{children}</span>
)
const settings = {
  slidesToShow: 2,
  slidesToScroll: 2,
  // adaptiveHeight: true,
  initialSlide: getRandomInt(testimonials.length),
  prevArrow: <CustomArrow><BsChevronLeft /></CustomArrow>,
  nextArrow: <CustomArrow><BsChevronRight /></CustomArrow>,
  responsive: [
    {
      breakpoint: (CssVariables.max848.split(' ')).slice(-1).pop(),
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      },
    },
  ],
}
// Styles =============================================
const width = `40px`
const Container_ = styled(Container)`
  .slick {
    &-arrow {
      &:before {
        content: none;
      }
      background: transparent;
      border-radius: 50%;
      padding: 10px;
      transition: background-color 0.24s ease-in-out;
      width: ${width};
      height: ${width};
      border: 1px solid ${props => props.theme.blueLight};
      svg {
        width: 100%;
        height: 100%;
        fill: ${props => props.theme.blueLight};
      }
    }
    &-next {
      padding-right: 8px;
    }
    &-prev {
      padding-left: 8px;
    }
    &-prev,
    &-next {
      &:hover,
      &:focus {
        background-color: ${props => props.theme.blueLight};
        svg {
          fill: ${props => props.theme.bgGray};
        }
      }
    }
  }
`
const maxWidth = `28.5rem`
const Testimony_ = styled.div`
  padding: 1.5rem;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: ${maxWidth};
  border-radius: ${props => props.theme.radius};

  @media (${props => props.theme.min560}) {
    border: 1px solid ${props => props.theme.blueGray};
  }
  @media (${props => props.theme.min848}) {
    max-width: 90%;
  }
  @media (${props => props.theme.min1200}) {
    max-width: ${maxWidth};
  }

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
  fill: hsla(220, 29%, 90%, .6);
  z-index: -1;
`