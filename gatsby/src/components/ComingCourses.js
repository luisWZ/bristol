import React from 'react'
import { css } from '@emotion/react'

import { useCoursesQuery } from 'utils/coursesQuery'
import { Container, title } from 'styles/CssHelpers'
import { Body2, Title2 } from 'styles/FontStyles'
import Courses from './Courses'

// Components =========================================
export default function ComingCourses({ titleText, homeSection, simple }) {
  const data = useCoursesQuery()
  return (
    <Container
      noPadding={simple}
      css={
        theme =>
          homeSection &&
          data.length === 4 &&
          css`
            @media (${theme.min1200}) {
              max-width: 90rem;
            }
          `
        // || (!homeSection && css`margin-bottom: 3rem; padding-bottom: 0;`)
      }
    >
      {titleText && <Title2 css={title}>{titleText}</Title2>}
      {simple && <Body2 css={body2}>Próximos cursos</Body2>}
      <Courses
        {...{ homeSection }}
        {...{ simple }}
        data={homeSection ? data : data.slice(0, 3)}
        twoGrid={homeSection && data.length % 2 === 0 && data.length <= 4}
      />
    </Container>
  )
}
const body2 = theme => css`
  @media (${theme.max720}) {
    text-align: center;
  }
`
