import React from 'react'
// Needed for emotion =================================
import { CacheProvider } from '@emotion/core'
import createEmotionServer from 'create-emotion-server'
import { renderToString } from 'react-dom/server'
import { myCache } from './create-emotion-cache'
// Persisiting UI Elements ============================
// import PropTypes from 'prop-types'
// import bristolTheme from './src/components/styles/CssVariables'
// import { ThemeProvider } from 'emotion-theming'
// import Layout from './src/components/Layout'
// import SEO from './src/utils/SEO'
// import FacebookMessenger from './src/utils/FacebookMessenger'
// Rendering ==========================================
export const replaceRenderer = ({
  replaceBodyHTMLString,
  bodyComponent,
  setHeadComponents,
}) => {
  const { extractCritical } = createEmotionServer(myCache)

  const element = (
    <CacheProvider value={myCache}>
      {/* <ThemeProvider theme={bristolTheme}> */}
        {bodyComponent}
      {/* </ThemeProvider> */}
    </CacheProvider>
  )

  const { html, css, ids } = extractCritical(renderToString(element))

  setHeadComponents([
    <style
      data-emotion-css={ids.join(' ')}
      dangerouslySetInnerHTML={{
        __html: css,
      }}
    />,
  ])

  replaceBodyHTMLString(html)
}

// export const wrapRootElement = ({ element, props }) => (
//   <>
//     <Layout {...props}>{element}</Layout>
//   </>
// )

// wrapRootElement.propTypes = {
//   element: PropTypes.node.isRequired,
// }
