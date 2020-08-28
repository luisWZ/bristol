import React from 'react'
import styled from '@emotion/styled'

import TextIlustration from 'components/TextIlustration'

export default function CourseDescription({
  courseDescription: {
    title,
    subheader,
    subtitle,
    text,
  },
}) {
  return (
    <Main>
      <TextIlustration
        noImage
        {...{title}}
        {...{subheader}}
        {...{subtitle}}
      >
        {text.content.map((paragraph, index) => <p key={index}>{paragraph.content[0].value}</p>)}
      </TextIlustration>
    </Main>
  )
}
// styles =============================================
const Main = styled.div`
  grid-area: main;
`
