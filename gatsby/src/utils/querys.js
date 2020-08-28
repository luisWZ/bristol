// import { graphql } from "gatsby";

exports.COURSES_QUERY = `
  query COURSES_QUERY {
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
        price
        image {
          file {
            url
          }
        }
        courseDescription {
          title
          subheader
          subtitle
          text {
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  }
`