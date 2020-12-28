import React from 'react'
import { css } from '@emotion/react'

import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { instagram, facebook } from 'root/sitedefaults'

// components =========================================
export default function SocialLinks({ className }) {
  return (
    <List className={className}>
      <Facebook />
      <Instagram />
    </List>
  )
}

const socialLink = (url, children, domain) => (
  function SocialLink() {
    return (
      <li>
        <a target="_blank" rel="noreferrer" href={url} aria-label={`Página de ${domain}`}>
          {children}
        </a>
      </li>
    )
  }
)

const Facebook = socialLink( facebook, <FaFacebookF />, 'facebook')
const Instagram = socialLink( instagram, <FaInstagram />, 'instagram')

const List = (props) => (
  <ul className={props.className} css={css`
    display: flex;
    a {
      padding: 0 0.7rem;
      display: block;
      height: 2.4rem;
      display: inline-flex;
      align-items: center;
    }
  `}
  {...props} />
)
