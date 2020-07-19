import styled from '@emotion/styled'
import SocialLinks from '../SocialLinks'
import { hoverStyle } from '../styles/CssHelpers'

const SocialLinksList = styled(SocialLinks)`
  > li {
    display: none;
  }

  @media (${props => props.theme.min480}) and (${props => props.theme.max848}) {
    grid-column-end: 3;
    display: flex;
    justify-content: flex-end;

    > li {
      display: initial;
    }
  }
  @media (${props => props.theme.min848}) {
    display: flex;
    grid-column-end: -1;
    grid-row: 1 / 2;
  }
  a {
    height: 100%;
    ${props => hoverStyle(props.theme, true)}

    svg {
      width: 1.2rem;
    }
  }
`

export default SocialLinksList