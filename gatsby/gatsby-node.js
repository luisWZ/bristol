const path = require('path')
const { COURSES_QUERY } = require('./src/utils/querys')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(COURSES_QUERY)

  if (result.erros) throw new Error(result.erros)

  result.data.allContentfulCourses.nodes.forEach(course => {
    // console.log(course)
    createPage({
      path: `cursos/${course.slug}`,
      component: path.resolve(`./src/templates/CourseDetails/index.js`),
      context: course,
    })
  })
}