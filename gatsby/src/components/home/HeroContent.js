import React from 'react'
import HeroContent from '../HeroContent'
import image from '../svgs/SvgHomeHeroContent'

// Components =========================================
const mainText = `Speak a new language, discover a new world`
const description = `Somos profesionales en la enseñanza de inglés, nuestros maestros cuentan con grados académicos y certificaciones internacionales como maestros de inglés así como con una gran experiencia`
const button = `Nuestros cursos`
const buttonLink = `/cursos`

export default function HomeHeroContent() {
  return (
    <HeroContent
      {...{ mainText }}
      {...{image}}
      {...{ description }}
      {...{ button }}
      {...{ buttonLink }}
    />
  )
}
