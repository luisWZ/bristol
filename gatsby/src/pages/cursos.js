import React from 'react'
import PageTitle from 'utils/PageTitle'
import HeroContent from 'components/HeroContent'
import CourseCatalog from 'components/cursos/CourseCatalog'
import IllustrationDancingGirl from 'svgs/illustration-dancing-girl.svg'

const section = 'Inglés General'
const description =
  'El inglés es algo necesario para nuestro desarrollo profesional'

export default function Cursos() {
  return (
    <>
      <PageTitle pageTitle={section} description={description} />
      <HeroContent
        mainText={description}
        image={IllustrationDancingGirl}
        section={`Cursos de ${section}`}
      />
      <CourseCatalog />
    </>
  )
}
