import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'

import { Container, Feature } from 'styles/CssHelpers'
import TextIlustration from 'components/TextIlustration'
import PictogramaFilosofiaInstitucional from 'svgs/pictograma-filosofia-institucional.svg'
import PictogramaConversacion from 'svgs/pictograma-conversacion.svg'
import PictogramaAlumno from 'svgs/pictograma-alumno.svg'
import PictogramaEducacionOnline from 'svgs/pictograma-educacion-online.svg'
import PictogramaMedia from 'svgs/pictograma-media.svg'
import PictogramaDesarrollo from 'svgs/pictograma-desarrollo.svg'

export default function Benefits() {
  const data = useStaticQuery(IMAGE_QUERY)

  return (
    <Container paddingBig>
      <TextIlustration
        img563
        translateY
        subtitle='El prestigio ganado a lo largo de más de 25 años ha hecho de Bristol Inglés Profesional un referente de calidad y excelencia en la enseñanza del inglés'
        image={data.fachada.childImageSharp.fluid}
      >
        <p>
          Más importante aún, es el resultado de los miles de alumnos que han
          pasado por nuestras aulas que no sólo aprendieron inglés, sino que
          aprendieron de otras culturas, desarrollaron otras habilidades e
          hicieron amistades estrechas y duraderas.
        </p>
      </TextIlustration>
      <H1 className='h3'>Beneficios de nuestros cursos</H1>
      <BenefitsBox>
        <Feature>
          <PictogramaFilosofiaInstitucional />
          <p>
            Una filosofía institucional basada en valores y que busca ayudar a
            nuestros alumnos a alcanzar objetivos académicos y profesionales a
            través del cumplimiento con estándares internacionales de dominio
            del inglés.
          </p>
        </Feature>
        <Feature>
          <PictogramaConversacion />
          <p>
            Un sistema de gestión de la calidad con el fin de asegurar
            resultados y una excelente atención a nuestros alumnos, padres de
            familia y público en general.
          </p>
        </Feature>
        <Feature>
          <PictogramaAlumno />
          <p>
            Un Modelo educativo y diseño curricular propios, orientados a
            preparar a nuestros alumnos para los retos del siglo XXI.
          </p>
        </Feature>
        <Feature>
          <PictogramaEducacionOnline />
          <p>
            Una calidad en el servicio que busca ofrecer una atención amable,
            considerada y personalizada y respuesta inmediata a las necesidades
            y requerimientos de todos nuestros alumnos y padres de familia.
          </p>
        </Feature>
        <Feature>
          <PictogramaMedia />
          <p>
            Una orientación hacia la mejora continua y la innovación que nos
            permita cada vez ser mejores en lo que hacemos.
          </p>
        </Feature>
        <Feature>
          <PictogramaDesarrollo />
          <p>
            Un Sistema de Desarrollo Profesional para todo nuestro personal.
          </p>
        </Feature>
      </BenefitsBox>
    </Container>
  )
}
// query ==============================================
const IMAGE_QUERY = graphql`
  query IMAGE_QUERY {
    fachada: file(relativePath: { eq: "imagen-fachada.png" }) {
      childImageSharp {
        fluid(maxWidth: 563) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
// styles =============================================
const H1 = styled.h1`
  font-size: 1.25rem;
  line-height: 1.4;
  ${props =>
    props.smCenter &&
    `
    @media (${props.theme.max480}) {
      text-align: center;
    }
  `}

  * + & {
    margin-top: 1.5rem;
  }
`
const BenefitsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  grid-gap: 3rem;
`
