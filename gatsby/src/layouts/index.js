import React, { useState } from 'react'
import { ThemeProvider } from 'emotion-theming'

import { MenuProvider } from '../utils/menuContext'
import GlobalStyles, { Main } from './GlobalStyles'

import bristolTheme from '../styles/CssVariables'
import SEO from '../utils/SEO'
import FacebookMessenger from '../utils/FacebookMessenger'

import Header from '../components/Header'
import Footer from '../components/Footer'

// Components =========================================
export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <ThemeProvider theme={bristolTheme}>
      <GlobalStyles />
      <MenuProvider value={{ menuOpen, setMenuOpen }}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </MenuProvider>
      <SEO />
      {process.env.NODE_ENV !== 'development' && <FacebookMessenger />}
    </ThemeProvider>
  )
}
