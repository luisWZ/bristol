import React from 'react'
import { Helmet } from 'react-helmet'

import { useSiteMetadata } from './UseSiteMetadata'

export default function HtmlHeader({ children }) {
  const { title, description, keywords, lang } = useSiteMetadata()
  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel="preconnect" href='https://connect.facebook.net' />
      <link rel="preconnect" href='https://scontent.fmid4-1.fna.fbcdn.net' />
      {children}
    </Helmet>
  )
}
