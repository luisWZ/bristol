import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Title, Container } from 'styles/CssHelpers'
import Courses from 'components/Courses'

export default function RecommendedCourses() {
  const data = useStaticQuery(RECOMMENDED_COURSES_QUERY).allContentfulCourses.nodes
  return (
    <Container css={theme => css`
      padding-bottom: ${theme.sectionSpace};
      @media (${theme.max960}) {
        > div > div:last-of-type {
          display: none;
        }
      }
    `}>
      <Title>Cursos recomendados</Title>
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