import React from 'react'

import { Container, Button } from 'styles/CssHelpers'
import TextIlustration from 'components/TextIlustration'

export default function CoursesCompanies({ data }) {
  return (
    <Container>
      <TextIlustration img563
        title='Cursos para empresas'
        subtitle='Bristol puede ayudar a que los colaboradores de su empresa cumplan con requerimientos específicos de dominio del inglés para llevar a cabo sus actividades con éxito.'
        image={data.childImageSharp.fluid}
      >
        <p>Con base en un análisis de necesidades, diseñamos data a la medida de las necesidades de su empresa y nos adaptamos también a sus necesidades de horario para que el curso no interfiera con las actividades de sus colaboradores.</p>
        <p>Si su empresa no tienen necesidades específicas, pero el dominio del inglés es parte del programa de capacitación de la empresa, les ofrecemos descuentos y beneficios especiales en nuestros cursos de Inglés General.</p>
        <Button>Quiero saber más</Button>
      </TextIlustration>
    </Container>
  )
}
