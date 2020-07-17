import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Fade from 'react-reveal/Fade'
import { Button } from '../styles/CssHelpers'

// Styles definitions =================================
const Section = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  padding-top: 2rem;
  @media(${props => props.theme.min640}) {
    flex-direction: row;

    > div {
      flex-basis: 48%;

      &:first-of-type { margin-bottom: 0; }
    }
  }
  @media(${props => props.theme.min640}) {
    margin-right: auto;
    margin-left: auto;
    max-width: 86rem;
  }
  > div:first-of-type {
    margin-bottom: 2rem;
  }
`
const CourseBox = styled.div`
  height: 32vw;
  min-height: 320px;
  max-height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${props => props.theme.bristolBlue };
`
const ImageBox = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
}
const TextBox = styled.div`
  max-width: 250px;

  h2 {
    color: white;
    text-shadow: 4px 3px 3px hsla(220, 50%, 20%, 0.6);
  }
`
// Components =========================================
const courses = [
  { link: 'cursos', name: 'Cursos Generales'},
  { link: 'examenes', name: 'Exámenes Internacionales'},
]

const Course = ({ course, image }) => (
  <CourseBox>
    <Img fluid={image} style={ImageBox} />
    <TextBox>
      <Fade>
        <h2>{course.name}</h2>
        <Button as={Link} to={`/${course.link}`}>
          Conoce más
        </Button>
      </Fade>
    </TextBox>
  </CourseBox>
)

export default function FeaturedCourses() {
  const images = useStaticQuery(graphql`
    query {
      cursos: file(relativePath: { eq: "home-cursos-generales.png" }) {
        childImageSharp {
          fluid(maxWidth: 660) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      examenes: file(relativePath: { eq: "home-examenes-internacionales.png" }) {
        childImageSharp {
          fluid(maxWidth: 660) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <Section>
      {courses.map((course, index) => (
        <Course key={`featured_courses${index}`} course={course}
          image={images[course.link].childImageSharp.fluid}
        />
      ))}
    </Section>
  );
}