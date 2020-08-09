import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Title, Container, Button } from '../styles/CssHelpers'
import { useStaticQuery, graphql } from 'gatsby'
import Courses from '../Courses'

import SvgDias from '../../inline-svg/pictograma-dias.svg'
import SvgDuracion from '../../inline-svg/pictograma-duracion.svg'
import SvgFechaInicio from '../../inline-svg/pictograma-fecha-inicio.svg'
import SvgHorario from '../../inline-svg/pictograma-horario.svg'
import SvgModalidad from '../../inline-svg/pictograma-modalidad.svg'
import SvgThumbnail from '../../inline-svg/thumbnail-course-detail.svg'

export default function CourseDetailPage() {
  const data = useStaticQuery(graphql`
    query RECOMMENDED_COURSES_QUERY {
      allContentfulCourses(limit: 3, sort: { fields: startingDate }) {
        nodes {
          id
          courseType
          courseName
          sessionDate
          sessionTime
          startingDate(formatString: "D [de] MMMM YYYY", locale: "es-MX")
          campus
          image {
            file {
              url
            }
          }
        }
      }
    }
  `).allContentfulCourses.nodes

  return (
    <>
      <section
        css={css`
          background-color: white;
        `}
      >
        <Container
          as='div'
          css={theme => css`
            padding-top: 10rem;
            padding-bottom: 5rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas: 'title title title' 'sidebar main main';
            grid-gap: 0 ${theme.gap};
          `}
        >
          <TitleBox>
            <TitleText>
              <h1>Pet for Schools</h1>
              <p>Preliminary English Test</p>
            </TitleText>
            <Button_ blue>Inscríbete</Button_>
          </TitleBox>
          <Sidebar>
            <SvgThumbnail
              css={css`
                width: 100%;
              `}
            />
            <div
              css={theme => css`
                border-top: 4px solid ${theme.black};
                border-bottom: 4px solid ${theme.black};
              `}
            >
              <Detail>
                <SvgDuracion />
                <p>
                  <strong>Duración</strong>
                  30 horas por nivel
                </p>
              </Detail>
              <Detail>
                <SvgDias />
                <p>
                  <strong>Duración</strong>
                  30 horas por nivel
                </p>
              </Detail>
              <Detail>
                <SvgFechaInicio />
                <p>
                  <strong>Duración</strong>
                  30 horas por nivel
                </p>
              </Detail>
              <Detail>
                <SvgHorario />
                <p>
                  <strong>Duración</strong>
                  30 horas por nivel
                </p>
              </Detail>
              <Detail>
                <SvgModalidad />
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
            </div>
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
        </Container>
      </section>
      <Container
        css={theme => css`
          padding-bottom: ${theme.sectionSpace};
          @media (${theme.max960}) {
            > div > div:last-of-type {
              display: none;
            }
          }
        `}
      >
        <Title>Cursos recomendados</Title>
        <Courses {...{ data }} />
      </Container>
    </>
  )
}

const margin = `1.5rem`

const TitleBox = styled.div`
  grid-area: title;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid;
  margin-bottom: ${margin};
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

  /* @media (${props => props.theme.max640}) {
    margin-bottom: 0.8rem;
    margin-top: 0.8rem;

    svg {
      display: none;
    }
  } */

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
