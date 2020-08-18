import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Select, Container } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'

// component ==========================================
export default function ExamanesGrid() {
  const data = useStaticQuery(EXAMENES_QUERY).allFile.edges
  return (
    <Container>
      <Title2 css={css`text-align: center;`}>Calendarios de Exámenes Internacionales</Title2>
      <Filter>
        <li className='selected'>Todos los exámenes</li>
        <li>CAE</li>
        <li>CPE</li>
        <li>FCE</li>
        <li>KET</li>
        <li>PET</li>
        <li>LINGUASKILL</li>
        <li>IELTS</li>
        <li>TKT</li>
        <li>YLE</li>
      </Filter>
      <FilterMobile>
        <option value="all">Todos los exámenes</option>
        <option value="CAE">CAE</option>
        <option value="CPE">CPE</option>
        <option value="FCE">FCE</option>
        <option value="KET">KET</option>
        <option value="PET">PET</option>
        <option value="LINGUASKILL">LINGUASKILL</option>
        <option value="IELTS">IELTS</option>
        <option value="TKT">TKT</option>
        <option value="YLE">YLE</option>
      </FilterMobile>
      <Grid>
        {data.map(({ node: { examen } }) => (
          <Img
            key={examen.id}
            fluid={examen.fluid}
            imgStyle={{ objectFit: 'contain', objectPosition: 'top center' }}
          />
        ))}
      </Grid>
    </Container>
  )
}
// Query ==============================================
const EXAMENES_QUERY = graphql`
  query EXAMENES_QUERY {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "centro-examinador" }
      }
    ) {
      edges {
        node {
          examen: childImageSharp {
            fluid(maxWidth: 576) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
            id
          }
        }
      }
    }
  }
`
// styles =============================================
const Filter = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 6rem;
  font-size: 1.125rem;

  @media (${props => props.theme.max880}) {
    display: none;
  }

  li {
    padding: 0.4rem;
    margin: 0 0.4rem;
    cursor: pointer;

    &.selected {
      color: ${props => props.theme.bristolBlue};
    }
  }
`
const FilterMobile = styled(Select)`
  margin: 2.5rem auto;
  max-width: 25rem;

  @media (${props => props.theme.min880}) {
    display: none;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26.5rem, 1fr));
  grid-gap: 2rem;

  @media (${props => props.theme.max560}) {
    grid-template-columns: 1fr;
  }
`