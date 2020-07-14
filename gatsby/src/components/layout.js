import React from 'react'
import { Global, CacheProvider } from '@emotion/core'
import createCache from '@emotion/cache'
import { ThemeProvider } from 'emotion-theming'

// Template Components ================================
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

// Style Definitions ==================================
import CssModernReset from './CssModernReset'
import CssScaffolding from './CssScaffolding'
import CssTheme from './CssTheme'
import CssVariables from './CssVariables'

// Emotion configs ====================================
const disablePrefix = createCache({
  key: 'bristol',
  prefix: true, // take out for production
})

// Basically our root Component =======================
export default function Layout({ children }) {
  return (
    <>
      <Global styles={CssModernReset} />
      <Global styles={CssScaffolding} />
      <CacheProvider value={disablePrefix}>
        <ThemeProvider theme={CssVariables}>
          <CssTheme />
          <Header />
          <Main>{children}</Main>
          <Footer />
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
