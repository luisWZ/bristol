import styled from '@emotion/styled'

export const Container = styled.section`
  margin-left: ${props => props.theme.gutter};
  margin-right: ${props => props.theme.gutter};

  @media (${props => props.theme.min1200}) {
    margin-left: auto;
    margin-right: auto;
    max-width: 70rem; // 1120px
  }
`
export const Title = styled.h1`
  /* text-align: center; */
  &:hover {
    color: ${props => props.theme.bristolBlue};
  }
`
export const Button = styled.a`
  color: ${props => props.noBg ? props.theme.black : 'white'};
  font-size: 1.2rem;
  padding: 1rem 2.2rem;
  text-align: center;
  border-radius: ${({ noRadius, theme }) => noRadius ? '0' : theme.radius};
  width: ${({ widthFull }) => widthFull && '100%'};
  background-color: ${({ noBg, blue, theme }) =>
    noBg ? 'transparent' :
    blue ? theme.bristolBlue :
    theme.bristolRed
  };
`
