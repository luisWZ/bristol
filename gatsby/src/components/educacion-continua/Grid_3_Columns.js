import React from 'react'
import styled from '@emotion/styled'

import { Container, LinkSaberMas } from 'styles/CssHelpers'
import { Body2, Subtitle } from 'styles/FontStyles'
import Pictograma50Plus from 'svgs/pictograma-50-plus.svg'
import PictogramaColegios from 'svgs/pictograma-colegios.svg'
import PictogramaDocente from 'svgs/pictograma-docente.svg'
import PictogramaFlexEnglish from 'svgs/pictograma-flex-english.svg'
import PictogramaOneToOne from 'svgs/pictograma-one-to-one.svg'
import PictogramaTkt from 'svgs/pictograma-tkt.svg'

export function Column({ children, title, subtitle, subheader, pictogram }) {
  return (
    <div>
      {pictograms[pictogram]}
      <Subtitle style={{marginTop: '1rem'}}>{title}</Subtitle>
      {subtitle && <p className='grid__subtitle'>{subtitle}</p>}
      <Body2>{subheader}</Body2>
      {children}
      <LinkSaberMas />
    </div>
  )
}
const pictograms = {
  'one-to-one': <PictogramaOneToOne />,
  'flex-english': <PictogramaFlexEnglish />,
  '50-plus': <Pictograma50Plus />,
  'colegios': <PictogramaColegios />,
  'docente': <PictogramaDocente />,
  'tkt': <PictogramaTkt />,
}
// styles =============================================
export const Grid_3_Columns = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(16rem, 1fr));
  grid-gap: 5rem;
  padding-top: 5rem;
  padding-bottom: 5rem;

  .grid__subtitle {
    margin-top: -1.3rem;
  }
  li {
    margin-bottom: 1rem;
  }
`