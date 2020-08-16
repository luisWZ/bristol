import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const Section = styled.section`
  background-color: white;
`
export const Container = styled.section`
  margin-left: ${props => props.theme.gutter};
  margin-right: ${props => props.theme.gutter};
  ${props => props.padding && `
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  `}

  @media (${props => props.theme.min1200}) {
    margin-left: auto;
    margin-right: auto;
    max-width: ${props => !props.slim ? '70rem' : '58rem'}; // 1120px || 928
  }
`
export function ContainerWhite({ children }) {
  return (
    <section css={css`background-color: white;`}>
      <Container as='div'>{children}</Container>
    </section>
  )
}
export const Title = styled.h1`
  text-align: center;
  transition: color .24s ease-in;
  margin-top: 4rem;
  &:hover {
    color: ${props => props.theme.black};
  }
`
export const Subtitle = styled.h1`
  margin-top: 2rem;

  @media (${props => props.theme.max480}) {
    font-size:1.25rem;
    line-height: 1.25;
  }
`
export const Button = styled.a`
  font-size: 1.2rem;
  padding: 1rem 2.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.noBg ? props.theme.black : 'white'};
  border-radius: ${props => props.noRadius ? '0' : props.theme.radius};
  width: ${props => props.widthFull && '100%'};
  background-color: ${props =>
    props.noBg ? 'transparent' :
    props.blue ? props.theme.bristolBlue :
    props.theme.bristolRed
  };
  &:hover {
    background-color: ${props =>
      props.noBg ? 'transparent' :
      props.blue ? props.theme.bristolRed :
      props.theme.pink
    };
  }
`
export const hoverStyle = (theme, color) => {
  return `
    &:hover {
      background-color: ${theme.bgGray};
      color: ${color === undefined ? theme.grayDark : theme.blueDark};
    }
  `
}

export const borderTopStyle = (theme) => `border-top: 1px solid ${theme.grayLight};`