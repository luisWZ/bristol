import React from 'react'
import styled from '@emotion/styled'

const Main_ = styled.main`
  background-color: ${({ theme }) => theme.colors.bgGray};
  /* padding-top: ${props => props.height ? props.height : '90px'}; */
`
export default function Main(props) {
  return <Main_ {...props} />
}
