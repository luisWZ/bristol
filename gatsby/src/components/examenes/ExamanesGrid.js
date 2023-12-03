import React /* , { useState } */ from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { Container, title } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'
// import Filters from './Filters';
import calendars from '../../data/calendars.json'
import Calendars from './Calendars'

export default function ExamanesGrid() {
  // const [activeView, setActiveView] = useState('all');

  // add filter property to every image object
  // const data = Object.values(useStaticQuery(EXAMENES_QUERY)).map((obj) => {
  //   obj.filter = obj.name.match(/^\w*/)[0];
  //   return obj;
  // });

  return (
    <Container
      css={theme =>
        css`
          @media (${theme.min560}) {
            min-height: 45rem;
          }
        `
      }
    >
      <Title2 style={{ marginBottom: '2rem', marginTop: 0 }} css={title}>
        Calendarios de Exámenes Internacionales
      </Title2>
      {/* <Filters {...{ filters }} {...{ activeView }} {...{ setActiveView }} /> */}
      <Grid>
        {!!calendars.data.length && <Calendars calendars={calendars.data} />}
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

// const filters = [
//   'all',
//   'ket',
//   'pet',
//   'fce',
//   'cae',
//   'cpe',
//   // 'linguaskill',
//   'ielts',
//   'tkt',
//   'yle',
// ]
