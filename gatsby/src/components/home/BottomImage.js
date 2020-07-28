import React from 'react'
import { css } from '@emotion/core'
import SvgHomeBottomImage from '../svgs/SvgHomeBottomImage'

// components =========================================
export default function BottomImage() {
  return (
    <SvgHomeBottomImage
      css={css`
        margin: 6rem auto;
        width: 80%;
        max-width: 566px;
      `}
    />
  )
}
