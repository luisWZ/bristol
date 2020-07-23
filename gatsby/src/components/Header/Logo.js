import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import SvgBristolLogo from '../svgs/SvgBristolLogo'

export default function Logo() {
  return (
    <LogoBox>
      <Link to='/' aria-label='Bristol Inglés Profesional Logo'>
        <LogoBristol />
      </Link>
    </LogoBox>
  )
}

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: calc(${props => props.theme.gutter} - 4px);
  border-left: 4px solid ${props => props.theme.bristolRed};
  transition: padding .4s ease-out;

  @media (${props => props.theme.min848}) {
    padding: 0 0.8rem;
    grid-area: 1 / 1 / 3 / 2;
    border-right: 1px solid ${props => props.theme.grayLight};
  }
  @media (${props => props.theme.min1200}) {
    padding-left: 1.4rem;
    padding-right: 1.4rem;
  }
`
const LogoBristol = styled(SvgBristolLogo)`
  width: auto;
  max-height: 44px;
  transition: max-height .4s ease-out;

  @media (${props => props.theme.min1200}) {
    max-height: 60px;
  }
`