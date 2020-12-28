import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Container } from 'styles/CssHelpers'
import LogoCambridgeAssesmentEnglish from 'svgs/logo-cambridge-assesment-english.svg'

export default function Cambridge() {
  return (
    <Container css={css`padding-top: 9rem;`}>
      <Flex>
        <LogoCambridgeAssesmentEnglish />
        <div>
          <p>Desde 2008, Bristol Inglés Profesional es Centro Examinador Autorizado por Cambridge Assessment English para la administración y aplicación de sus exámenes de inglés en el Estado de Veracruz y la región de Tampico en el Estado de Tamaulipas.</p>
          <p>Somos un Centro Examinador abierto, es decir, que estamos autorizados para llevar a cabo exámenes para candidatos que se preparan en otros colegios así como candidatos independientes.</p>
          <p>Como Centro Examinador Autorizado, somos inspeccionados directamente por Cambridge Assessment English para asegurar el cumplimiento de exigentes normas de seguridad y calidad.</p>
        </div>
      </Flex>
    </Container>
  )
}
const Flex = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-evenly;
  padding-bottom: 4rem;
  border-bottom: 1px solid ${props => props.theme.gray};

  svg {
    flex-basis: 330px;
    margin-bottom: 3rem;
  }
  div {
    flex-basis: 35rem;
  }
`