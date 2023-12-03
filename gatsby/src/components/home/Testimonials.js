import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaQuoteRight } from 'react-icons/fa'

import { Container, title } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'
import CssVariables from 'styles/CssVariables'
import { getRandomInt } from 'utils/helpers'
import IconBoy from 'svgs/testimonial-boy.svg'
import IconGirl from 'svgs/testimonial-girl.svg'

// Components =========================================
export default function Testimonials() {
  const data = useStaticQuery(HOME_TESTIMONIALS_QUERY).allHomeTestimonialsYaml
    .edges

  return (
    <ContainerStyles>
      <Title2 css={title}>Testimonios</Title2>
      <Slider {...{ ...settings, initialSlide: getRandomInt(data.length) }}>
        {data.map((testimony, index) => (
          <Testimony
            key={`home_testimonial${index}`}
            testimony={testimony.node}
          />
        ))}
      </Slider>
    </ContainerStyles>
  )
}
const Testimony = ({ testimony }) => (
  <TestimonyStyles>
    <p>{testimony.text}</p>
    <Cite>
      {testimony.icon === 'girl' ? <IconGirl /> : <IconBoy />}
      <h1 className='h4'>{testimony.name}</h1>
    </Cite>
    <Icon />
  </TestimonyStyles>
)
const settings = {
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  responsive: [
    {
      breakpoint: CssVariables.max848.split(' ').slice(-1).pop(),
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
}
// query ==============================================
const HOME_TESTIMONIALS_QUERY = graphql`
  query HOME_TESTIMONIALS_QUERY {
    allHomeTestimonialsYaml {
      edges {
        node {
          name
          text
          icon
        }
      }
    }
  }
`
// Styles =============================================
const width = `40px`
const ContainerStyles = styled(Container)`
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
const TestimonyStyles = styled.div`
  padding: 1.5rem;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  max-width: ${maxWidth};
  border-radius: ${props => props.theme.radius};

  @media (${({ theme }) => theme.min560}) {
    border: 1px solid ${props => props.theme.blueGray};
  }
  @media (${({ theme }) => theme.min848}) {
    max-width: 90%;
  }
  @media (${({ theme }) => theme.min1200}) {
    max-width: ${maxWidth};
  }

  h1 {
    margin-left: 1rem;
    margin-bottom: 0;
  }
  p {
    width: 90%;
    position: relative;
    z-index: 1;
    /* min-height: 120px; */

    &:before {
      content: '« ';
    }
    &:after {
      content: ' »';
    }
  }
`
const Cite = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled(FaQuoteRight)`
  position: absolute;
  top: 0.8rem;
  right: 1.8rem;
  width: 5.8rem;
  transform: scaleY(-1);
  fill: hsla(220, 29%, 90%, 0.4);
`
