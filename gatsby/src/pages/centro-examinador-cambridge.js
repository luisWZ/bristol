import React from 'react'
import PageTitle from 'utils/PageTitle'
import HeroContent from 'components/HeroContent'
import Cambridge from 'components/examenes/Cambridge'
import ExamanesGrid from 'components/examenes/ExamanesGrid'
import IlustracionCertificacion from 'svgs/ilustracion-certificacion.svg'

const section = 'Centro Examinador Cambridge'
const description =
  'Obtén una certificación y acredita tu nivel de inglés a nivel internacional'

export default function CentroExaminadorCambridge() {
  return (
    <>
      <PageTitle pageTitle={section} description={description} />
      <HeroContent
        mainText={description}
        image={IlustracionCertificacion}
        section={section}
      />
      <Cambridge />
      <ExamanesGrid />
    </>
  )
}
