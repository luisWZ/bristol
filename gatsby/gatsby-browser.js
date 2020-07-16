import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
// import createCache from '@emotion/cache'
// import { Global, CacheProvider } from '@emotion/core'

// Elements
import Layout from './src/components/Layout'
import FacebookMessenger from './src/utils/FacebookMessenger'
import SEO from './src/utils/SEO'

// Style Definitions ==================================
import CssModernReset from './src/components/styles/CssModernReset'
import CssScaffolding from './src/components/styles/CssScaffolding'
import CssVariables from './src/components/styles/CssVariables'
import CssTheme from './src/components/styles/CssTheme'

// Emotion configs ====================================
// const configProvider = createCache({
//   key: 'bristol',
//   prefix: process.env.NODE_ENV === 'develop' ? false : true,
// })

export function wrapPageElement({ element, props }) {
  return (
    <>
      <Global styles={CssModernReset} />
      <Global styles={CssScaffolding} />
      {/* <CacheProvider value={configProvider}> */}
        <ThemeProvider theme={CssVariables}>
          <CssTheme />
          <Layout {...props}>{element}</Layout>
        </ThemeProvider>
      {/* </CacheProvider> */}
      <SEO />
      <FacebookMessenger />
    </>
  )
}