import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import Course from './Course'

// Component ==========================================
export default function Courses({ data, homeSection, twoGrid }) {
  return (
    <CoursesWrapper {...{twoGrid}} css={theme => !homeSection && hideLastCourse(theme)}>
      {data.map(course => <Course {...{ course }} key={course.id} /> )}
    </CoursesWrapper>
  )
}
// styles =============================================
const CoursesWrapper = styled.div`
  display: grid;
  justify-content: center;
  gap: ${props => props.theme.gap};
  @media (${props => props.theme.min320}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 320px));
  }

  @media (${props => props.theme.min960}) {
    grid-template-columns: ${props => props.twoGrid ? 'repeat(2, 21.5rem)' : 'repeat(3, 1fr)'};
  }
  ${props => props.twoGrid && `
    @media (${props.theme.min1400}) {
      grid-template-columns: repeat(auto-fill, 320px);
      gap: 2.5rem;
    }
  `
  }
`
const hideLastCourse = theme => css`
  @media (${theme.max960}) {
    > div:last-of-type {
      display: none;
    }
  }
`