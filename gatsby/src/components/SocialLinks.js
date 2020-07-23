import React from 'react'
import { css } from '@emotion/core'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

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
        <a href={url} aria-label={`Página de ${domain}`}>
          {children}
        </a>
      </li>
    )
  }
)

const Facebook = socialLink('https://www.facebook.com/bristolinglesprofesional/', <FaFacebookF />, 'facebook')
const Instagram = socialLink('https://www.instagram.com/bristolingles/', <FaInstagram />, 'instagram')

const List = (props) => (
  <ul className={props.className} css={theme => css`
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
