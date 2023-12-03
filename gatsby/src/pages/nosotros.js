import React from 'react'

import PageTitle from 'utils/PageTitle'
import HeroContent from 'components/HeroContent'
import IlustracionBicicleta from 'svgs/ilustracion-bicicleta.svg'
import Benefits from 'components/nosotros/Benefits'
import Us from 'components/nosotros/Us'
import Recognitions from 'components/nosotros/Recognitions'
import ComingCourses from 'components/ComingCourses'

const section = 'Nosotros'
const description =
  'Una de las principales fortalezas de Bristol es su personal académico'

export default function Nosotros() {
  return (
    <>
      <PageTitle pageTitle={section} description={description} />
      <HeroContent
        mainText={description}
        image={IlustracionBicicleta}
        section={section}
      />
      <Benefits />
      <Us />
      <Recognitions />
      <ComingCourses titleText='Próximos cursos' />
    </>
  )
}
