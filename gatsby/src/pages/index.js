import React from 'react'

import HeroContent from 'components/HeroContent'
import FeaturedCourses from 'components/home/FeaturedCourses'
import ComingCoursesHome from 'components/home/ComingCourses'
import OurServices from 'components/home/OurServices'
import Testimonials from 'components/home/Testimonials'
import BottomImage from 'components/home/BottomImage'
import IlustracionSittingGirl from 'svgs/ilustracion-sitting-girl.svg'

export default function Home() {
  return (
    <>
      <HeroContent
        mainText='Speak a new language, discover a new world'
        image={IlustracionSittingGirl}
        description='Somos profesionales en la enseñanza de inglés. Nuestros maestros cuentan con grados académicos y certificaciones internacionales como maestros de inglés así como con una gran experiencia.'
        button='Nuestros cursos'
        buttonLink='/cursos'
      />
      <FeaturedCourses />
      <ComingCoursesHome />
      <OurServices />
      <Testimonials />
      <BottomImage />
    </>
  )
}
