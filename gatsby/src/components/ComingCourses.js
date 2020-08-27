import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'
import { css } from '@emotion/core'

import { Container, title } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'
import Courses from './Courses'

// Components =========================================
export default function ComingCourses() {
  const data = useStaticQuery(COMING_COURSES_QUERY).allContentfulCourses.nodes
  return (
    <Container css={css`margin-bottom: 3rem; padding-bottom: 0;`}>
      <Title2 css={title}>Próximos cursos</Title2>
      <Courses {...{ data }} commingCourses />
    </Container>
  )
}
// query ==============================================
const COMING_COURSES_QUERY = graphql`
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
`