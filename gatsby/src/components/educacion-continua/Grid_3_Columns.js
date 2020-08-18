import React from 'react'
import styled from '@emotion/styled'

import { Container } from 'styles/CssHelpers'
import { Body2, Subtitle } from 'styles/FontStyles'

export function Column({ children, title, subtitle, subheader, pictogram }) {
  return (
    <div>
      {pictogramIcon(pictogram)}
      <Subtitle>{title}</Subtitle>
      <p>{subtitle}</p>
      <Body2>{subheader}</Body2>
      {children}
    </div>
  )
}
const pictogramIcon = pictogram => {
  return pictogram
}
// styles =============================================
export const Grid_3_Columns = styled(Container)`
  display: grid;
`