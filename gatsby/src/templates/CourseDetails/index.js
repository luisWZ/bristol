import React from 'react'
import styled from '@emotion/styled'

import { Container, Section } from 'styles/CssHelpers'
import TitleBox from './TitleBox'
import CourseFeatures from './CourseFeatures'
import CourseDescription from './CourseDescription'
// import RecommendedCourses from './RecommendedCourses'

export default function CourseDetails({
  pageContext: {
    courseName,
    courseType,
    sessionDate,
    sessionTime,
    image,
    startingDate,
    price,
    campus,
    courseDescription,
  },
}) {
  return (
    <>
      <Section style={{ marginBottom: '8rem' }}>
        <ContainerGrid as='div'>
          <TitleBox {...{courseName}} {...{courseType}} />
          <CourseFeatures
            {...{sessionDate}}
            {...{sessionTime}}
            {...{image}}
            {...{startingDate}}
            {...{campus}}
            {...{price}}
          />
          <CourseDescription {...{courseDescription}} />
        </ContainerGrid>
      </Section>
      {/* <RecommendedCourses /> */}
    </>
  )
}
// styles =============================================
const ContainerGrid = styled(Container)`
  padding-top: 10rem;
  padding-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'title title title' 'sidebar main main';
  grid-gap: 0 ${props => props.theme.gap};

  @media (${props => props.theme.max768}) {
    grid-template-areas: 'title title title' 'sidebar sidebar sidebar' 'main main main';
    grid-gap: 2rem 0;
  }
  @media (${props => props.theme.min960}) {
    margin-left: auto;
    margin-right: auto;
    max-width: 56rem;
  }
`