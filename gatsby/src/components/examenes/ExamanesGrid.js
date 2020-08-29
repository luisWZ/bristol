import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

import {
  // Select,
  Container, title } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'

// component ==========================================
export default function ExamanesGrid() {
  const data = useStaticQuery(EXAMENES_QUERY)

  return (
    <Container>
      <Title2 style={{ marginBottom: '5rem' }}
        css={title}>Calendarios de Exámenes Internacionales</Title2>
      {/* <Filter>
        <li className='selected'>Todos los exámenes</li>
        {filters.map(exam => <li key={exam}>{exam}</li>)}
      </Filter>
      <FilterMobile>
        <option value="all">Todos los exámenes</option>
        {filters.map(exam => <option key={exam} value={exam}>{exam}</option>)}
      </FilterMobile> */}
      <Grid>
        {Object.entries(data).map(([ key, exam ]) => (
          <Img
            data-exam={exam.name}
            key={key}
            fluid={exam.childImageSharp.fluid}
            imgStyle={{ objectFit: 'contain', objectPosition: 'top center' }}
          />
        ))}
      </Grid>
    </Container>
  )
}
// const filters = [
//   'KET',
//   'PET',
//   'FCE',
//   'CAE',
//   'CPE',
//   'LINGUASKILL',
//   'IELTS',
//   'TKT',
//   'YLE',
// ]
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
    cae: file(relativePath: { eq: "centro-examinador/cae.png" }) { name ...examenesImageSharpFragment }
    cpe: file(relativePath: { eq: "centro-examinador/cpe.png" }) { name ...examenesImageSharpFragment }
    fce: file(relativePath: { eq: "centro-examinador/fce.png" }) { name ...examenesImageSharpFragment }
    fceschools: file(relativePath: { eq: "centro-examinador/fce-schools.png" }) { name ...examenesImageSharpFragment }
    ket: file(relativePath: { eq: "centro-examinador/ket.png" }) { name ...examenesImageSharpFragment }
    ketschools: file(relativePath: { eq: "centro-examinador/ket-schools.png" }) { name ...examenesImageSharpFragment }
    pet: file(relativePath: { eq: "centro-examinador/pet.png" }) { name ...examenesImageSharpFragment }
    petschools: file(relativePath: { eq: "centro-examinador/pet-schools.png" }) { name ...examenesImageSharpFragment }
    linguaskill: file(relativePath: { eq: "centro-examinador/linguaskill.png" }) { name ...examenesImageSharpFragment }
    ielts: file(relativePath: { eq: "centro-examinador/ielts.png" }) { name ...examenesImageSharpFragment }
    tkt: file(relativePath: { eq: "centro-examinador/tkt.png" }) { name ...examenesImageSharpFragment }
    yle: file(relativePath: { eq: "centro-examinador/yle.png" }) { name ...examenesImageSharpFragment }
  }
`
// styles =============================================
// const Filter = styled.ul`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 6rem;
//   font-size: 1.125rem;

//   @media (${props => props.theme.max880}) {
//     display: none;
//   }

//   li {
//     padding: 0.4rem;
//     margin: 0 0.4rem;
//     cursor: pointer;

//     &.selected {
//       color: ${props => props.theme.bristolBlue};
//     }
//   }
// `
// const FilterMobile = styled(Select)`
//   margin: 2.5rem auto;
//   max-width: 25rem;

//   @media (${props => props.theme.min880}) {
//     display: none;
//   }
// `
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26.5rem, 1fr));
  grid-gap: 2rem;

  @media (${props => props.theme.max560}) {
    grid-template-columns: 1fr;
  }
`