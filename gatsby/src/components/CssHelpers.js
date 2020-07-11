import styled from '@emotion/styled'

export const Container = styled.section`
  margin-left: ${({ theme }) => theme.gutter};
  margin-right: ${({ theme }) => theme.gutter};

  @media (${({ theme }) => theme.mq.min1200}) {
    margin-left: auto;
    margin-right: auto;
    max-width: 70rem; // 1120px
  }
`
export const Title = styled.h1`
  /* text-align: center; */
  &:hover {
    color: ${({ theme }) => theme.colors.bristolBlue};
  }
`
export const Button = styled.a`
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2.2rem;
  text-align: center;
  border-radius: ${({ noRadius, theme }) => noRadius ? '0' : theme.radius};
  width: ${({ widthFull }) => widthFull ? '100%' : 'auto'};
  background-color: ${({ blue, theme }) =>
    blue ? theme.colors.bristolBlue : theme.colors.bristolRed};
`
