const path = require('path')
const { COURSES_QUERY } = require('./src/utils/coursesQueryTemplate')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(COURSES_QUERY)
  if (!Boolean(data)) throw new Error(`Error querying data from contentful`)

  data.allContentfulCourses.nodes.forEach(course => {
    createPage({
      path: `cursos/${course.slug}`,
      component: path.resolve(`./src/templates/CourseDetails/index.js`),
      context: course,
    })
  })
}
