import React from 'react'
import { css } from '@emotion/core'

import Course, { CoursesWrapper } from './Course'

// Component ==========================================
export default function Courses({ data, commingCourses }) {
  return (
    <CoursesWrapper css={theme => commingCourses && hideLastCourse(theme)}>
      {data.map(course => (
        <Course {...{ course }} key={course.id} />
      ))}
    </CoursesWrapper>
  )
}
// styles =============================================
const hideLastCourse = theme => css`
  @media (${theme.max960}) {
    > div:last-of-type {
      display: none;
    }
  }
`