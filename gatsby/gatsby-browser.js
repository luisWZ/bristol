import React from 'react'
import PropTypes from 'prop-types'
// Needed for emotion =================================
import { ThemeProvider } from 'emotion-theming'
import { CacheProvider } from '@emotion/core'
import { myCache } from './create-emotion-cache'
import bristolTheme from './src/components/styles/CssVariables'
// Persisiting UI Elements ============================
import Layout from './src/components/Layout'
import SEO from './src/utils/SEO'
import FacebookMessenger from './src/utils/FacebookMessenger'
// Rendering ==========================================
export const wrapRootElement = ({ element, props }) => (
  <>
    <CacheProvider value={myCache}>
      <ThemeProvider theme={bristolTheme}>
        <Layout {...props}>{element}</Layout>
      </ThemeProvider>
    </CacheProvider>
    <SEO />
    {process.env.NODE_ENV !== 'development' && <FacebookMessenger />}
  </>
)

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
}