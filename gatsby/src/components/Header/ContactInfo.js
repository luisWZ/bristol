import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'

import { email, telXalapa, tel2Xalapa, telCoatepec } from 'root/sitedefaults'
import { formatPhone } from 'utils/helpers'
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
        <ContactAnchor href={`tel:${telXalapa}`}>
          <SvgPhone fill={color} />
          <span>Xalapa</span>
          <span>{formatPhone(telXalapa)}</span>
        </ContactAnchor>
        <ContactAnchor href={`tel:${tel2Xalapa}`}
          css={css`display: none; @media (min-width: ${secondPhone}) { display: inherit; } `}
        >
          <span style={{ margin: '0 0.5em' }}>y</span>
          <span>{formatPhone(tel2Xalapa)}</span>
        </ContactAnchor>
      </ContactLi>
      <ContactLi>
        <ContactAnchor href={`tel:${telCoatepec}`}>
          <SvgPhone fill={color} />
          <span>Coatepec</span>
          <span>{formatPhone(telCoatepec)}</span>
        </ContactAnchor>
      </ContactLi>
    </ContactBox>
  )
}
// styles =============================================
const secondPhone = '72em'

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
  @media (min-width: ${secondPhone}) {
    grid-template-columns: minmax(208px , 256px) minmax(208px , 320px) minmax(208px , 256px);
  }
`
const ContactLi = styled.li`
  display: flex;
  justify-content: center;

  span {
    &:last-of-type {
      display: none;
    }
    @media (${props => props.theme.min640}) {
      &:last-of-type {
        display: initial;
      }
      &:first-of-type {
        margin-right: 1em;
      }
    }
  }
  &:first-of-type {
    border-right: 1px solid ${props => props.theme.grayLight};

    @media (max-width: 18.9375em) {
      display: none;
    }
    @media (${props => props.theme.min640}) {
      span {
        &:first-of-type {
          display: none;
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