import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Container, Button } from '../CssHelpers'
import imgHero from '../../images/home-temporal.webp'

const Section = styled.section`
  background-color: white;
  min-height: 540px;
  max-height: 900px;
  height: 100vh;
  display: flex;
  justify-content: space-around;
`
const Container_ = styled(Container)`
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex: 0 1 25rem;
  @media(${({ theme }) => theme.mq.min720}) {
    flex-grow: 1;

    > div {
      flex-basis: 50%;
    }
    > img {
      max-width: 40%;
    }
  }
`
const TextBox = styled.div`
  @media(${({ theme }) => theme.mq.max720}) {
    flex-basis: 380px;
    text-align: center;
  }
`
const Image = styled.img`
  max-width: 80%;
`
const Slogan = styled.h1`
  font-size: calc(1.2rem + 0.5vw);
  line-height: 1.4;
  letter-spacing: 1.4px;
  max-width: 420px;
`
const Description = styled.p`
  font-size: calc(0.94rem + 0.3vw);
  margin-bottom: 2rem;
  max-width: 576px;
`
const Button_ = styled(Button)`
  @media(${({ theme }) => theme.mq.max720}) { width: 100%; }
`
export default function HeroContent() {
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
          <Button_ as={Link} to='/cursos'>Nuestros cursos</Button_>
        </TextBox>
        <Image src={imgHero} alt='Persona estudiando inglés' />
      </Container_>
    </Section>
  )
}
