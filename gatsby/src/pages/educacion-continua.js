import React from 'react'
import { graphql } from 'gatsby'

import PageTitle from 'utils/PageTitle'
import HeroContent from 'components/HeroContent'
import IlustracionPatineta from 'svgs/ilustracion-patineta.svg'
import MainCourses from 'components/educacion-continua/MainCourses'
import CoursesAbroad from 'components/educacion-continua/CoursesAbroad'
import CoursesCompanies from 'components/educacion-continua/CoursesCompanies'

const section = 'Educación Continua'
const description = 'La mejor manera de volverse un experto es practicando'

export default function EducacionContinua({ data }) {
  return (
    <>
      <PageTitle pageTitle={section} description={description} />
      <HeroContent
        mainText={description}
        image={IlustracionPatineta}
        section={section}
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
    imageCursoExtranjero: file(
      relativePath: { eq: "image-curso-extranjero.png" }
    ) {
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
