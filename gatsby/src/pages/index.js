import React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'

import imgHero from '../assets/imgs/home-temporal.webp'
import imgCursos from '../assets/imgs/home-cursos-generales.webp'
import imgExamenes from '../assets/imgs/home-examenes-internacionales.webp'
import imgFooter from '../assets/imgs/footer-hero.webp'

import courses from '../content/home-courses.yaml'
import services from '../content/home-services.yaml'
import testimonials from '../content/home-testimonials.yaml'

// CSS styles =================================================
const Cursos = styled.div({
    flexBasis: '46%',
    height: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
},
props => ({backgroundImage: `url(${props.img})`})
)
// styles end =================================================

export default function Home() {
    return (
        <Layout>
            {/* Hero content */}
            <section css={css`
                background-color: white;
                min-height: calc(100vh - 90px);
                max-height: 900px;
                display: flex;
            `}>
                <div className="container"
                css={css`
                    padding-top: 2rem;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-around;
                `}>
                    <div css={css`flex-basis: 40%;`}>
                        <h1>Speak a new language, discover a new world</h1>
                        <p>Somos profesionales en la enseñanza de inglés nuestros maestros cuentan con grados académicos y certificaciones internacionales como maestros de inglés así como con una gran experiencia</p>
                        <Link className="bristol-btn" css={css`
                            background-color: salmon;
                        `} to="/cursos">Nuestros cursos</Link>
                    </div>
                    <img src={imgHero} alt="Speak a new languaje" css={css`
                        max-width: 40%;
                    `}/>
                </div>
            </section>
            {/* Main products */}
            <section css={css`
                display: flex;
                justify-content: space-between;
                padding-top: 2rem;
            `}>
                {['Cursos Generales', 'Exámenes Internacionales'].map((title, index) => {
                    const { link, img } = index === 0 ? {link: 'cursos', img: imgCursos} : {link: 'examenes', img: imgExamenes}
                    return (
                        <Cursos img={img} key={`main_products${index}`}>
                            <div css={css`width: 50%;`}>
                                <h1>{title}</h1>
                                <Link className="bristol-btn" to={`/${link}`}>Conoce más</Link>
                            </div>
                        </Cursos>
                    )
                })}
            </section>
            {/* Proximos cursos */}
            <section className="container">
                <h1 className="tac">Próximos cursos</h1>
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
                            <a href="javascript:void(0);" className="bristol-btn">Más info</a>
                        </div>
                    )
                })}
            </section>
            {/* Nuestros servicios */}
            <section className="container">
                <h1 className="tac">Nuestros servicios</h1>
                {services.map((service, index) => {
                    const { title, text } = service
                    return (
                        <div key={`home_service${index}`}>
                            <span className="img"></span>
                            <h3>{title}</h3>
                            <p>{text}</p>
                            <a href="javascript:void(0);">Saber más</a>
                        </div>
                    )
                })}
            </section>
            {/* Testimonios */}
            <section className="container">
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

            {/* Footer img */}
            <img src={imgFooter} alt="Girl reading and relaxing" css={css`
                margin: ${rhythm(6)} auto;
            `} />

            {/* newsletter */}
            <section className="container">
                <h4>Suscríbete a nuestro newsletter</h4>
                <form action="">
                    <input type="text" placeholder="Escribe tu correo electrónico" />
                    <button type="submit">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M29.241 13.9242C28.3926 13.0947 27.5349 12.2847 26.6692 11.4936C23.9172 8.98143 20.9604 6.32186 17.8006 3.51489C17.0048 2.80687 15.7973 2.83196 15.0305 3.57212L14.4362 4.14607C13.627 4.92622 13.6035 6.21445 14.3821 7.02518L19.7059 12.5623C19.2927 12.5623 18.8787 12.5599 18.4655 12.5599C13.6184 12.5599 8.77203 12.6023 3.92411 12.6885C2.85621 12.7081 2 13.5487 2 14.5781V15.8334C2 16.8637 2.85621 17.7042 3.92411 17.723C8.77203 17.8093 13.6184 17.8524 18.4655 17.8524C19.0645 17.8524 19.6643 17.8493 20.2642 17.8485L14.3805 23.9752C13.6027 24.7867 13.627 26.0742 14.4354 26.8543L15.0297 27.4283C15.7973 28.1684 17.0048 28.1928 17.8006 27.4847C20.9596 24.6738 23.9164 22.0103 26.6692 19.495C27.5349 18.7039 28.3926 17.8932 29.241 17.0636C29.2528 17.0527 29.2645 17.0409 29.2763 17.0291C30.1239 16.162 30.1082 14.7718 29.241 13.9242Z" fill="#FA4D56"/>
                        </svg>
                    </button>
                </form>
            </section>
        </Layout>
    )
}
