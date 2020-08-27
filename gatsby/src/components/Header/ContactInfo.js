import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { email } from 'root/sitedefaults'

import { hoverStyle } from 'styles/CssHelpers'
import SvgEnvelope from '../Svg/SvgEnvelope'
import SvgPhone from '../Svg/SvgPhone'

export default function ContactInfo() {
  const color = useTheme().pink

  return (
    <ContactBox>
      <ContactLi>
        <ContactAnchor href={`mailto:${email}`}>
          <SvgEnvelope fill={color} />
          <span>Email</span>
          <span>{email}</span>
        </ContactAnchor>
      </ContactLi>
      <ContactLi>
        <ContactAnchor href='tel:2288405791'>
          <SvgPhone fill={color} />
          <span>Xalapa</span>
          <span>2288 40 57 91</span>
        </ContactAnchor>
      </ContactLi>
      <ContactLi>
        <ContactAnchor href='tel:2288160543'>
          <SvgPhone fill={color} />
          <span>Coatepec</span>
          <span>2288 16 05 43</span>
        </ContactAnchor>
      </ContactLi>
    </ContactBox>
  )
}

const ContactBox = styled.ul`
  display: grid;
  grid-row: 2 / 3;
  grid-column: 1 / -1;
  grid-template-columns: repeat(auto-fit, minmax(100px , 1fr));
  border-top: 1px solid ${props => props.theme.grayLight};

  @media (${props => props.theme.min848}) {
    border-top: none;
    grid-row: 1 / 2;
    grid-column: 2 / -2;
  }
  @media (${props => props.theme.min960}) {
    grid-template-columns: repeat(3, minmax(208px , 256px));
  }
  `

const ContactLi = styled.li`
  span {
    &:last-of-type {
      margin-left: 1em;
      display: none;

      @media (${props => props.theme.min640}) {
        display: initial;
      }
    }
  }
  &:first-of-type {
    border-right: 1px solid ${props => props.theme.grayLight};

    @media (${props => props.theme.min640}) {
      span {
        &:first-of-type {
          display: none;
        }
        &:last-of-type {
          margin-left: 0;
        }
      }
    }
  }
  &:last-of-type {
    border-left: 1px solid ${props => props.theme.grayLight};

    @media (${props => props.theme.min848}) {
      border-right: 1px solid ${props => props.theme.grayLight};
    }
  }
`
const ContactAnchor = styled.a`
  height: 2.5rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => hoverStyle(props.theme)}

  svg {
    margin-right: 0.5em;

    @media (${props => props.theme.min848}) and (${props => props.theme.max960}) {
      display: none;
    }
  }
`