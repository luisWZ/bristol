import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { BsChevronLeft, BsChevronRight, BsChatSquareQuote } from 'react-icons/bs';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { Container, Title } from '../CssHelpers'
import testimonialData from '../../content/home-testimonials.yaml'
import imgTmp from '../../images/nuestros-servicios.png'

// Styles =============================================
const arrowSize = 3.4;
const ContainerWithCarouselStyles = styled(Container)`
  .BrainhubCarousel {
    overflow: visible;

    &__container {
      position: relative;
      padding: 0 ${arrowSize / 2}rem;
    }
    &Item {
      opacity: 0.4;
      &--active {
        opacity: initial;
      }
    }
    &__custom {
      &Arrows {
        cursor: pointer;
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: center;
        border-radius: 50%;
        transition: background-color .24s ease-in-out;
        width: ${arrowSize}rem;
        height: ${arrowSize}rem;
        background: ${props => props.theme.blueLight};
        &:hover {
          background: ${props => props.theme.bristolBlue};
        }
        svg {
          width: 60%;
          color: white;
        }
      }
      &-arrowLeft {
        left: 0;

        svg {
          margin-left: -4px;
        }
      }
      &-arrowRight {
        right: 0;

        svg {
          margin-right: -4px;
        }
      }
    }
  }
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
    <ContainerWithCarouselStyles>
      <Title>Testimonios</Title>
      <Carousel
        slidesPerPage={2}
        arrowLeft={<BsChevronLeft />}
        arrowRight={<BsChevronRight />}
        addArrowClickHandler
        infinite
        arrows
        centered
        breakpoints={{
          960: {
            slidesPerPage: 1,
            infinite: true,
          },
          640: {
            slidesPerPage: 1,
            infinite: true,
            arrows: false,
          },
        }}
      >
        {testimonialData.map((testimony, index) => (
          <Testimonial testimony={testimony} key={`home_testimonial${index}`} />
        ))}
      </Carousel>
    </ContainerWithCarouselStyles>
  )
}