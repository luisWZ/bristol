import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Container, Title } from '../CssHelpers'
import courses from '../../content/home-courses.yaml'

// Styles definitions =================================
const CoursesWrapper = styled.div`
  margin: 0;
`
const CourseBox = styled.div`
  background-color: white;
  margin-bottom: 1.5rem;
`
const Small = styled.div``
// Components =========================================
const Course = ({ course }) => {
  const { tag, title, dates, time, start, location } = course
  return (
    <CourseBox>
      <Link to='/'>
        <span className='img'></span>
      </Link>
      <p>{tag}</p>
      <h3>{title}</h3>
      <p>{dates}</p>
      <p>{time}</p>
      <p>Inicio: {start}</p>
      <p>Campus: {location}</p>
      <a href='/'>Más info</a>
    </CourseBox>
  )
}
export default function ComingCourses() {
  return (
    <Container>
      <Title>Próximos cursos</Title>
      <CoursesWrapper>
        {courses.map((course, index) => (
          <Course course={course} key={`home_course${index}`} />
        ))}
      </CoursesWrapper>
    </Container>
  )
}
