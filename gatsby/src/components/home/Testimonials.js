import React from 'react'
// import styled from '@emotion/styled'
// import styled from 'styled-components'
// TO BE REMOVED
import styles from '../../assets/styles/bristol.module.scss'
import testimonials from '../../content/home-testimonials.yaml'

export default function Testimonials() {
  return (
    <section className={styles.container}>
        <h1>Testimonios</h1>
        {testimonials.map((testimonial, index) => {
            const { text, name } = testimonial
            return (
                <div key={`home_testimonial${index}`}>
                    <p>{text}</p>
                    <h4>{name}</h4>
                    <span className="img"></span>
                </div>
            )
        })}
    </section>
  )
}
