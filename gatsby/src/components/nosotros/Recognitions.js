import React from 'react'
import styled from '@emotion/styled'

import { Section, Container } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'
import LogoSep from 'svgs/logo-sep.svg'
import LogoCambridgeAssesmentEnglish from 'svgs/logo-cambridge-assesment-english.svg'
import LogoCambridgePreparationCentre from 'svgs/logo-cambridge-preparation-centre.svg'
import LogoTheAnglo from 'svgs/logo-the-anglo.svg'
import LogoGreatPlaceToWork from 'svgs/logo-great-place-to-work.svg'
import PictogramaExcelencia from 'svgs/pictograma-excelencia.svg'
// import PictogramaEscuela from 'svgs/pictograma-escuela.svg'
import iconFlags from '../../images/flags-eng-can.png'

export default function Recognitions() {
  return (
    <Section>
      <RecognitionBox as='div' paddingBigTop>
        <RecognitionTitle>
          Acreditaciones, Reconocimientos y Alianzas
        </RecognitionTitle>
        <Recognition>
          <LogoSep />
          <p>
            Desde su fundación, los cursos de inglés General para jóvenes y
            adultos cuentan con REVOE de la Secretaría de Educación (SEP).
          </p>
        </Recognition>
        <Recognition>
          <LogoCambridgeAssesmentEnglish />
          <p>
            Desde 2008, Bristol recibió la distinción de ser nombrado Centro
            Examinador Autorizado (MX098) por Cambridge Assessment English y
            atendemos a candidatos independientes e instituciones educativas,
            desde primarias hasta universidades, en el Estado de Veracruz y
            parte del Estado de Tamaulipas.
          </p>
        </Recognition>
        <Recognition>
          <LogoCambridgePreparationCentre />
          <p>
            Desde 2012, año tras año, hemos recibido el Certificado de
            Preparation Centre por parte de Cambridge Assessment English por
            lograr certificar a más de 200 de nuestros alumnos por año. Somos de
            las pocas instituciones en el Estado que lo logran de manera
            consecutiva.
          </p>
        </Recognition>
        <Recognition>
          <LogoTheAnglo />
          <p>
            Bristol es representante de The Anglo para el Estado de Veracruz.
            The Anglo es reconocido como la mejor escuela de inglés en México.
          </p>
        </Recognition>
        <Recognition>
          <LogoGreatPlaceToWork />
          <p>
            Contamos con la acreditación de A Great Place to Work y hemos
            logrado ocupar el segundo lugar en en el raking de las mejores
            empresas para trabajar de la región Centro-Sureste del país.
          </p>
        </Recognition>
        <Recognition>
          <PictogramaExcelencia />
          <p>
            En dos ocasiones hemos recibido la distinción por la excelencia en
            la calidad en el servicio por parte de Cambridge Assessment English.
          </p>
        </Recognition>
        <Recognition>
          <img src={iconFlags} alt='' />
          <p>
            Durante 20 años, Bristol ha establecido alianzas con escuelas de
            prestigio en Canadá e Inglaterra para ofrecer a nuestros alumnos
            cursos de inmersión en ambos países.
          </p>
        </Recognition>
      </RecognitionBox>
    </Section>
  )
}
// styles =============================================
const RecognitionBox = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-gap: 2rem;

  @media (${({ theme }) => theme.max560}) {
    display: block;
  }
`
const RecognitionTitle = styled(Title2)`
  @media (${({ theme }) => theme.max560}) {
    margin-bottom: 3rem;
  }
`
const Recognition = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  svg,
  img {
    margin-bottom: 2rem;
    height: 5rem;
    width: auto;
  }

  @media (${({ theme }) => theme.max560}) {
    margin-top: 1.5rem;
    margin-bottom: 1.5em;
  }
`
