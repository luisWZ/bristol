import React from 'react'
import styled from '@emotion/styled'

import { Subtitle } from 'styles/FontStyles'

export default function CourseDescription() {
  return (
    <Main>
      <Subtitle>
        Aprende a comunicarte eficazmente en inglés, disfruta más de tus
        viajes y garantiza el éxito en tu vida académica y profesional.
      </Subtitle>
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
  )
}
// styles =============================================
const Main = styled.div`
  grid-area: main;
`
