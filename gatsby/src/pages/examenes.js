import React from 'react'
import HeroContent from 'components/HeroContent'
import Cambridge from 'components/examenes/Cambridge'
import ExamanesGrid from 'components/examenes/ExamanesGrid'
import IlustracionFallingGirl from 'svgs/ilustracion-falling-girl.svg'

export default function Examenes() {
  return (
    <>
      <HeroContent
        mainText='Obtén una certificación y acredita tu nivel de inglés a nivel internacional'
        image={IlustracionFallingGirl} />
      <Cambridge />
      <ExamanesGrid />
    </>
  )
}
