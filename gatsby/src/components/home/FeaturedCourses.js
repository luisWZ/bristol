import React from 'react'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Title } from 'styles/FontStyles'
import { ContainerWhite } from 'styles/CssHelpers'
import IconArrow from 'svgs/icon-arrow.svg'
import LineaMagenta from 'svgs/linea-magenta.svg'
import LineaVioleta from 'svgs/linea-violeta.svg'

// Components =========================================
export default function FeaturedCourses({ images }) {
  return (
    <ContainerWhite>
      <Course
        image={images.imageCursoInglesGeneral}
        link='cursos'
      >
        <Title>Cursos de Inglés General</Title>
        <p>
          Hacemos que el primer contacto de su hijo con el inglés sea una
          experiencia divertida, fácil y exitosa.
        </p>
      </Course>
      <Course inverse
        image={images.imageCentroExaminador}
        link='examenes'
      >
        <Title>Centro Examinador Cambridge</Title>
        <p>Obtén una certificación y acredita tu nivel de inglés a nivel internacional.</p>
      </Course>
    </ContainerWhite>
  )
}
const Course = ({
children,
image,
inverse,
link,
}) => (
  <CourseBox>
    <ImgWrapper  {...{inverse}}>
      {inverse ? <DecoratorVioleta /> : <DecoratorMagenta />}
      <Img fluid={image.childImageSharp.fluid} css={_ => imageStyles()} />
    </ImgWrapper>
    <TextBox {...{inverse}} onClick={() => navigate(`/${link}`)}>
      {children}
      <IconArrow />
    </TextBox>
  </CourseBox>
)
// Styles definitions =================================
const CourseBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10rem;

  &:last-of-type {
    margin-top: 16rem;
  }

  @media (${props => props.theme.max1400}) {
    &:last-of-type {
      margin-top: 16vw;
    }
  }
  @media (${props => props.theme.max848}) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    flex-direction: column;
    max-width: 35rem;
  }
  @media (${props => props.theme.max480}) {
    margin-top: 1rem;
  }
  @media (${props => props.theme.min848}) {
    &:last-of-type {
      margin-bottom: 6rem;
    }
  }
`
const TextBox = styled.div`
  cursor: pointer;
  order: 2;
  transition: background-color .25s ease-in;

  @media (${props => props.theme.max848}) {
    text-align: center;
    margin-top: 3.5rem;
    padding-left: 10%;
    padding-right: 10%;
  }
  @media (${props => props.theme.max352}) {
    padding-left: 0;
    padding-right: 0;
  }
  @media (${props => props.theme.min848}) {
    padding: 2rem;
    max-width: 22rem;
    transform: translateY(-2rem);
    order: ${props => props.inverse ? '0' : '2'};
    ${props => props.inverse ? 'margin-right: 1.5rem' : 'margin-left: 1.5rem' };
  }

  svg {
    transition: transform .4s ease-in-out;
    @media (${props => props.theme.max848}) {
      display: none;
    }
  }

  @media (${props => props.theme.min848}) {
    &:hover {
      background-color: ${props => props.theme.bgGray};

      svg {
        transform: translateX(160%);
      }
    }
  }
`
const ImgWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  order: 1;

  @media (${props => props.theme.max848}) {
    align-self: center;
    width: 80%;
  }

  &::after {
    content: "";
    position: absolute;
    width: 60%;
    height: 73%;
    bottom: -10%;
    background-color: ${props => props.inverse ? '#658FF8' : '#F2D18D'};
    z-index: 0;
    ${props => props.inverse
      ? 'left: 25%;'
      : 'right: 25%;'
    }
  }

  > div {
    ${props => props.inverse
      ? 'margin-right: auto;'
      : 'margin-left: auto;'
    }
  }
`
const imageStyles = _ => css`
  z-index: 1;
  width: 70%;
  align-content: flex-end;
`
const DecoratorMagenta = styled(LineaMagenta)`
  position: absolute;
  top: 70%;
  left: -10%;
  z-index: 2;
  height: auto;
  width: 80rem;
  max-width: 100vw;
  pointer-events: none;
`
const DecoratorVioleta = styled(LineaVioleta)`
  position: absolute;
  top: -24%;
  left: 0;
  z-index: 2;
  width: 66%;
  height: auto;
  pointer-events: none;
`
