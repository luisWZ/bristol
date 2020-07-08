import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import HeroContent from "../components/home/HeroContent"
import FeaturedCourses from "../components/home/FeaturedCourses"
import ComingCourses from "../components/home/ComingCourses"
import OurServices from "../components/home/OurServices"
import Testimonials from "../components/home/Testimonials"
import imgBottom from "../assets/imgs/footer-hero.webp"
import Newsletter from "../components/Newsletter"

const BottomImage = (
  <img src={imgBottom} alt="Girl reading and relaxing"
    css={css`margin: ${rhythm(6)} auto;`}/>
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
