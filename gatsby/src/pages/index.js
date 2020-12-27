import React from 'react'
import { graphql } from 'gatsby'

import HeroContent from 'components/HeroContent'
import ComingCourses from 'components/ComingCourses'
import FeaturedCourses from 'components/home/FeaturedCourses'
import OurServices from 'components/home/OurServices'
import Testimonials from 'components/home/Testimonials'
import BottomImage from 'components/home/BottomImage'
import IlustracionSittingGirl from 'svgs/ilustracion-sitting-girl.svg'

export default function Home({ data }) {
  return (
    <>
      <HeroContent
        gray
        mainText='Speak a new language, discover a new world'
        image={IlustracionSittingGirl}
        home={
          {
            description: 'Somos profesionales en la enseñanza de inglés. Nuestros maestros cuentan con grados académicos y certificaciones internacionales como maestros de inglés así como con una gran experiencia.',
            button: 'Nuestros cursos',
            buttonLink: '/cursos',
          }
        }
      />
      <FeaturedCourses images={data} />
      <ComingCourses titleText='Próximos cursos' homeSection />
      <OurServices images={data} />
      <Testimonials />
      <BottomImage />
    </>
  )
}
// query ==============================================
export const query = graphql`
  query IMAGES_QUERY {
    imageCursoInglesGeneral: file(relativePath: { eq: "curso-de-ingles-general.png" }) {
      childImageSharp {
        fluid(maxWidth: 780, quality:80, traceSVG: { color: "#cdd7ea" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    imageCentroExaminador: file(relativePath: { eq: "centro-examinador-cambridge.png" }) {
      childImageSharp {
        fluid(maxWidth: 897, quality:80, traceSVG: { color: "#cdd7ea" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    imageCursoPresencial: file(relativePath: { eq: "cursos-presencial.png" }) {
      childImageSharp {
        fluid(maxWidth: 447, quality: 92, traceSVG: { color: "#cdd7ea" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    imageCursoOnline: file(relativePath: { eq: "cursos-online.png" }) {
      childImageSharp {
        fluid(maxWidth: 447, quality: 92, traceSVG: { color: "#cdd7ea" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`