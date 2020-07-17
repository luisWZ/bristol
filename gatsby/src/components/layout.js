import React from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
// UI Components ======================================
import Header from './Header'
import Footer from './Footer'
// Style Definitions ==================================
import CssModernReset from './styles/CssModernReset'
import CssScaffolding from './styles/CssScaffolding'
import CssTheme from './styles/CssTheme'

const Main = styled.main`
  min-height: 100vh;
  background-color: ${props => props.theme.bgGray};
`
// Main UI Layout =====================================
export default function Layout({ children }) {
  return (
    <>
      <Global styles={CssModernReset} />
      <Global styles={CssScaffolding} />
      <CssTheme />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
