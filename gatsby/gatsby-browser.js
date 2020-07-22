import React from 'react'
// Needed for emotion =================================
import { CacheProvider } from '@emotion/core'
import { myCache } from './create-emotion-cache'
// Persisiting UI Elements ============================
// import Layout from './src/components/Layouts'
// import PropTypes from 'prop-types'
// import { ThemeProvider } from 'emotion-theming'
// import bristolTheme from './src/components/styles/CssVariables'
// import SEO from './src/utils/SEO'
// import FacebookMessenger from './src/utils/FacebookMessenger'
// Rendering ==========================================
export const wrapRootElement = ({ element }) => (
  <CacheProvider value={myCache}>
    {/* <ThemeProvider theme={bristolTheme}> */}
      {element}
    {/* </ThemeProvider> */}
  </CacheProvider>
)

// wrapRootElement.propTypes = {
//   element: PropTypes.node.isRequired,
// }