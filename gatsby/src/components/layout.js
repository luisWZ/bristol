import React, { Fragment } from 'react'
import Header from '../components/header'
import { css } from '@emotion/core'

export default function Layout({ children }) {
    return (
        <Fragment>
            <Header />
            <main css={css`
                padding-top: 90px;
            `}>
                {children}
            </main>
        </Fragment>
    )
}