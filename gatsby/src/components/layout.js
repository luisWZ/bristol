import React, { Fragment } from 'react'
import Header from '../components/header'

// import { css } from '@emotion/core'
import styled from 'styled-components'

const Main = styled.main`
    padding-top: 90px;
`

export default function Layout({ children }) {
    return (
        <Fragment>
            <Header />
            <Main>{children}</Main>
        </Fragment>
    )
}