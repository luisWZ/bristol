import React from 'react'
import styled from '@emotion/styled'

const Main_ = styled.main`
  background-color: ${props => props.theme.bgGray};
`
export default function Main(props) {
  return <Main_ {...props} />
}
