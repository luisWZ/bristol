import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Container, title } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'
import Image from './Image'
import Filters from './Filters'

// component ==========================================
export default function ExamanesGrid() {
  const [activeView, setActiveView] = useState('all');

  // add filter property to every image object
  const data = Object.values(useStaticQuery(EXAMENES_QUERY))
    .map(obj => {
      obj.filter = obj.name.match(/^\w*/)[0]
      return obj
    })

  return (
    <Container css={theme => css`@media (${theme.min560}) { min-height: 45rem; }`}>
      <Title2 style={{ marginBottom: '2rem', marginTop: 0 }}
        css={title}>Calendarios de Exámenes Internacionales
      </Title2>
      <Filters
        {...{filters}}
        {...{activeView}}
        {...{setActiveView}}
      />
      <Grid>
        {Object.values(data).map(exam => (
          <Image
            key={exam.name}
            {...{activeView}}
            filter={exam.filter}
            image={exam.childImageSharp.fluid}
          />
        ))}
      </Grid>
    </Container>
  )
}
const filters = [
  'all',
  'ket',
  'pet',
  'fce',
  'cae',
  'cpe',
  'linguaskill',
  'ielts',
  'tkt',
  'yle',
]
// Query ==============================================
const EXAMENES_QUERY = graphql`
  fragment examenesImageSharpFragment on File {
    childImageSharp {
      fluid(maxWidth: 576) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  query EXAMENES_QUERY {
    ket: file(relativePath: { eq: "centro-examinador/ket.png" }) { name ...examenesImageSharpFragment }
    ketschools: file(relativePath: { eq: "centro-examinador/ket-schools.png" }) { name ...examenesImageSharpFragment }
    pet: file(relativePath: { eq: "centro-examinador/pet.png" }) { name ...examenesImageSharpFragment }
    petschools: file(relativePath: { eq: "centro-examinador/pet-schools.png" }) { name ...examenesImageSharpFragment }
    fce: file(relativePath: { eq: "centro-examinador/fce.png" }) { name ...examenesImageSharpFragment }
    fceschools: file(relativePath: { eq: "centro-examinador/fce-schools.png" }) { name ...examenesImageSharpFragment }
    cae: file(relativePath: { eq: "centro-examinador/cae.png" }) { name ...examenesImageSharpFragment }
    cpe: file(relativePath: { eq: "centro-examinador/cpe.png" }) { name ...examenesImageSharpFragment }
    linguaskill: file(relativePath: { eq: "centro-examinador/linguaskill.png" }) { name ...examenesImageSharpFragment }
    ielts: file(relativePath: { eq: "centro-examinador/ielts.png" }) { name ...examenesImageSharpFragment }
    tkt: file(relativePath: { eq: "centro-examinador/tkt.png" }) { name ...examenesImageSharpFragment }
    yle: file(relativePath: { eq: "centro-examinador/yle.png" }) { name ...examenesImageSharpFragment }
  }
`
// styles =============================================
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26.5rem, 1fr));
  grid-gap: 2rem;

  @media (${props => props.theme.max560}) {
    grid-template-columns: 1fr;
  }
`