import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

// components =========================================
export default function BottomImage() {
  const image = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "home-bottom.png"}) {
          childImageSharp {
            fluid(
              maxWidth: 566
              traceSVG: { background: "#f2f4f8", color: "#0f62fe" }
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
  `).file.childImageSharp.fluid
  return (
    <Img
      fluid={image}
      alt='Mujer leyendo recostada'
      css={css`
        margin: 6rem auto;
        width: 80%;
        max-width: 566px;
      `}
    />
  )
}
