import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Body2 } from 'styles/FontStyles'
import { Container, Underline } from 'styles/CssHelpers'

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

export default function CourseDescription({ children, bgWhite, border, kids, examen }) {
  const lecturaExtensivaOrder = () => {
    if (kids) return css`order: -1;`
    else if (examen) return css`order: 1;`
    return null
  }

  return (
    <Section {...{ bgWhite }} {...{ border }}>
      <Container as='div'>
        {children}
        <Body2>CARACTERÍSTICAS DEL CURSO</Body2>
        <Grid>
          <Feature css={css`order: -2;`}>
            <PictogramaGruposHomogeneos />
            <p>Grupos homogéneos por edad y nivel</p>
          </Feature>
          {!kids && (
            <Feature css={examen && css`order: -2;`}>
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
          <Feature css={kids && css`order: 1;`}>
            <PictogramaSeguimiento />
            <p>Seguimiento individual continuo por parte del maestro y coordinación académica</p>
          </Feature>
          <Feature css={lecturaExtensivaOrder}>
            <PictogramaLecturas />
            <p>Programa de Lectura Extensiva</p>
          </Feature>
          {examen && (
            <Feature css={css``}>
              <PictogramaExamenPractica />
              <p>Exámenes de práctica (mock exams)</p>
            </Feature>)
          }
          <Feature css={css``}>
            <PictogramaRecursosAula />
            <p>Integración de recursos tecnológicos en el aula</p>
          </Feature>
          {!examen && (
            <Feature css={kids && css`order: -2;`}>
              <PictogramaCertificacion />
              <p>Preparación para certificaciones de Cambridge Assessment English</p>
            </Feature>
          )}
          <Feature css={examen && css`order: -1;`}>
            <PictogramaTalleresGratuitos />
            <p>Talleres gratuitos</p>
          </Feature>
        </Grid>
        <Underline to='/nosotros'>
          Consulte nuestro sistema de niveles
        </Underline>
      </Container>
    </Section>
  )
}
const Section = styled.section`
  padding-bottom: 6rem;
  padding-top: 6rem;
  ${props => props.bgWhite && `
    background-color: white;
  `}
  ${props => props.border && `
    border-bottom: 1px solid ${props.theme.gray};
  `}
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`
const Feature = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  svg {
    flex-basis: 4.25rem;
    margin-right: 2rem;
  }
  p {
    margin-bottom: 0;
    flex: 1;
  }
`


