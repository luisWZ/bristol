import React from 'react'

// elements
import HeroContent from '../components/home/HeroContent'
import FeaturedCourses from '../components/home/FeaturedCourses'
import ComingCoursesHome from '../components/home/ComingCourses'
import OurServices from '../components/home/OurServices'
import Testimonials from '../components/home/Testimonials'
import BottomImage from '../components/home/BottomImage'

// components =========================================
export default function Home() {
  return (
    <>
      <HeroContent />
      <FeaturedCourses />
      <ComingCoursesHome />
      <OurServices />
      <Testimonials />
      <BottomImage />
    </>
  )
}
