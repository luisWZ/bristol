import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'

import { Container, Title } from 'styles/CssHelpers'
import Courses from 'components/Courses'

// Components =========================================
export default function ComingCoursesHome() {
  const data = useStaticQuery(COMING_COURSES_HOME_QUERY).allContentfulCourses.nodes

  return (
    <Container>
      <Title>Próximos cursos</Title>
      <Courses {...{ data }} />
    </Container>
  )
}
// query ==============================================
const COMING_COURSES_HOME_QUERY = graphql`
  query COMING_COURSES_HOME_QUERY {
    allContentfulCourses(limit: 9, sort: { fields: startingDate }) {
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
`