import React from 'react'
import styled from '@emotion/styled'
// import { ThemeProvider } from 'emotion-theming'
// import createCache from '@emotion/cache'
// import { Global, CacheProvider } from '@emotion/core'

// UI Components ======================================
import Header from './Header'
import Footer from './Footer'

// Style Definitions ==================================
// import CssModernReset from './src/components/styles/CssModernReset'
// import CssScaffolding from './src/components/styles/CssScaffolding'
// import CssVariables from './src/components/styles/CssVariables'
// import CssTheme from './src/components/styles/CssTheme'

// Emotion configs ====================================
// const configProvider = createCache({
//   key: 'bristol',
//   prefix: process.env.NODE_ENV === 'develop' ? false : true,
// })

// Main UI Layout =====================================
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

// styles =============================================
const Main = styled.main`
  min-height: 100vh;
  background-color: ${props => props.theme.bgGray};
  > h1 {
    padding: 7rem 2vw 0;
  }
`

// <Global styles={CssModernReset} />
//       <Global styles={CssScaffolding} />
//       {/* <CacheProvider value={configProvider}> */}
//         <ThemeProvider theme={CssVariables}>
//           <CssTheme />
//           <Layout {...props}>{element}</Layout>
//         </ThemeProvider>
//       {/* </CacheProvider> */}
//       <SEO />
//       <FacebookMessenger />
