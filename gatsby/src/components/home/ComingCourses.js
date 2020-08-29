import React from 'react'

import { useCoursesQuery } from 'utils/coursesQuery'
import { Container, title } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'
import Courses from 'components/Courses'

// Components =========================================
export default function ComingCoursesHome() {
  const data = useCoursesQuery()
  return (
    <Container>
      <Title2 css={title}>Próximos cursos</Title2>
      <Courses {...{ data }} />
    </Container>
  )
}