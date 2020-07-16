import React from 'react'
import { css } from '@emotion/core'

// elements
import HeroContent from '../components/home/HeroContent'
import FeaturedCourses from '../components/home/FeaturedCourses'
import ComingCourses from '../components/home/ComingCourses'
import OurServices from '../components/home/OurServices'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/Newsletter'
import imgBottom from '../images/footer-hero.webp'

// components =========================================
const BottomImage = (
  <img src={imgBottom} alt='Mujer leyendo recostada'
    css={css`
      margin: 6rem auto;
      width: 80%;
      max-width: 566px;
    `} />
)
export default function Home() {
  return (
    <>
      <HeroContent />
      <FeaturedCourses />
      <ComingCourses />
      <OurServices />
      <Testimonials />
      {BottomImage}
      <Newsletter />
    </>
  )
}
