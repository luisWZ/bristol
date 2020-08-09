import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Button } from './styles/CssHelpers'

// Component ==========================================
export default function Course({ course }) {
  const { courseType, courseName, sessionDate, sessionTime, startingDate, campus, image } = course

  return (
    <CourseBox>
      <ImageLink to='/' aria-label={`Curso: ${courseName}`}>
        <Image src={image.file.url} alt='' />
      </ImageLink>
      <TextBox>
        <Small>{courseType}</Small>
        <h1 className='h3'>{courseName}</h1>
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
      <Button_ noRadius widthFull blue href='/'>
        Más info
      </Button_>
    </CourseBox>
  )
}

// Styles definitions =================================
export const CoursesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 320px));
  gap: ${props => props.theme.gap};
  justify-content: center;

  @media (${props => props.theme.min960}) {
    grid-template-columns: repeat(3, 1fr);
  }
`
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
    margin-bottom: calc(0.75rem + 0.1vw);
    transition: color 0.24s ease;

    + p {
      color: ${props => props.theme.black};
    }
  }
  p {
    line-height: 2;
    margin-bottom: calc(0.5rem + 0.1vw);
    font-size: calc(0.96rem + 0.2vw);

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
const Small = styled.p`
  color: ${props => props.theme.gray};
  && {
    font-size: 90%;
  }
`
const Button_ = styled(Button)`
  @media (${props => props.theme.min768}) {
    margin: 0.5rem 1rem 1rem;
    padding: 0.6rem 1.4rem;
    width: calc(100% - 2rem);
    border-radius: ${props => props.theme.radius};
  }
`