import React from 'react'
import styled from '@emotion/styled'
import {
  BsChevronLeft, BsChevronRight,
  BsChatSquareQuote } from 'react-icons/bs';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { Container, Title } from '../CssHelpers'
import testimonials from '../../content/home-testimonials.yaml'
import imgTmp from '../../images/nuestros-servicios.png'

// Styles =============================================
const arrowSize = 3;
const ContainerWithCarouselStyles = styled(Container)`
  .BrainhubCarousel {
    /* overflow: visible; */

    &__container {
      position: relative;
      /* padding: 0 ${arrowSize / 2}rem; */
    }
    &Item {
      /* opacity: 0.4;
      &--active {
        opacity: initial;
      } */
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
        @media (${props => props.theme.max640}) {
          display: none;
          z-index: -1;
        }
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
    &__arrow--disable {
      background: gray;
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
  fill: hsla(220, 29%, 90%, .6);
  z-index: -1;
`
// Components =========================================
export default function Testimonials() {
  return (
    <ContainerWithCarouselStyles>
      <Title>Testimonios</Title>
      <Carousel
        arrowLeft={<BsChevronLeft />}
        arrowRight={<BsChevronRight />}
        addArrowClickHandler
        arrows
        centered
        clickToChange
      >
        {testimonials.map((testimony, index) => (
          <Testimony key={`home_testimonial${index}`}>
            <p>{testimony.text}</p>
            <h4>{testimony.name}</h4>
            <img src={imgTmp} alt='' />
            <Icon />
          </Testimony>
        ))}
      </Carousel>
    </ContainerWithCarouselStyles>
  )
}