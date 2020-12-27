import React from 'react'
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from './UseSiteMetadata'

export default function PageTitle({ children }) {
  const { title } = useSiteMetadata()
  return (
    <Helmet>
      <title>{`${children} | ${title}`}</title>
    </Helmet>
  )
}
