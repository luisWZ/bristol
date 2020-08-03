import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Container, Button } from '../styles/CssHelpers'
import SvgHomeHeroContent from '../svgs/SvgHomeHeroContent'

// Components =========================================
export default function HeroContent() {
  return (
    <Section>
      <Container_ as='div'>
        <TextBox>
          <Slogan
            data-sal='fade'
            data-sal-duration='500'
            data-sal-delay='100'
            data-sal-easing='easeOutSine'
          >
            Speak a new language, discover a new world
          </Slogan>
          <Description
            data-sal='slide-up'
            data-sal-duration='600'
            data-sal-delay='300'
            data-sal-easing='easeOutQuart'
          >
            Somos profesionales en la enseñanza de inglés, nuestros maestros
            cuentan con grados académicos y certificaciones internacionales como
            maestros de inglés así como con una gran experiencia
          </Description>
          <Button_
            as={Link}
            to='/cursos'
            data-sal='fade'
            data-sal-duration='800'
            data-sal-delay='800'
            data-sal-easing='easeInOutCubic'
          >
            Nuestros cursos
          </Button_>
        </TextBox>
        <Image
          data-sal='fade'
          data-sal-duration='1000'
          data-sal-delay='300'
          data-sal-easing='easeInOutCubic'
         />

      </Container_>
    </Section>
  )
}
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
const Image = styled(SvgHomeHeroContent)`
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
