import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Container, Select } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'
import HeroContent from 'components/HeroContent'
import IlustracionFallingGirl from 'svgs/ilustracion-falling-girl.svg'
import LogoCambridgePreparationCentre from 'svgs/logo-cambridge-preparation-centre.svg'

export default function ExamanesPage() {
  const data = useStaticQuery(graphql`
    query Examanes {
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
  `).allFile.edges

  return (
    <>
      <HeroContent
        mainText='Obtén una certificación y acredita tu nivel de inglés a nivel internacional'
        image={IlustracionFallingGirl} />

      <Container css={css`padding-top: 9rem;`}>
        <Flex>
          <LogoCambridgePreparationCentre />
          <div>
            <p>Desde 2008, Bristol Inglés Profesional es Centro Examinador Autorizado por Cambridge Assessment English para la administración y aplicación de sus exámenes de inglés en el Estado de Veracruz y la región de Tampico en el Estado de Tamaulipas.</p>
            <p>Somos un Centro Examinador abierto, es decir, que estamos autorizados para llevar a cabo exámenes para candidatos que se preparan en otros colegios así como candidatos independientes.</p>
            <p>Como Centro Examinador Autorizado, somos inspeccionados directamente por Cambridge Assessment English para asegurar el cumplimiento de exigentes normas de seguridad y calidad.</p>
          </div>
        </Flex>
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
    </>
  )
}
const Flex = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: space-evenly;
  padding-bottom: 4rem;
  margin-bottom: 6.5rem;
  border-bottom: 1px solid ${props => props.theme.gray};

  svg {
    flex-basis: 330px;
    margin-bottom: 3rem;
  }
  div {
    flex-basis: 35rem;
  }
`
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