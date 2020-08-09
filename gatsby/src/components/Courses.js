import React from 'react'
import Course, { CoursesWrapper } from './Course'

// Component ==========================================
export default function Courses({ data }) {
  return (
    <CoursesWrapper>
      {data.map(course => (
        <Course {...{ course }} key={course.id} />
      ))}
    </CoursesWrapper>
  )
}
