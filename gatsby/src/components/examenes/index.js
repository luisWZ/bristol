import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Container } from '../styles/CssHelpers'

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
    <Container>
      {data.map(({ node: { examen } }) => <Img key={examen.id} fluid={examen.fluid} /> )}
    </Container>
  )
}
