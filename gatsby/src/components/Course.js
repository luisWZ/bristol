import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Button } from 'styles/CssHelpers'
import { Legal, Subtitle } from 'styles/FontStyles'

// Component ==========================================
export default function Course({ course }) {
  const {
    courseType,
    courseName,
    sessionDate,
    sessionTime,
    startingDate,
    campus,
    image,
    slug,
  } = {...course, slug: `/cursos/${course.slug}` }

  return (
    <CourseBox>
      <ImageLink to={slug} aria-label={`Curso: ${courseName}`}>
        <Image src={image.file.url} alt='' />
      </ImageLink>
      <TextBox>
        <Small css={css`text-transform: uppercase;`}>{courseType}</Small>
        <Subtitle as='h1'>{courseName}</Subtitle>
        <p>
          {sessionDate}
          <br />
          {sessionTime}
        </p>
        <Small>
          Inicio: {startingDate}
          <br />
          Campus: {campus}
        </Small>
      </TextBox>
      <Button_ noRadius widthFull blue href={slug}>
        Más info
      </Button_>
    </CourseBox>
  )
}
// Styles definitions =================================
const CourseBox = styled.div`
  background-color: white;
  @media (${props => props.theme.max560}) {
    margin-bottom: 1.5rem;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
    h1 {
      color: ${props => props.theme.pink};
    }
  }
`
const ImageLink = styled(Link)`
  display: block;
  position: relative;
  padding-bottom: 70%;
  height: 0;
  overflow: hidden;
`
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  transition: transform 0.32s ease-in-out;
  background-color: ${props => props.theme.blueGray};
`
const TextBox = styled.div`
  padding: 1rem 1rem 0.5rem;

  h1 {
    margin-bottom: 0.8rem;
    transition: color 0.24s ease;

    + p {
      color: ${props => props.theme.black};
    }
  }
  p {
    margin-bottom: 0.7rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
const Small = styled(Legal)`
  color: ${props => props.theme.grayDark};
`
const Button_ = styled(Button)`
  @media (${props => props.theme.min768}) {
    margin: 0.5rem 1rem 1rem;
    padding: 0.6rem 1.4rem;
    width: calc(100% - 2rem);
    border-radius: ${props => props.theme.radius};
  }
`
