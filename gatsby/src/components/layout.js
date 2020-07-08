import React from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Footer from './Footer'
import CssModernReset from './CssModernReset'
// import CssScaffolding from './CssScaffolding'

const Main = styled.main`
  background-color: #f2f4f8;
  padding-top: 90px;
`

export default function Layout({ children }) {
  return (
    <>
      <CssModernReset />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
