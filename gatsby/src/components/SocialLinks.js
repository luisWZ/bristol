import React from 'react'
import { css } from '@emotion/core'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const Facebook = () => (
  <a
    href='https://www.facebook.com/bristolinglesprofesional/'
    css={css`
      margin-right: 0.5rem;
    `}
  >
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
      {...props}
      css={css`
        display: flex;
        a {
          padding: 0 0.5rem;
          display: block;
          line-height: 32px;
        }
        svg {
          vertical-align: middle;
        }
      `}
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
