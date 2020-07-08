import React from 'react'
// import styled from '@emotion/styled'
// import styled from 'styled-components'
// TO BE REMOVED
import styles from '../../assets/styles/bristol.module.scss'
import courses from '../../content/home-courses.yaml'

export default function ComingCourses() {
  return (
    <section className={styles.container}>
      <h1 className={styles.tac}>Próximos cursos</h1>
      {courses.map((course, index) => {
          const { tag, title, dates, time, start, location } = course
          return (
              <div key={`home_course${index}`}>
                  <span className="img"></span>
                  <small>{tag}</small>
                  <h3>{title}</h3>
                  <p>{dates}</p>
                  <p>{time}</p>
                  <p>Inicio: {start}</p>
                  <p>Campus: {location}</p>
                  <a href="/" className="bristol-btn">Más info</a>
              </div>
          )
      })}
  </section>
  )
}
