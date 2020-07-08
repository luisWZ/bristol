import React from "react";
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import imgCursos from '../../images/home-cursos-generales.webp'
import imgExamenes from '../../images/home-examenes-internacionales.webp'

const Course = ({ course }) => (
  <div css={css`
    flex-basis: 46%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${course.image});
  `}>
    <div css={css`width: 50%;`}>
      <h1>{course.name}</h1>
      <Link to={`/${course.link}`}>Conoce más</Link>
    </div>
  </div>
)

export default function FeaturedCourses() {
  return (
    <section
      css={css`
        display: flex;
        justify-content: space-between;
        padding-top: 2rem;
    `}>
      {['Cursos Generales', 'Exámenes Internacionales'].map((name, index) => {
        const course =
          index === 0
            ? { link: 'cursos', image: imgCursos ,name: name}
            : { link: 'examenes', image: imgExamenes ,name: name}

        return <Course course={course} key={`main_products${index}`} />
      })}
    </section>
  );
}
