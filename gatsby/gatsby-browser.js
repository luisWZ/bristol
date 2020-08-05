import React from 'react'

// Needed for emotion =================================
import { CacheProvider } from '@emotion/core'
import { myCache } from './create-emotion-cache'

// Rendering ==========================================
export const wrapRootElement = ({ element }) => (
  <CacheProvider value={myCache}>{element}</CacheProvider>
)

// wrapRootElement.propTypes = {
//   element: PropTypes.node.isRequired,
// }
