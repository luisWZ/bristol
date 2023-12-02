import React from 'react'
import { Helmet } from 'react-helmet'

import { useSiteMetadata } from './UseSiteMetadata'
import { facebookhref1, facebookhref2 } from 'root/sitedefaults'

// Used in layout template
export default function HtmlHeader({ children }) {
  const { title, description, keywords, lang } = useSiteMetadata()
  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='preconnect' href={facebookhref1} />
      <link rel='preconnect' href={facebookhref2} />
      {children}
    </Helmet>
  )
}
