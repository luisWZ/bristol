import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'

// import { COURSES_QUERY } from 'utils/querys'
import { Container, title } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'
import Courses from 'components/Courses'

// Components =========================================
export default function ComingCoursesHome() {
  const data = useStaticQuery(COMING_COURSES_HOME_QUERY).allContentfulCourses.nodes

  return (
    <Container>
      <Title2 css={title}>Próximos cursos</Title2>
      <Courses {...{ data }} />
    </Container>
  )
}
// query ==============================================
const COMING_COURSES_HOME_QUERY = graphql`
  query COMING_COURSES_HOME_QUERY {
    allContentfulCourses(limit: 9, sort: { fields: startingDate, order: DESC }) {
      nodes {
        id
        slug
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