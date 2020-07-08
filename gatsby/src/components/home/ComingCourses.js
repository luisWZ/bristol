import React from 'react'
import { Container, TitleCenter } from '../CssHelpers'
import courses from '../../content/home-courses.yaml'

const Course = ({ course }) => {
  const { tag, title, dates, time, start, location } = course
  return (
    <div>
      <span className='img'></span>
      <small>{tag}</small>
      <h3>{title}</h3>
      <p>{dates}</p>
      <p>{time}</p>
      <p>Inicio: {start}</p>
      <p>Campus: {location}</p>
      <a href='/'>Más info</a>
    </div>
  )
}

export default function ComingCourses() {
  return (
    <Container>
      <TitleCenter>Próximos cursos</TitleCenter>
      {courses.map((course, index) => (
        <Course course={course} key={`home_course${index}`} />
      ))}
    </Container>
  )
}
