import React from 'react'
import { navigate } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Title2 } from 'styles/FontStyles'
import { ContainerWhite } from 'styles/CssHelpers'
import IconArrow from 'svgs/icon-arrow.svg'

// Components =========================================
export default function FeaturedCourses({ images }) {
  return (
    <ContainerWhite>
      <Course
        image={images.imageCursoInglesGeneral}
        link='cursos'
      >
        <Title2>Cursos de Inglés General</Title2>
        <p>
          Hacemos que el primer contacto de su hijo con el inglés sea una
          experiencia divertida, fácil y exitosa.
        </p>
      </Course>
      <Course inverse
        image={images.imageCentroExaminador}
        link='examenes'
      >
        <Title2>Centro Examinador Cambridge</Title2>
        <p>Obtén una certificación y acredita tu nivel de inglés a nivel internacional</p>
      </Course>
    </ContainerWhite>
  )
}
const Course = ({ children, image, inverse, link }) => (
  <CourseBox>
    <Img fluid={image.childImageSharp.fluid} css={theme => ImageStyles(theme)} />
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
    margin-top: 1.5rem;
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
const ImageStyles = theme => css`
  flex-grow: 1;
  order: 1;

  @media (${theme.max848}) {
    align-self: center;
    width: 80%;
  }
`
