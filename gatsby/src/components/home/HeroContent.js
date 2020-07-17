import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { Container, Button } from '../styles/CssHelpers'

//  styles ============================================
const Section = styled.section`
  /* max-height: 832px; */
  /* height: 100vh; */
  background-color: white;
  min-height: 640px;
  display: flex;
  justify-content: space-around;
  padding-top: 7rem;
  padding-bottom: 2rem;
`
const Container_ = styled(Container)`
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex: 0 1 25rem;

  @media(${props => props.theme.min720 }) {
    flex-grow: 1;
  }
`
const TextBox = styled.div`
  @media(${props => props.theme.max720 }) {
    flex-basis: 380px;
    text-align: center;
    margin-bottom: 2rem;
  }
  @media(${props => props.theme.min720 }) {
    flex-basis: 53%;
  }
`
const Image = styled(Img)`
  flex-basis: 80%;

  @media(${props => props.theme.min720 }) {
    flex-basis: 40%;
  }
`
const Slogan = styled.h1`
  font-size: calc(1rem + 1vw * 2.3);
  line-height: 1.4;
  letter-spacing: 1.4px;
`
const Description = styled.p`
  font-size: calc(0.91rem + 0.3vw * 1.5);
  margin-bottom: 2rem;
  max-width: 576px;
`
const Button_ = styled(Button)`
  @media(${props => props.theme.max720 }) { width: 100%; }
`
export default function HeroContent() {
  const heroImg = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "home-hero.png"}) {
        childImageSharp {
          fluid(
            maxWidth: 448
            traceSVG: { background: "#fff", color: "#f2f4f8" }
            ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `).file.childImageSharp.fluid
  return (
    <Section>
      <Container_ as='div'>
        <TextBox>
          <Slogan>Speak a new language, discover a new world</Slogan>
          <Description>
            Somos profesionales en la enseñanza de inglés, nuestros maestros
            cuentan con grados académicos y certificaciones internacionales como
            maestros de inglés así como con una gran experiencia
          </Description>
          <Button_ as={Link} to='/cursos'>
            Nuestros cursos
          </Button_>
        </TextBox>
        <Image
          fluid={heroImg}
          alt='Persona estudiando inglés' />
      </Container_>
    </Section>
  )
}
