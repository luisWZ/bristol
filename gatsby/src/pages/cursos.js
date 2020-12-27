import React from 'react'
import PageTitle from 'utils/PageTitle'
import HeroContent from 'components/HeroContent'
import CourseCatalog from 'components/cursos/CourseCatalog'
import IllustrationDancingGirl from 'svgs/illustration-dancing-girl.svg'

export default function Cursos() {
  return (
    <>
      <PageTitle>Inglés General</PageTitle>
      <HeroContent
        mainText={'El inglés es algo necesario para nuestro desarrollo profesional'}
        image={IllustrationDancingGirl}
        section='Cursos de Inglés General'
      />
      <CourseCatalog />
    </>
  )
}