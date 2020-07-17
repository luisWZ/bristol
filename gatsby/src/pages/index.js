import React from 'react'

// elements
import HeroContent from '../components/home/HeroContent'
import FeaturedCourses from '../components/home/FeaturedCourses'
import ComingCourses from '../components/home/ComingCourses'
import OurServices from '../components/home/OurServices'
import Testimonials from '../components/home/Testimonials'
import BottomImage from '../components/home/BottomImage'
import Newsletter from '../components/Newsletter'

// components =========================================
export default function Home() {
  return (
    <>
      <HeroContent />
      <FeaturedCourses />
      <ComingCourses />
      <OurServices />
      <Testimonials />
      <BottomImage />
      <Newsletter />
    </>
  )
}
