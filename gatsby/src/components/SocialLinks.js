import React from 'react'
import { css } from '@emotion/core'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const Facebook = () => (
  <a href='https://www.facebook.com/bristolinglesprofesional/'>
    <FaFacebookF />
  </a>
)

const Instagram = () => (
  <a href='https://www.instagram.com/bristolingles/'>
    <FaInstagram />
  </a>
)

export default function SocialLinks(props) {
  return (
    <ul
    css={theme => css`
        display: flex;

        a {
          padding: 0 0.7rem;
          display: block;
          line-height: 2.4rem;
        }

        svg { vertical-align: middle; }
      `}
      {...props}
    >
      <li>
        <Facebook />
      </li>
      <li>
        <Instagram />
      </li>
    </ul>
  )
}
