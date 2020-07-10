import React from "react";
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Button } from '../CssHelpers'
import imgCursos from '../../images/home-cursos-generales.webp'
import imgExamenes from '../../images/home-examenes-internacionales.webp'

const mediaQuery = 'min-width: 40em'

const Section = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  padding-top: 2rem;

  > div:first-of-type {
    margin-bottom: 2rem;
  }
  @media(${mediaQuery}) {
    flex-direction: row;

    > div {
      flex-basis: 48vw;

      &:first-of-type { margin-bottom: 0; }
    }
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
  background-color: ${({ theme }) => theme.colors.bristolBlue};
  background-image: url(${({ image }) => image});
  > div {
    max-width: 250px;
  }
  h2 {
    color: white;
    text-shadow: 4px 3px 3px hsla(220, 50%, 20%, 0.6);
  }
`
const Course = ({ course }) => (
  <CourseBox image={course.image}>
    <div>
      <h2>{course.name}</h2>
      <Button as={Link} to={`/${course.link}`}>Conoce más</Button>
    </div>
  </CourseBox>
)

export default function FeaturedCourses() {
  return (
    <Section>
      {['Cursos Generales', 'Exámenes Internacionales'].map((name, index) => {
        const course =
          index === 0
            ? { link: 'cursos', image: imgCursos ,name: name}
            : { link: 'examenes', image: imgExamenes ,name: name}

        return <Course course={course} key={`featured_products${index}`} />
      })}
    </Section>
  );
}
