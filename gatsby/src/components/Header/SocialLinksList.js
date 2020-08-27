import styled from '@emotion/styled'

import SocialLinks from 'components/SocialLinks'
import { hoverStyle } from 'styles/CssHelpers'

const SocialLinksList = styled(SocialLinks)`
  @media (${props => props.theme.max420}) {
    > li {
      display: none;
    }
  }
  @media (${props => props.theme.max848}) {
    grid-column-end: 3;
    justify-content: flex-end;
  }
  @media (${props => props.theme.min848}) {
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
  @media (${props => props.theme.min1400}) {
    justify-content: flex-end;
  }
`

export default SocialLinksList