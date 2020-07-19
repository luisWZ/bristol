import React, { useState } from 'react'
import GlobalStyles, { Main } from './GlobalStyles'
import { MenuProvider } from '../../utils/menuContext'

import Header from '../Header'
import Footer from '../Footer'

// Components =========================================
export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <MenuProvider value={{menuOpen, setMenuOpen}}>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </MenuProvider>
  )
}
