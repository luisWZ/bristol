import React from "react";
// import styled from '@emotion/styled'
// import styled from 'styled-components'
// TO BE REMOVED
import styles from "../../assets/styles/bristol.module.scss";
import services from '../../content/home-services.yaml'

export default function OurServices() {
  return (
    <section className={styles.container}>
      <h1 className={styles.tac}>Nuestros servicios</h1>
      {services.map((service, index) => {
        const { title, text } = service;
        return (
          <div key={`home_service${index}`}>
            <span className="img"></span>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="/">Saber más</a>
          </div>
        )
      })}
    </section>
  )
}
