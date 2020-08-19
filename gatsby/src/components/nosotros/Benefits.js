import React from 'react'
import styled from '@emotion/styled'

import { Container } from 'styles/CssHelpers'
import TextIlustration from 'components/TextIlustration'
import PictogramaFilosofiaInstitucional from 'svgs/pictograma-filosofia-institucional.svg'
import PictogramaConversacion from 'svgs/pictograma-conversacion.svg'
import PictogramaAlumno from 'svgs/pictograma-alumno.svg'
import PictogramaEducacionOnline from 'svgs/pictograma-educacion-online.svg'
import PictogramaMedia from 'svgs/pictograma-media.svg'
import PictogramaDesarrollo from 'svgs/pictograma-desarrollo.svg'

export default function Benefits() {
  return (
    <Container paddingBig>
      <TextIlustration ilus2
        subtitle='El prestigio ganado a lo largo de más de 25 años ha hecho de Bristol Inglés Profesional un referente de calidad y excelencia en la enseñanza del inglés'>
          <p>Más importante aún, es el resultado de los miles de alumnos que han pasado por nuestras aulas que no sólo aprendieron inglés, sino que aprendieron de otras culturas, desarrollaron otras habilidades e hicieron amistades estrechas y duraderas.</p>
      </TextIlustration>
      <H1 className='h3'>Beneficios de nuestros cursos</H1>
      <BenefitsBox>
        <Benefit>
          <PictogramaFilosofiaInstitucional />
          <p>
            Una filosofía institucional basada en valores y que busca ayudar a
            nuestros alumnos a alcanzar objetivos académicos y profesionales a
            través del cumplimiento con estándares internacionales de dominio
            del inglés.
          </p>
        </Benefit>
        <Benefit>
          <PictogramaConversacion />
          <p>
            Un sistema de gestión de la calidad con el fin de asegurar
            resultados y una excelente atención a nuestros alumnos, padres de
            familia y público en general.
          </p>
        </Benefit>
        <Benefit>
          <PictogramaAlumno />
          <p>
            Un Modelo educativo y diseño curricular propios, orientados a
            preparar a nuestros alumnos para los retos del siglo XXI.
          </p>
        </Benefit>
        <Benefit>
          <PictogramaEducacionOnline />
          <p>
            Una calidad en el servicio que busca ofrecer una atención amable,
            considerada y personalizada y respuesta inmediata a las
            necesidades y requerimientos de todos nuestros alumnos y padres de
            familia.
          </p>
        </Benefit>
        <Benefit>
          <PictogramaMedia />
          <p>
            Una orientación hacia la mejora continua y la innovación que nos
            permita cada vez ser mejores en lo que hacemos.
          </p>
        </Benefit>
        <Benefit>
          <PictogramaDesarrollo />
          <p>
            Un Sistema de Desarrollo Profesional para todo nuestro personal.
          </p>
        </Benefit>
      </BenefitsBox>
    </Container>
  )
}
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
const Benefit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  svg {
    flex-basis: 4.375rem;
    margin-right: 2rem;
  }
  p {
    flex-grow: 1;
    flex-basis: 0;
    margin-bottom: 0;
  }

  @media (${props => props.theme.max420}) {
    p {
      flex-basis: 100%;
      margin-top: 1rem;
    }
  }
`