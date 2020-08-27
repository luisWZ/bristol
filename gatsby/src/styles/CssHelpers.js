import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import theme from './CssVariables'
import { email } from 'root/sitedefaults'

const borderBottomStyle = `border-bottom: 1px solid ${theme.gray};`

export const Main = styled.main`
  min-height: 100vh;
  overflow: hidden;
  background-color: ${props => props.theme.bgGray};
  padding-bottom: ${props => (parseInt(props.theme.newsletterOffset.split('rem')) + 4) + 'rem'};
  margin-bottom: -${props => props.theme.newsletterOffset};
`
export const Section = styled.section`
  background-color: white;
  ${props => props.borderBottom && borderBottomStyle}
`
export const Container = styled.section`
  margin-left: ${props => props.theme.gutter};
  margin-right: ${props => props.theme.gutter};
  padding-top: ${props => props.paddingBig || props.paddingBigTop ? '6rem' : '3rem'};
  padding-bottom: ${props => props.paddingBig || props.paddingBigBottom ? '6rem' : '3rem'};

  ${props => props.paddingSmall && `
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  `}

  @media (${props => props.theme.min1200}) {
    margin-left: auto;
    margin-right: auto;
    max-width: ${props => !props.slim ? '70rem' : '58rem'}; // 1120px || 928px
  }
`
export function ContainerWhite({ children, borderBottom = false }) {
  return (
    <section css={theme => css`
      background-color: white;
      ${borderBottom && borderBottomStyle}
    `}>
      <Container as='div'>{children}</Container>
    </section>
  )
}
export const Title = styled.h1`
  text-align: center;
  transition: color .24s ease-in;
  margin-top: 4rem;
  &:hover {
    color: ${props => props.theme.black};
  }
`
export const Subtitle = styled.h1`
  margin-top: 2rem;

  @media (${props => props.theme.max480}) {
    font-size:1.25rem;
    line-height: 1.25;
  }
`
export const Button = styled.a`
  font-size: 1.2rem;
  padding: 1rem 2.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.noBg ? props.theme.black : 'white'};
  border-radius: ${props => props.noRadius ? '0' : props.theme.radius};
  width: ${props => props.widthFull && '100%'};
  background-color: ${props =>
    props.noBg ? 'transparent' :
    props.red ? props.theme.bristolRed :
    props.theme.bristolBlue
  };
  &:hover {
    background-color: ${props =>
      props.noBg ? 'transparent' :
      props.blue ? props.theme.bristolRed :
      props.theme.pink
    };
  }
`
export const LinkSaberMas = () => <a
  css={theme => css` color: ${theme.bristolBlue}; text-decoration: underline; font-weight: bold;`}
  href={`mailto:${email}`}>Quiero saber más</a>

export const ButtonSaberMas = () => <Button href={`mailto:${email}`}>Quiero saber más</Button>

export const hoverStyle = (theme, color) => {
  return `
    &:hover {
      background-color: ${theme.bgGray};
      color: ${color === undefined ? theme.grayDark : theme.blueDark};
    }
  `
}

export const borderTopStyle = (theme) => `border-top: 1px solid ${theme.grayLight};`

export const Underline = styled(Link)`
  text-decoration: underline;
  color: ${props => props.theme.bristolBlue};
  font-weight: bold;
  display: block;

  & + & {
    margin-top: 0.5rem;
  }
`

export const Select = styled.select`
	/* font-family: sans-serif; */
	/* font-weight: 700; */
	/* color: #444; */
	/* box-sizing: border-box; */
	/* -moz-appearance: none;
	-webkit-appearance: none; */
  display: block;
	font-size: 16px;
	line-height: 1.3;
	padding: .6em 1.4em .5em .8em;
	width: 100%;
	max-width: 100%;
	margin: 0;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .5em;
	appearance: none;
	background-color: white;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
	background-repeat: no-repeat;
	background-position: right .7em top 50%;
	background-size: .65em auto;
	border: 1px solid ${props => props.theme.gray};

  &::-ms-expand {
    display: none;
  }
  &:hover {
    border-color: ${props => props.theme.bristolBlue};
  }
  &:focus {
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
    border-color: ${props => props.theme.bristolBlue};
  }
`