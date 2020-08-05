import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
// import { BsChevronLeft, BsChevronRight, BsChatSquareQuote } from 'react-icons/bs'
import { BsChatSquareQuote } from 'react-icons/bs'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css"

import { Container, Title } from '../styles/CssHelpers'
import { getRandomInt } from '../../utils/helpers'
import CssVariables from '../styles/CssVariables'
import testimonyImg from '../../images/nuestros-servicios.png'

// Components =========================================
export default function Testimonials() {
  const data = useStaticQuery(graphql`
    query HOME_TESTIMONIALS_QUERY {
      allHomeTestimonialsYaml {
        edges {
          node {
            name
            text
          }
        }
      }
    }
  `).allHomeTestimonialsYaml.edges
  return (
    <Container_>
      <Title>Testimonios</Title>
      <Slider {...{ ...settings, initialSlide: getRandomInt(data.length) }}>
        {data.map((testimony, index) => (
          <Testimony
            key={`home_testimonial${index}`}
            testimony={testimony.node}
          />
        ))}
      </Slider>
    </Container_>
  )
}
const Testimony = ({ testimony }) => (
  <Testimony_>
    <p>{testimony.text}</p>
    <h1 className='h4'>{testimony.name}</h1>
    <img src={testimonyImg} alt='' />
    <Icon />
  </Testimony_>
)
// const CustomArrow = ({ currentSlide, slideCount, children, ...props }) => (
//   <span {...props}>{children}</span>
// )
const settings = {
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  // prevArrow: <CustomArrow><BsChevronLeft /></CustomArrow>,
  // nextArrow: <CustomArrow><BsChevronRight /></CustomArrow>,
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
      border-radius: 50%;
      padding: 10px;
      transition: background-color 0.24s ease-in-out;
      z-index: 1;
      width: ${width};
      height: ${width};
      background-color: ${props => props.theme.bgGray};
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

  h1 {
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