import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import ComingCourses from 'components/ComingCourses'
import { Body2 } from 'styles/FontStyles'
import { Container, Anchor, Feature } from 'styles/CssHelpers'

import PictogramaGruposHomogeneos from 'svgs/pictograma-grupos-homogeneos.svg'
import PictogramaPlataforma from 'svgs/pictograma-plataforma.svg'
import PictogramaDiploma from 'svgs/pictograma-diploma.svg'
import PictogramaTutorias from 'svgs/pictograma-tutorias.svg'
import PictogramaSeguimiento from 'svgs/pictograma-seguimiento.svg'
import PictogramaLecturas from 'svgs/pictograma-lecturas.svg'
import PictogramaExamenPractica from 'svgs/pictograma-examen-practica.svg'
import PictogramaRecursosAula from 'svgs/pictograma-recursos-aula.svg'
import PictogramaCertificacion from 'svgs/pictograma-certificacion.svg'
import PictogramaTalleresGratuitos from 'svgs/pictograma-talleres-gratuitos.svg'
import PictogramaNiveles from 'svgs/pictograma-niveles.svg'
import PictogramaDias from 'svgs/pictograma-dias.svg'

export default function CourseDescription({
  children,
  bgWhite,
  border,
  kids,
  examen,
  last,
  calendar,
}) {
  const lecturaExtensivaOrder = () => {
    if (kids)
      return css`
        order: -1;
      `
    else if (examen)
      return css`
        order: 1;
      `
    return null
  }

  return (
    <Section {...{ bgWhite }} {...{ border }} {...{ last }}>
      <Container as='div'>
        {children}
        <Body2Styles>Características del curso</Body2Styles>
        <Grid>
          <Feature
            css={css`
              order: -2;
            `}
          >
            <PictogramaGruposHomogeneos />
            <p>Grupos homogéneos por edad y nivel</p>
          </Feature>
          {!kids && (
            <Feature
              css={
                examen &&
                css`
                  order: -2;
                `
              }
            >
              <PictogramaPlataforma />
              <p>Uso de plataforma</p>
            </Feature>
          )}
          {!kids && !examen && (
            <Feature css={css``}>
              <PictogramaDiploma />
              <p>Diploma con validez oficial SEP</p>
            </Feature>
          )}
          <Feature css={css``}>
            <PictogramaTutorias />
            <p>Servicio de tutorías personalizadas presenciales y en línea</p>
          </Feature>
          <Feature
            css={
              kids &&
              css`
                order: 1;
              `
            }
          >
            <PictogramaSeguimiento />
            <p>
              Seguimiento individual continuo por parte del maestro y
              coordinación académica
            </p>
          </Feature>
          <Feature css={lecturaExtensivaOrder}>
            <PictogramaLecturas />
            <p>Programa de Lectura Extensiva</p>
          </Feature>
          {examen && (
            <Feature css={css``}>
              <PictogramaExamenPractica />
              <p>Exámenes de práctica (mock exams)</p>
            </Feature>
          )}
          <Feature css={css``}>
            <PictogramaRecursosAula />
            <p>Integración de recursos tecnológicos en el aula</p>
          </Feature>
          {!examen && (
            <Feature
              css={
                kids &&
                css`
                  order: -2;
                `
              }
            >
              <PictogramaCertificacion />
              <p>
                Preparación para certificaciones de Cambridge Assessment English
              </p>
            </Feature>
          )}
          <Feature
            css={
              examen &&
              css`
                order: -1;
              `
            }
          >
            <PictogramaTalleresGratuitos />
            <p>Talleres gratuitos</p>
          </Feature>
        </Grid>
      </Container>

      <ComingCourses simple />

      <Container>
        {!calendar && (
          <Anchor to='/nosotros'>
            <PictogramaNiveles /> Consulte nuestro sistema de niveles
          </Anchor>
        )}
        {!calendar && examen && (
          <Anchor to='/centro-examinador-cambridge'>
            ¿Quieres conocer más sobre cada uno de los exámenes de certificación
            internacional?
          </Anchor>
        )}
        {calendar && (
          <Anchor to='/centro-examinador-cambridge'>
            <PictogramaDias /> Calendario de exámenes internacionales
          </Anchor>
        )}
      </Container>
    </Section>
  )
}
// styles =================================================
const Section = styled.section`
  @media (${props => props.theme.min848}) {
    padding-top: 5rem;
    padding-bottom: ${props => (props.last ? 2 : 5)}rem;
  }
  ${props => props.bgWhite && `background-color: white; `}
  ${props => props.border && `border-bottom: 1px solid ${props.theme.gray}; `}
`
const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  @media (${props => props.theme.min320}) {
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  }
`
const Body2Styles = styled(Body2)`
  @media (${props => props.theme.max848}) {
    margin-top: 1.5rem;
  }
`
