import React from 'react'
import { Container } from './CssHelpers'
import { css } from '@emotion/core'

export default function ContainerWhite({ children }) {
  return (
    <section css={css`background-color: white;`}>
      <Container>{children}</Container>
    </section>
  )
}
