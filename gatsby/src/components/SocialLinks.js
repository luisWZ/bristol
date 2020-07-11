import React from 'react'
import { css } from '@emotion/core'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

// components =========================================
const socialLink = (url, children) => (
  function SocialLink() {
    return <a href={url}>{children}</a>
  }
)
const Facebook = socialLink('https://www.facebook.com/bristolinglesprofesional/', <FaFacebookF />)
const Instagram = socialLink('https://www.instagram.com/bristolingles/', <FaInstagram />)
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
export default function SocialLinks({ className }) {
  return (
    <List className={className}>
      <Facebook />
      <Instagram />
    </List>
  )
}
