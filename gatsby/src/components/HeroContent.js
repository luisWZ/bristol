import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { Section, Container, Button } from 'styles/CssHelpers'

// Components =========================================
const HeroContent = ({mainText, image, description, button, buttonLink }) => {
  const Image = styled(image)`
    flex-basis: 80%;

    @media(${props => props.theme.min720 }) {
      flex-basis: 0;
      flex-grow: 1;
    }
  `
  return (
    <Section_>
      <Container_ as='div'>
        <TextBox>
          <Slogan
            data-sal='fade'
            data-sal-duration='500'
            data-sal-delay='100'
            data-sal-easing='easeOutSine'
          >
            {mainText}
          </Slogan>
          {description && <Description
            data-sal='slide-up'
            data-sal-duration='600'
            data-sal-delay='300'
            data-sal-easing='easeOutQuart'
          >
            {description}
          </Description>
          }
          {button && <Button_
            as={Link}
            to={buttonLink}
            data-sal='fade'
            data-sal-duration='800'
            data-sal-delay='800'
            data-sal-easing='easeInOutCubic'
          >
            {button}
          </Button_>
          }
        </TextBox>
        <Image
          data-sal='fade'
          data-sal-duration='1000'
          data-sal-delay='300'
          data-sal-easing='easeInOutCubic'
         />
      </Container_>
    </Section_>
  )
}

HeroContent.propTypes = {
  mainText: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
}

export default HeroContent

//  styles ============================================
const Section_ = styled(Section)`
  display: flex;
  padding-top: 7rem;
  padding-bottom: 2rem;
  justify-content: space-around;

  @media(${props => props.theme.min720 }) {
    min-height: 640px;
  }
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
const Slogan = styled.h1`
  font-size: calc(1rem + 1vw * 2.3);
  line-height: 1.4;
`
const Description = styled.p`
  font-size: calc(0.91rem + 0.3vw * 1.5);
  margin-bottom: 2rem;
  max-width: 576px;
`
const Button_ = styled(Button)`
  @media(${props => props.theme.max720 }) { width: 100%; }
`