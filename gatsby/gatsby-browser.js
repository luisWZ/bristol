import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import { CacheProvider } from '@emotion/core'
import { myCache } from './create-emotion-cache'
import bristolTheme from './src/components/styles/CssVariables'
import Layout from './src/components/layout'
import SEO from './src/utils/SEO'
import FacebookMessenger from './src/utils/FacebookMessenger'

export const wrapRootElement = ({ element, props }) => (
  <>
    <CacheProvider value={myCache}>
      <ThemeProvider theme={bristolTheme}>
        <Layout {...props}>{element}</Layout>
      </ThemeProvider>
    </CacheProvider>
    <SEO />
    <FacebookMessenger />
  </>
)

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
}