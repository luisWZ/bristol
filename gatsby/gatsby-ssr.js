import React from 'react'

// Needed for emotion =================================
import { CacheProvider } from '@emotion/core'
import createEmotionServer from 'create-emotion-server'
import { renderToString } from 'react-dom/server'
import { myCache } from './create-emotion-cache'

// Rendering ==========================================
export const replaceRenderer = ({
  replaceBodyHTMLString,
  bodyComponent,
  setHeadComponents,
}) => {
  const { extractCritical } = createEmotionServer(myCache)

  const element = <CacheProvider value={myCache}>{bodyComponent}</CacheProvider>

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

// wrapRootElement.propTypes = {
//   element: PropTypes.node.isRequired,
// }
