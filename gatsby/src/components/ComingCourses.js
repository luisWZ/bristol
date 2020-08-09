import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'
import { Container, Title } from './styles/CssHelpers'
import Courses from './Courses'

// Components =========================================
export default function ComingCourses() {
  const data = useStaticQuery(graphql`
    query COMING_COURSES_QUERY {
      allContentfulCourses(limit: 3, sort: { fields: startingDate }) {
        nodes {
          id
          courseType
          courseName
          sessionDate
          sessionTime
          startingDate(formatString: "D [de] MMMM YYYY", locale: "es-MX")
          campus
          image {
            file {
              url
            }
          }
        }
      }
    }
  `).allContentfulCourses.nodes

  return (
    <Container>
      <Title>Próximos cursos</Title>
      <Courses {...{ data }} />
    </Container>
  )
}