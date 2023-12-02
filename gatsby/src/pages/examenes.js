import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import PageTitle from 'utils/PageTitle'
import CourseDescription from 'components/cursos/CourseDescription'
import TextIlustration from 'components/TextIlustration'
import { Section, Container, ButtonSaberMas } from 'styles/CssHelpers'

export default function Examenes({ data }) {
  return (
    <>
      <PageTitle>Exámenes Internacionales</PageTitle>
      <Section>
        <Container paddingBigTop>
          <TextIlustration
            textRight
            title='Preparación de Exámenes Internacionales'
            subtitle='Obtén una certificación de Cambridge Assessment English y acredita tu nivel de inglés a nivel internacional.'
            image={data.examenesInternacionales.childImageSharp.fluid}
          >
            <p>
              Tenemos una experiencia de más de 25 años preparando con éxito a
              nuestros alumnos para las certificaciones de Cambridge Englis ¿Qué
              hemos logrado a lo largo de todos esos años? tener una metodología
              y materiales propios para la preparación de exámenes; contar con
              un grupo de maestros especialistas en la preparación de exámenes,
              muchos de ellos además son examinadores orales autorizados por
              Cambridge y forman parte del equipo académico de nuestro Centro
              Examinador Autorizado por Cambridge Assessment English. De manera
              consecutiva, hemos recibido de Cambridge Assessment English el
              diploma como Centro de Preparación de más de 200 candidatos al
              año.
            </p>
          </TextIlustration>
          <Flex>
            <div>
              <p>
                Con nosotros no sólo estudias inglés, aprendes como enfrentar
                con éxito el examen y desarrollas habilidades que podrás aplicar
                a otras áreas de conocimiento o a otros idiomas. No somos
                simplemente una escuela que sigue un libro de texto al pie de la
                letra para preparar a sus alumnos, SOMOS LOS EXPERTOS.
              </p>
              <p>
                Con nosotros puedes preparar todos los exámenes de Cambridge
                Assessment English: A2 Key (Ket), B1 Preliminary (PET), B2 First
                (FCE), C1 Advanced (CAE),C2 Proficiency (CPE) y IELTS (General y
                Académico).
              </p>
              <ButtonSaberMas />
            </div>
            <Img fluid={data.diagram.childImageSharp.fluid} />
          </Flex>
        </Container>
      </Section>
      <CourseDescription examen calendar />
    </>
  )
}
// query ==================================================
export const EXAMENES_IMAGES_QUERY = graphql`
  query EXAMENES_IMAGES_QUERY {
    examenesInternacionales: file(
      relativePath: { eq: "image-examenes-internacionales.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600, traceSVG: { color: "#cdd7ea" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    diagram: file(relativePath: { eq: "cefr-diagram-december-2020.jpg" }) {
      childImageSharp {
        fluid(traceSVG: { color: "#cdd7ea" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
// styles =================================================
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;

  div:first-of-type {
    flex-grow: 666;
    flex-basis: 0;
    min-width: 19rem;
    margin-right: 2rem;
  }
  div:last-of-type {
    flex-basis: 49rem;
    flex-grow: 1;
  }
`
