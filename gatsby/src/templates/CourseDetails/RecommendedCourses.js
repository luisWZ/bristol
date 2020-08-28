import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'

import { Container, title } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'
import Courses from 'components/Courses'

export default function RecommendedCourses() {
  const data = useStaticQuery(RECOMMENDED_COURSES_QUERY).allContentfulCourses.nodes

  return (
    <Container css={containerStyles}>
      <Title2 css={title}>Cursos recomendados</Title2>
      <Courses {...{ data }} />
    </Container>
  )
}
// query ==============================================
const RECOMMENDED_COURSES_QUERY = graphql`
  query RECOMMENDED_COURSES_QUERY {
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
// styles =============================================
const containerStyles = theme => css`
  padding-bottom: ${theme.sectionSpace};
  @media (${theme.max960}) {
    > div > div:last-of-type {
      display: none;
    }
  }
`