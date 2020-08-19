import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { Container, Button } from 'styles/CssHelpers'
import SvgThumbnail from 'svgs/thumbnail-course-detail.svg'
import PictogramaDias from 'svgs/pictograma-dias.svg'
import PictogramaDuracion from 'svgs/pictograma-duracion.svg'
import PictogramaFechaInicio from 'svgs/pictograma-fecha-inicio.svg'
import PictogramaHorario from 'svgs/pictograma-horario.svg'
import PictogramaModalidad from 'svgs/pictograma-modalidad.svg'

export default function CourseDetails() {
  return (
    <section
      css={css`
        background-color: white;
      `}
    >
      <ContainerGrid as='div'>
        <TitleBox>
          <TitleText>
            <h1>Pet for Schools</h1>
            <p>Preliminary English Test</p>
          </TitleText>
          <Button_>Inscríbete</Button_>
        </TitleBox>
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
                <strong>Duración</strong>
                30 horas por nivel
              </p>
            </Detail>
            <Detail>
              <PictogramaFechaInicio />
              <p>
                <strong>Duración</strong>
                30 horas por nivel
              </p>
            </Detail>
            <Detail>
              <PictogramaHorario />
              <p>
                <strong>Duración</strong>
                30 horas por nivel
              </p>
            </Detail>
            <Detail>
              <PictogramaModalidad />
              <p>
                <strong>Duración</strong>
                30 horas por nivel
              </p>
            </Detail>
            <Cost>
              <p>
                Costo <strong>$1,234.56</strong>
              </p>
            </Cost>
          </InfoGrid>
        </Sidebar>
        <Main>
          <h1 className='h3'>
            Aprende a comunicarte eficazmente en inglés, disfruta más de tus
            viajes y garantiza el éxito en tu vida académica y profesional.
          </h1>
          <p>
            Desde 2008, Bristol Inglés Profesional es Centro Examinador
            Autorizado por Cambridge Assessment English para la administración
            y aplicación de sus exámenes de inglés en el Estado de Veracruz y
            la región de Tampico en el Estado de Tamaulipas.
          </p>
          <p>
            Somos un Centro Examinador abierto, es decir, que estamos
            autorizados para llevar a cabo exámenes para candidatos que se
            preparan en otros colegios así como candidatos independientes.Como
            Centro Examinador Autorizado, somos inspeccionados directamente
            por Cambridge Assessment English para asegurar el cumplimiento de
            exigentes normas de seguridad y calidad.
          </p>
          <p>
            Estudios con validez oficial Clave SEP 30PBT0437R y 30PBT0259E
          </p>
        </Main>
      </ContainerGrid>
    </section>
  )
}
// styles =============================================
const margin = `1.5rem`

const ContainerGrid = styled(Container)`
  padding-top: 10rem;
  padding-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'title title title' 'sidebar main main';
  grid-gap: 0 ${props => props.theme.gap};

  @media (${props => props.theme.max768}) {
    grid-template-areas: 'title title title' 'sidebar sidebar sidebar' 'main main main';
    grid-gap: 2rem 0;
  }
`
const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  border-top: 4px solid ${props => props.theme.black};
  border-bottom: 4px solid ${props => props.theme.black};
`
const TitleBox = styled.div`
  grid-area: title;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${props => props.theme.gray};
  margin-bottom: ${margin};

  @media (${props => props.theme.max480}) {
    border-bottom: none;
  }
`
const TitleText = styled.div`
  flex-basis: 0;
  flex-grow: 666;
  min-width: 16rem;

  h1 {
    margin-bottom: 0;
  }
  p {
    margin-bottom: 0.8rem;
  }
`
const Button_ = styled(Button)`
  flex-basis: 13rem;
  flex-grow: 1;
`
const Sidebar = styled.div`
  grid-area: sidebar;
  background-color: ${props => props.theme.bgGray};
`
const Detail = styled.div`
  display: flex;
  margin-bottom: ${margin};
  margin-top: ${margin};

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
const Main = styled.div`
  grid-area: main;
`
