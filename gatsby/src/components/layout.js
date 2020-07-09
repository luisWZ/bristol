import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import CssModernReset from './CssModernReset'
import CssScaffolding from './CssScaffolding'
import CssTheme from './CssTheme'
import CssVariables from './CssVariables'

export default function Layout({ children }) {
  return (
    <>
      <Global styles={CssModernReset} />
      <Global styles={CssScaffolding} />
      <ThemeProvider theme={CssVariables}>
        <CssTheme />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </ThemeProvider>
    </>
  )
}
