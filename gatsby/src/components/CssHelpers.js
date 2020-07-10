import styled from '@emotion/styled'

export const Container = styled.section`
  margin-bottom: 6rem;
  margin-left: ${({ theme }) => theme.gutter};
  margin-right: ${({ theme }) => theme.gutter};

  @media (${({ theme }) => theme.mq.min1200}) {
    max-width: 1152px; // 72rem
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
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ blue, theme }) =>
    blue ? theme.colors.bristolBlue : theme.colors.bristolRed};
`
