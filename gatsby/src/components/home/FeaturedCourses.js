import React from "react";
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Button } from '../styles/CssHelpers'
import cursosSvg from '../../images/home-cursos-generales.svg'
import examenesSvg from '../../images/home-examenes-internacionales.svg'

// Components =========================================
const courses = [
  { link: 'cursos', name: 'Cursos Generales', image: cursosSvg},
  { link: 'examenes', name: 'Exámenes Internacionales', image: examenesSvg},
]

const Course = ({ course }) => (
  <CourseBox>
    <img src={course.image} style={ImageBox} alt='' />
    <TextBox
      data-sal='slide-up'
      data-sal-duration='600'
      data-sal-delay='300'
      data-sal-easing='easeOutQuad'
    >
      <h2>{course.name}</h2>
      <Button as={Link} to={`/${course.link}`}>
        Conoce más
      </Button>
    </TextBox>
  </CourseBox>
)

export default function FeaturedCourses() {
  return (
    <Section>
      {courses.map((course, index) => (
        <Course key={`featured_courses${index}`} course={course}
          image={course.link}
        />
      ))}
    </Section>
  );
}
// Styles definitions =================================
const Section = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  padding-top: 5rem;
  @media(${props => props.theme.min640}) {
    flex-direction: row;

    > div {
      flex-basis: 48%;

      &:first-of-type { margin-bottom: 0; }
    }
  }
  @media(${props => props.theme.min640}) {
    margin-right: auto;
    margin-left: auto;
    max-width: 86rem;
  }
  > div:first-of-type {
    margin-bottom: 2rem;
  }
`
const CourseBox = styled.div`
  height: 32vw;
  min-height: 320px;
  max-height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${props => props.theme.purple };
`
const ImageBox = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  top: '0',
  left: '0',
}
const TextBox = styled.div`
  max-width: 250px;
  z-index: 1;

  h2 {
    color: white;
    text-shadow: 4px 3px 3px hsla(220, 50%, 20%, 0.6);
  }
`