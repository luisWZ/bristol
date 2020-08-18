import React from 'react'
import { css } from '@emotion/core'

import IlustracionFallingGirl from 'svgs/ilustracion-falling-girl.svg'

// components =========================================
export default function BottomImage() {
  return (
    <IlustracionFallingGirl
      css={css`
        margin: 6rem auto;
        width: 80%;
        max-width: 566px;
      `}
    />
  )
}
