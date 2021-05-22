import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const Image = ({
  activeView,
  filter,
  image
}) => (
  <ImageStyles
    {...{activeView}}
    {...{filter}}
    fluid={image}
    imgStyle={{ objectFit: 'contain', objectPosition: 'top center' }}
  />
)

export default Image

// styles =============================================
const ImageStyles = styled(Img)`
  ${props => props.activeView !== 'all'
    && props.activeView !== props.filter
    && 'display: none;'
  }
`