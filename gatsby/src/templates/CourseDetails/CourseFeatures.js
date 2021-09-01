import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

// import { formatMoney } from 'utils/helpers'
import PictogramaDias from 'svgs/pictograma-dias.svg'
import PictogramaDuracion from 'svgs/pictograma-duracion.svg'
import PictogramaFechaInicio from 'svgs/pictograma-fecha-inicio.svg'
import PictogramaHorario from 'svgs/pictograma-horario.svg'
import PictogramaModalidad from 'svgs/pictograma-modalidad.svg'

export default function CourseFeatures({
  sessionDate,
  sessionTime,
  image,
  startingDate,
  campus,
  price,
}) {
  return (
    <Sidebar>
      <img src={image.file.url} alt='' css={css`width: 100%;`} />
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
            {sessionDate}
          </p>
        </Detail>
        <Detail>
          <PictogramaHorario />
          <p>
            <strong>Horario</strong>
            {sessionTime}
          </p>
        </Detail>
        <Detail>
          <PictogramaModalidad />
          <p>
            <strong>Modalidad</strong>
            {campus !== 'Online' ? `Bristol ${campus}` : campus }
            {/* {campus} */}
          </p>
        </Detail>
        <Detail>
          <PictogramaFechaInicio />
          <p>
            <strong>Fecha de inicio</strong>
            {startingDate}
          </p>
        </Detail>
        {/* <Cost>
          <p>
            Costo <strong>{formatMoney(price)}</strong>
          </p>
        </Cost> */}
      </InfoGrid>
    </Sidebar>
  )
}
// styles =============================================
const InfoGrid = styled.div`
  display: grid;
  margin-top: -1px; // fix layout gap between image & info
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  border-top: 4px solid ${props => props.theme.black};
  border-bottom: 4px solid ${props => props.theme.black};
  background-color: ${props => props.theme.bgGray};
`
const Sidebar = styled.div`
  grid-area: sidebar;
`
const Detail = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;

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
// const Cost = styled.div`
//   padding-top: 1rem;
//   grid-column: 1 / -1;
//   border-top: 1px solid ${props => props.theme.black};

//   p {
//     margin-bottom: 1rem;
//     margin-left: 6%;
//   }
//   strong {
//     margin-left: 6%;
//     letter-spacing: 0.4px;
//   }
// `
