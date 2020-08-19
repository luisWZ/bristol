import React from 'react'
import { Global } from '@emotion/core'

import CssModernReset from './CssModernReset'
import CssScaffolding from './CssScaffolding'
import CssTheme from './CssTheme'

export default function GlobalStyles() {
  return (
    <>
      <Global styles={CssModernReset} />
      <Global styles={CssScaffolding} />
      <CssTheme />
    </>
  )
}
// styles =============================================
