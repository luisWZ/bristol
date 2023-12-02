import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useTheme } from '@emotion/react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import { Container, title } from 'styles/CssHelpers'
import { Title2 } from 'styles/FontStyles'
import IconArrow from 'svgs/icon-arrow-form.svg'

// components =========================================
export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    const submit = await addToMailchimp(email)
    setMessage(submit.msg)
    setEmail('')
  }
  const handleEmailChange = event => setEmail(event.target.value)

  return (
    <Container css={container}>
      <TitleStyles>
        {message ? message : 'Suscríbete a nuestro newsletter'}
      </TitleStyles>
      <form css={formStyles} method='post' onSubmit={handleSubmit}>
        <input
          css={inputStyles}
          id='newsletter'
          name='newsletter'
          type='email'
          required
          aria-label='Newsletter'
          placeholder='Escribe tu correo electrónico'
          value={email}
          onChange={handleEmailChange}
        />
        <button
          css={buttonStyles}
          type='submit'
          aria-label='Suscríbir a newsletter'
        >
          <IconArrow fill={useTheme().pink} />
        </button>
      </form>
    </Container>
  )
}
const container = theme => css`
  background-color: white;
  position: relative;
  z-index: 1;
  margin-bottom: -${theme.newsletterOffset};
  padding: 8vw ${theme.gutter};

  @media (${theme.min480}) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`
const formStyles = theme => css`
  display: flex;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 2px solid ${theme.blueDark};
`
const inputStyles = css`
  outline: 0;
  border: none;
  padding: 0.8rem 0.5rem;
  flex-grow: 1;
`
const buttonStyles = css`
  background-color: transparent;
  svg {
    vertical-align: middle;
  }
`
const TitleStyles = styled(Title2)`
  ${title}
  margin-top: 0;
  @media (${props => props.theme.max420}) {
    font-size: 1.4rem;
  }
`
