import React from 'react'
import HeroContent from 'components/HeroContent'
import CourseCatalog from 'components/cursos/CourseCatalog'
import IlustracionSittingGirl from 'svgs/ilustracion-sitting-girl.svg'

export default function Cursos() {
  return (
    <>
      <HeroContent
        mainText={'Una de las principales fortalezas de Bristol es su personal académico.'}
        image={IlustracionSittingGirl}
      />
      <CourseCatalog />
    </>
  )
}