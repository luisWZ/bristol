import React from 'react'
import { css } from '@emotion/core'

import { useCoursesQuery } from 'utils/coursesQuery'
import { Container, title } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'
import Courses from './Courses'

// Components =========================================
export default function ComingCourses({ titleText, homeSection }) {
  const data = useCoursesQuery()
  return (
    <Container css={theme =>
      (homeSection && data.length === 4 && css`@media (${theme.min1200}) { max-width: 90rem; }`) ||
      (!homeSection && css`margin-bottom: 3rem; padding-bottom: 0;`)
    }>
      <Title2 css={title}>{titleText}</Title2>
      <Courses
        {...{homeSection}}
        data={homeSection ? data : data.slice(0, 3)}
        twoGrid={homeSection && data.length % 2 === 0 && data.length <= 4}
      />
    </Container>
  )
}