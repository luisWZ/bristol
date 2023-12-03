import React, { useState } from 'react'
import styled from '@emotion/styled'

import { Container, title } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'
import Filters from './Filters'
import Calendars from './Calendars'

import calendars from '../../data/calendars.json'

let tags = []
if (Array.isArray(calendars.tags)) {
  tags = ['all', ...calendars.tags]
}

export default function ExamanesGrid() {
  const [activeTag, setActiveTag] = useState('all')

  return (
    <Container thick style={{ minHeight: '66vh' }}>
      <Title2 style={{ marginBottom: '2rem', marginTop: 0 }} css={title}>
        Calendarios de Exámenes Internacionales
      </Title2>
      {!!tags.length && (
        <Filters
          tags={tags}
          activeTag={activeTag}
          setActiveTag={setActiveTag}
        />
      )}
      <Grid>
        {!!calendars.data.length && (
          <Calendars
            calendars={calendars.data}
            metadata={calendars.metadata}
            activeTag={activeTag}
          />
        )}
      </Grid>
    </Container>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  align-items: flex-start;
  max-width: 672px;
  margin-left: auto;
  margin-right: auto;
  /* grid-template-columns: repeat(auto-fill, minmax(672, 1fr)); */

  @media (${({ theme }) => theme.min1200}) {
    grid-template-columns: 1fr 1fr;
    max-width: 100%;
  }
`
