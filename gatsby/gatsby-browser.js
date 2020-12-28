import React from 'react'

// Needed for emotion =================================
import { CacheProvider } from '@emotion/react'
import { myCache } from './create-emotion-cache'

// Rendering ==========================================
export const wrapRootElement = ({ element }) => (
  <CacheProvider value={myCache}>{element}</CacheProvider>
)

// If omitted service workers create a cache mess when updating the page
export const onServiceWorkerUpdateReady = () => {
  window.location.reload(true)
}

// wrapRootElement.propTypes = {
//   element: PropTypes.node.isRequired,
// }
