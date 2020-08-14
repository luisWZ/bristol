import React from 'react'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import CssModernReset from '../styles/CssModernReset'
import CssScaffolding from '../styles/CssScaffolding'
import CssTheme from '../styles/CssTheme'

export default function GlobalStyles() {
  return (
    <>
      <Global styles={CssModernReset} />
      <Global styles={CssScaffolding} />
      <CssTheme />
    </>
  )
}
export const Main = styled.main`
  min-height: 100vh;
  background-color: ${props => props.theme.bgGray};
  padding-bottom: ${props => props.theme.newsletterOffset};
  margin-bottom: -${props => props.theme.newsletterOffset};
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  transition: height .3s ease;
  background: rgba(0,0,0,0.5);
  height: ${props => props.menuOpen ? '100%' : '0%'};
  display: ${props => props.menuOpen ? 'block' : 'none'};
`