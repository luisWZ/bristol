import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import SvgThumbnail from 'svgs/thumbnail-course-detail.svg'
import PictogramaDias from 'svgs/pictograma-dias.svg'
import PictogramaDuracion from 'svgs/pictograma-duracion.svg'
import PictogramaFechaInicio from 'svgs/pictograma-fecha-inicio.svg'
import PictogramaHorario from 'svgs/pictograma-horario.svg'
import PictogramaModalidad from 'svgs/pictograma-modalidad.svg'

export default function CourseFeatures() {
  return (
    <Sidebar>
      <SvgThumbnail css={css`width: 100%;`} />
      <InfoGrid>
        <Detail>
          <PictogramaDuracion />
          <p>
            <strong>Duración</strong>
            30 horas por nivel
          </p>
        </Detail>
        <Detail>
          <PictogramaDias />
          <p>
            <strong>Días</strong>
            Martes, miércoles y jueves
          </p>
        </Detail>
        <Detail>
          <PictogramaHorario />
          <p>
            <strong>Horario</strong>
            4:00 a 5:30 PM
          </p>
        </Detail>
        <Detail>
          <PictogramaModalidad />
          <p>
            <strong>Modalidad</strong>
            Presencial
          </p>
        </Detail>
        <Detail>
          <PictogramaFechaInicio />
          <p>
            <strong>Fecha de inicio</strong>
            17 de Septiembre de 2020
          </p>
        </Detail>
        <Cost>
          <p>
            Costo <strong>$1,234.56</strong>
          </p>
        </Cost>
      </InfoGrid>
    </Sidebar>
  )
}
// styles =============================================
const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  border-top: 4px solid ${props => props.theme.black};
  border-bottom: 4px solid ${props => props.theme.black};
`
const Sidebar = styled.div`
  grid-area: sidebar;
  background-color: ${props => props.theme.bgGray};
`
const Detail = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

  svg {
    margin-left: 9%;
    height: 35px;
    margin-top: 0.4rem;
  }
  strong {
    display: block;
  }
  p {
    margin-bottom: 0;
    margin-left: 6%;
    padding-right: 0.8rem;
    flex-grow: 1;
  }
`
const Cost = styled.div`
  padding-top: 1rem;
  grid-column: 1 / -1;
  border-top: 1px solid ${props => props.theme.black};

  p {
    margin-bottom: 1rem;
    margin-left: 6%;
  }
  strong {
    margin-left: 6%;
  }
`
