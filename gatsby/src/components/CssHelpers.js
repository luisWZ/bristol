import styled from '@emotion/styled'

export const Container = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8rem;

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`
export const TitleCenter = styled.h1`
  text-align: center;
`

export const Button = styled.a`
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2.2rem;
  text-align: center;
  border-radius: ${props => props.theme.radius};
  background-color: ${({ blue, theme }) =>
    blue ? theme.colors.bristolBlue : theme.colors.bristolRed};
  /* &:hover {
    background-color: ${({ blue, theme }) =>
      blue ? theme.colors.bristolRed : theme.colors.bristolBlue};
  } */
`
