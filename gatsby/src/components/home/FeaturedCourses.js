import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Button } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'

// Components =========================================
export default function FeaturedCourses() {
  const data = useStaticQuery(FEATURED_COURSE_IMAGE)
  return (
    <Section>
      {courses.map((course, index) => (
        <Course key={`featured_courses${index}`}
          course={{ ...course, image: data[course.link].publicURL }}
        />
      ))}
    </Section>
  )
}
const courses = [
  { link: 'cursos', name: 'Cursos Generales' },
  { link: 'examenes', name: 'Exámenes Internacionales' },
]
const Course = ({ course: { image, name, link } }) => (
  <CourseBox>
    <img src={image} style={ImageBox} alt='' />
    <TextBox
      data-sal='slide-up'
      data-sal-duration='600'
      data-sal-delay='300'
      data-sal-easing='easeOutQuad'
    >
      <Title2 css={css`color: white; text-shadow: 4px 3px 3px hsla(220, 50%, 20%, 0.6);`}>{name}</Title2>
      <Button red='true' as={Link} to={`/${link}`}>
        Conoce más
      </Button>
    </TextBox>
  </CourseBox>
)
// query ==============================================
const FEATURED_COURSE_IMAGE = graphql`
  query FEATURED_COURSE_IMAGE {
    cursos: file(relativePath: { eq: "home-cursos-generales.svg" }) { publicURL }
    examenes: file(relativePath: { eq: "home-examenes-internacionales.svg" }) { publicURL }
  }
`
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
  max-width: 264px;
  z-index: 1;
`