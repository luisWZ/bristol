import React from 'react'
import { css } from '@emotion/core'

import Layout from '../components/Layout'
import HeroContent from '../components/home/HeroContent'
import FeaturedCourses from '../components/home/FeaturedCourses'
import ComingCourses from '../components/home/ComingCourses'
import OurServices from '../components/home/OurServices'
import Testimonials from '../components/home/Testimonials'
import imgBottom from '../images/footer-hero.webp'
import Newsletter from '../components/Newsletter'

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
    <Layout>
      <HeroContent />
      <FeaturedCourses />
      <ComingCourses />
      <OurServices />
      <Testimonials />
      {BottomImage}
      <Newsletter />
    </Layout>
  )
}
