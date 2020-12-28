const path = require('path')
const { COURSES_QUERY } = require('./src/utils/coursesQueryTemplate')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(COURSES_QUERY)

  if (data.erros) throw new Error(data.erros)
  // if (data?.erros) throw new Error(data.erros) //es2020

  data.allContentfulCourses.nodes.forEach(course => {
    createPage({
      path: `cursos/${course.slug}`,
      component: path.resolve(`./src/templates/CourseDetails/index.js`),
      context: course,
    })
  })
}