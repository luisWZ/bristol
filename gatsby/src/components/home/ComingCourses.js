import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Container, Title, Button } from '../CssHelpers'
import courses from '../../content/home-courses.yaml'
import imgTmp from '../../images/bristol-ninos.webp'
// Styles definitions =================================
const CoursesWrapper = styled.div`
  @media (${({ theme }) => theme.mq.max560}) {
    max-width: 20rem;
  }
  @media (${({ theme }) => theme.mq.min560}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.gutter};
  }
  @media (${({ theme }) => theme.mq.min848}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3vw;
  }
`
const Button_ = styled(Button)`
  @media (${({ theme }) => theme.mq.min848}) {
    margin: 0.5rem 1rem 1rem;
    padding: 0.6rem 1.4rem;
    width: calc(100% - 2rem);
    border-radius: ${({ theme }) => theme.radius};
  }
`
const TextBox = styled.div`
  padding: 1rem 1rem 0.5rem;

  h3 {
    margin-bottom: calc(.75rem + 0.1vw);

    + p {
      color: ${({ theme }) => theme.colors.black};
    }
  }
  p {
    line-height: 2;
    margin-bottom: calc(0.5rem + 0.1vw);
    font-size: calc(0.96rem + 0.2vw);

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
const ImageLink = styled(Link)`
  display: block;
  position: relative;
  padding-bottom: 70%;
  height: 0;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: ${({ theme }) => theme.colors.bristolBlue};
  }
`
const CourseBox = styled.div`
  background-color: white;
  @media (${({ theme }) => theme.mq.max560}) {
    margin-bottom: 1.5rem;
  }
`
const Small = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  && { font-size: 90%; }
`
// Components =========================================
const Course = ({ course }) => {
  const { tag, title, dates, time, start, location } = course
  return (
    <CourseBox>
      <ImageLink to='/'>
        <img alt='' src={imgTmp} />
      </ImageLink>
      <TextBox>
        <Small>{tag}</Small>
        <h3>{title}</h3>
        <p>
          {dates}<br />
          {time}
        </p>
        <Small>
          Inicio: {start}<br />
          Campus: {location}
        </Small>
      </TextBox>
      <Button_ noRadius widthFull blue href='/'>Más info</Button_>
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
