import React from 'react'
import { graphql } from 'gatsby'

import HeroContent from 'components/HeroContent'
import IlustracionPatineta from 'svgs/ilustracion-patineta.svg'
import MainCourses from 'components/educacion-continua/MainCourses'
import CoursesAbroad from 'components/educacion-continua/CoursesAbroad'
import CoursesCompanies from 'components/educacion-continua/CoursesCompanies'

export default function EducacionContinua({ data }) {
  return (
    <>
      <HeroContent
        mainText='La mejor manera de volverse un experto es practicando'
        image={IlustracionPatineta}
        section='Educación Continua'
      />
      <MainCourses />
      <CoursesAbroad data={data.imageCursoExtranjero} />
      <CoursesCompanies data={data.imageEmpresa} />
    </>
  )
}
// query ==============================================
export const query = graphql`
  query IMAGES_EDUCACIONCONTINUA_QUERY {
    imageCursoExtranjero: file(relativePath: { eq: "image-curso-extranjero.png" }) {
      childImageSharp {
        fluid(maxWidth: 447) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    imageEmpresa: file(relativePath: { eq: "image-empresa.png" }) {
      childImageSharp {
        fluid(maxWidth: 563) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
