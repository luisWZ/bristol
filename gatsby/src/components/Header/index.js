import React from 'react'
import styled from '@emotion/styled'

import Logo from './Logo'
import Navigation from './Navigation'
import ContactInfo from './ContactInfo'
import SocialLinksList from './SocialLinksList'
import Slogan from './Slogan'
import ButtonsBox from './ButtonsBox'
import MenuButton from './MenuButton'

// Component ==========================================
export default function Header() {
  return (
    <HeaderBox>
      <Logo />
      <Navigation />
      <ContactInfo />
      <SocialLinksList />
      <Slogan />
      <ButtonsBox>
        <MenuButton />
      </ButtonsBox>
    </HeaderBox>
  )
}
// styles =============================================
const HeaderBox = styled.header`
  display: grid;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  position: fixed;
  box-shadow: 0 1px 2px hsla(220, 11%, 15%, 0.15);
  grid-template-columns: max-content 1fr max-content max-content;
  background-color: white;

  > div,
  > ul {
    background-color: white;
  }
`
