import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const Image = ({
  activeView,
  filter,
  image
}) => (
  <Image_
    {...{activeView}}
    {...{filter}}
    fluid={image}
    imgStyle={{ objectFit: 'contain', objectPosition: 'top center' }}
  />
)

export default Image

// styles =============================================
const Image_ = styled(Img)`
  ${props => props.activeView !== 'all'
    && props.activeView !== props.filter
    && 'display: none;'
  }
`