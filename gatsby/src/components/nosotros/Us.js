import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { Section, Container } from 'styles/CssHelpers'
import { Subtitle } from 'styles/FontStyles'
import TextIlustration from 'components/TextIlustration'
import IlustracionDocentes from 'svgs/ilustracion-docentes.svg'

export default function Us() {
  const data = useStaticQuery(DIAGRAM_QUERY).diagram.childImageSharp

  return (
    <Section borderBottom>
      <Container paddingBigTop>
        <Flex>
          <div>
            <Subtitle>Cursos generales</Subtitle>
            <p>Nuestros cursos están basados en el Marco Común Europeo de Referencia para las Lenguas (Common European Framework of Reference - CEFR) cuyos 6 niveles (A1 a C2) establecen los diferentes grados de desarrollo de las habilidades lingüísticas para los principales idiomas que se hablan en el mundo.</p>
          </div>
          <Img fluid={data.fluid} />
        </Flex>
      </Container>
      <Container>
        <TextIlustration
          textRight
          Ilustration={IlustracionDocentes}
          subtitle='Nuestros docentes'
          css={css`flex-basis: 100%;`}
        >
          <p>Todos nuestros docentes son profesionales de la enseñanza del inglés con estudios de posgrado además de contar con una amplia experiencia en el salón de clases.</p>
          <p>Además muchos de nuestros docentes son invigilators, supervisors y examinadores orales autorizados por Cambridge Assessment English, lo cual significa que cuentan con una sólida formación académica además de recibir capacitación constante por parte de dicha Institución en el conocimiento y la evaluación de los distintos niveles de dominio del idioma.</p>
          <p>Sabemos que la capacitación continua es un factor muy importante para mantenernos a la vanguardia en la enseñanza del inglés, por lo que Bristol cuenta con un programa de Desarrollo Profesional y un sistema de supervisión y observación de clases que nos permiten mantener un alto estándar de calidad en nuestros servicios.</p>
        </TextIlustration>
      </Container>
    </Section>
  )
}
// query ==============================================
const DIAGRAM_QUERY = graphql`
  query DIAGRAM_QUERY {
    diagram: file(relativePath: { eq: "tabla-cursos.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
// styles =============================================
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