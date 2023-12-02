import styled from '@emotion/styled'
import theme from 'styles/CssVariables'

export const Body = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`
export const Body2 = styled.p`
  // 18px
  font-size: 1.125rem;
  font-weight: bold;
`
export const Legal = styled.p`
  // 14px
  font-size: 0.875rem;
`
export const Big = styled.h1`
  // 48px
  font-size: 3rem;
  line-height: 1.312;
  @media (${theme.max480}) {
    font-size: 2.5rem;
  }
`
export const Title = styled.h1`
  // 40px
  font-size: 2.5rem;
  line-height: 1.325;
  @media (${theme.max480}) {
    font-size: 2rem;
  }
`
export const Title2 = styled.h1`
  // 32px
  font-size: 2rem;
  line-height: 1.375;

  @media (${theme.max480}) {
    font-size: 1.45rem;
  }
`
export const Subtitle = styled.h2`
  // 24px
  font-size: 1.5rem;
  line-height: 1.375;
  @media (${theme.max480}) {
    font-size: 1.25rem;
  }
`
