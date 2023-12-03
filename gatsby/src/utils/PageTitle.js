import React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from './UseSiteMetadata'

export default function PageTitle({ pageTitle, description }) {
  const { title: baseTitle } = useSiteMetadata()
  const title = pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle

  return (
    <Helmet title={title}>
      {!!description && <meta name='description' content={description} />}
    </Helmet>
  )
}
