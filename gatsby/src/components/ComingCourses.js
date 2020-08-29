import React from 'react'
import { css } from '@emotion/core'

import { useCoursesQuery } from 'utils/coursesQuery'
import { Container, title } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'
import Courses from './Courses'

// Components =========================================
export default function ComingCourses({ titleText }) {
  const data = useCoursesQuery().slice(0, 3)
  return (
    <Container css={css`margin-bottom: 3rem; padding-bottom: 0;`}>
      <Title2 css={title}>{titleText}</Title2>
      <Courses {...{data}} commingCourses />
    </Container>
  )
}