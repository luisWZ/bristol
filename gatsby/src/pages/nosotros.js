import React from 'react'

import HeroContent from 'components/HeroContent'
import IlustracionBicicleta from 'svgs/ilustracion-bicicleta.svg'
import Benefits from 'components/nosotros/Benefits'
import Us from 'components/nosotros/Us'
import Recognitions from 'components/nosotros/Recognitions'
import ComingCourses from 'components/ComingCourses'

export default function Nosotros() {
  return (
    <>
      <HeroContent
        mainText='Una de las principales fortalezas de Bristol es su personal académico'
        image={IlustracionBicicleta}
        section='Nosotros'
      />
      <Benefits />
      <Us />
      <Recognitions />
      <ComingCourses />
    </>
  )
}