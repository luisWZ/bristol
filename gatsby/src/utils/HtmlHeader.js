import React from 'react'
import { Helmet } from 'react-helmet'

import { useSiteMetadata } from './UseSiteMetadata'
import { facebookhref1, facebookhref2 } from 'root/sitedefaults'

// Used in layout template
export default function HtmlHeader({ children }) {
  const { keywords, lang } = useSiteMetadata()
  return (
    <Helmet htmlAttributes={{ lang }}>
      <meta name='keywords' content={keywords} />
      <link rel='preconnect' href={facebookhref1} />
      <link rel='preconnect' href={facebookhref2} />
      {children}
    </Helmet>
  )
}
