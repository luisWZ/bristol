import { useStaticQuery, graphql } from 'gatsby'

export const useCoursesQuery = () => {
  const { allContentfulCourses } = useStaticQuery(
    graphql`
      query COURSES_QUERY {
        allContentfulCourses(
          limit: 12
          sort: { fields: startingDate, order: DESC }
        ) {
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
  )
  return allContentfulCourses.nodes
}
