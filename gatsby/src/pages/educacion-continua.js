import React from 'react'

import HeroContent from 'components/HeroContent'
import IlustracionBicicleta from 'svgs/ilustracion-bicicleta.svg'
import MainCourses from 'components/educacion-continua/MainCourses'
import CoursesAbroad from 'components/educacion-continua/CoursesAbroad'
import CoursesCompanies from 'components/educacion-continua/CoursesCompanies'

export default function EducacionContinua() {
  return (
    <>
      <HeroContent
        mainText='Una de las principales fortalezas de Bristol es su personal académico'
        image={IlustracionBicicleta}/>
      <MainCourses />
      <CoursesAbroad />
      <CoursesCompanies />
    </>
  )
}
