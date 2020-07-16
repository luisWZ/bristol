import React from "react";
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Fade from 'react-reveal/Fade'

import { Button } from '../styles/CssHelpers'
import imgCursos from '../../images/home-cursos-generales.webp'
import imgExamenes from '../../images/home-examenes-internacionales.webp'

// Styles definitions =================================
const Section = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  padding-top: 2rem;
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
  background-position: center;
  background-size: cover;
  background-color: ${props => props.theme.bristolBlue };
  background-image: url(${({ image }) => image });

  > div {
    max-width: 250px;
  }
  h2 {
    color: white;
    text-shadow: 4px 3px 3px hsla(220, 50%, 20%, 0.6);
  }
`
// Components =========================================
const courses = [
  { link: 'cursos', image: imgCursos , name: 'Cursos Generales'},
  { link: 'examenes', image: imgExamenes , name: 'Exámenes Internacionales'},
]

const Course = ({ course }) => (
  <CourseBox image={course.image}>
    <div>
      <Fade>
        <h2>{course.name}</h2>
        <Button as={Link} to={`/${course.link}`}>Conoce más</Button>
      </Fade>
    </div>
  </CourseBox>
)
export default function FeaturedCourses() {
  return (
    <Section>
      {courses.map((course, index) => (
        <Course course={course} key={`featured_courses${index}`} />
      ))}
    </Section>
  );
}
