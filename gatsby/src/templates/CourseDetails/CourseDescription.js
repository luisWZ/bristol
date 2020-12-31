import React from 'react'
import styled from '@emotion/styled'

import TextIlustration from 'components/TextIlustration'

export default function CourseDescription({
  courseDescription: {
    subtitle,
    text,
  },
}) {
  return (
    <Main>
      <TextIlustration
        {...{subtitle}}
      >
        {JSON.parse(text.raw).content.map((paragraph, index) => console.log(paragraph) || <p key={index}>{paragraph.content[0].value}</p>)}
      </TextIlustration>
    </Main>
  )
}
// styles =============================================
const Main = styled.div`
  grid-area: main;
`
