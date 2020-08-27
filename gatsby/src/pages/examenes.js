import React from 'react'
import HeroContent from 'components/HeroContent'
import Cambridge from 'components/examenes/Cambridge'
import ExamanesGrid from 'components/examenes/ExamanesGrid'
import IlustracionCertificacion from 'svgs/ilustracion-certificacion.svg'

export default function Examenes() {
  return (
    <>
      <HeroContent
        mainText='Obtén una certificación y acredita tu nivel de inglés a nivel internacional'
        image={IlustracionCertificacion}
        section='Centro Examinador Cambridge'
      />
      <Cambridge />
      <ExamanesGrid />
    </>
  )
}
